import { createReducer } from 'core/utils/redux'
import { types } from './actions'

const initialState = {
  repositories: []
}

const reducer = {
  [types.LOADED_REPOSITORIES](state, { res }) {
    return {
      ...state,
      repositories: res.items
    }
  }
}

export default createReducer(initialState, reducer)
