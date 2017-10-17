import { call, put, takeEvery } from 'redux-saga/effects'
import githubProvider from 'core/providers/github'
import { actions as RepositoriesActions, types as RepositoriesTypes } from './actions'

export function* createRepositories({ language, page }) {
  try {
    const repositories = yield call(githubProvider.mostPopularRepositories, language, page)
    yield put(RepositoriesActions.loadedRepositories(repositories.data))
  } catch (error) {
    console.log(error)
  }
}

export default function* root() {
  yield [
    takeEvery(RepositoriesTypes.CREATE_REPOSITORIES, createRepositories)
  ]
}