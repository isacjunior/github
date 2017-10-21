import { createReducer } from 'core/utils/redux'
import { types } from './actions'

const initialState = {
  repositories: [],
  requests: [],
  preloaderRepositories: true,
  preloaderRequests: true
}

const reducer = {
  [types.LOADED_REPOSITORIES](state, { res }) {
    return {
      ...state,
      repositories: res.items
    }
  },
  [types.LOADED_REQUESTS](state, { res }) {
    return {
      ...state,
      requests: res
    }
  },
  [types.UPDATE_PRELOADER_REPOSITORIES](state, { bool }) {
    return {
      ...state,
      preloaderRepositories: bool
    }
  },
  [types.UPDATE_PRELOADER_REQUESTS](state, { bool }) {
    return {
      ...state,
      preloaderRequests: bool
    }
  }
}

export default createReducer(initialState, reducer)
