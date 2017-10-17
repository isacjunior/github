export const types = {
  CREATE_REPOSITORIES: 'REPOSITORIES/CREATE_REPOSITORIES',
  LOADED_REPOSITORIES: 'REPOSITORIES/LOADED_REPOSITORIES'
}

export const actions = {
  createRepositories: page => ({ type: types.CREATE_REPOSITORIES, page }),
  loadedRepositories: res => ({ type: types.LOADED_REPOSITORIES, res })
}
