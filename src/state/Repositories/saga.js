import { call, put, takeEvery } from 'redux-saga/effects'
import githubProvider from 'core/providers/github'
import { actions as RepositoriesActions, types as RepositoriesTypes } from './actions'

export function* createRepositories({ page }) {
  try {
    yield put(RepositoriesActions.updatePreloaderRepositories(true))
    const repositories = yield call(githubProvider.mostPopularRepositories, page)
    yield put(RepositoriesActions.loadedRepositories(repositories.data))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(RepositoriesActions.updatePreloaderRepositories(false))
  }
}

export function* createRequests({ login, name }) {
  try {
    yield put(RepositoriesActions.updatePreloaderRequests(true))
    const requests = yield call(githubProvider.pullRequests, login, name)
    yield put(RepositoriesActions.loadedRequests(requests.data))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(RepositoriesActions.updatePreloaderRequests(false))
  }
}

export default function* root() {
  yield [
    takeEvery(RepositoriesTypes.CREATE_REPOSITORIES, createRepositories),
    takeEvery(RepositoriesTypes.CREATE_REQUESTS, createRequests)
  ]
}