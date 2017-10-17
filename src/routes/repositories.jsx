import React from 'react'
import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import { IndexRoute } from 'react-router'

import repositoriesReducer from 'state/Repositories/reducer'
import repositoriesSaga from 'state/Repositories/saga'

import Main from '../container/Main'
import { replaceReducers, runSagas } from './utils'

function* applicationSagas() {
  yield fork(repositoriesSaga)
}

function onEnter() {
  const reducersObj = {
    repositoriesReducer
  }

  const repositories = combineReducers(reducersObj)
  replaceReducers({ repositories })
  runSagas(applicationSagas)
}

const router = (
  <IndexRoute onEnter={onEnter} component={Main} />
)

export default router