export const types = {
  CREATE_REPOSITORIES: 'REPOSITORIES/CREATE_REPOSITORIES',
  LOADED_REPOSITORIES: 'REPOSITORIES/LOADED_REPOSITORIES',
  CREATE_REQUESTS: 'REPOSITORIES/CREATE_REQUESTS',
  LOADED_REQUESTS: 'REPOSITORIES/LOADED_REQUESTS',
  UPDATE_PRELOADER_REPOSITORIES: 'REPOSITORIES/UPDATE_PRELOADER_REPOSITORIES',
  UPDATE_PRELOADER_REQUESTS: 'REPOSITORIES/UPDATE_PRELOADER_REQUESTS'
}

export const actions = {
  createRepositories: page => ({ type: types.CREATE_REPOSITORIES, page }),
  loadedRepositories: res => ({ type: types.LOADED_REPOSITORIES, res }),
  createRequests: (login, name) => ({ type: types.CREATE_REQUESTS, login, name }),
  loadedRequests: res => ({ type: types.LOADED_REQUESTS, res }),
  updatePreloaderRepositories: bool => ({ type: types.UPDATE_PRELOADER_REPOSITORIES, bool }),
  updatePreloaderRequests: bool => ({ type: types.UPDATE_PRELOADER_REQUESTS, bool })
}
