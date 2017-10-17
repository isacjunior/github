import { useFakeTimers } from 'sinon'
import localStorage from './local-storage'

require('regenerator-runtime/runtime')

global.btoa = str => new Buffer(str, 'binary').toString('base64')
global.atob = base64 => new Buffer(base64, 'base64').toString('ascii')

global.clock = useFakeTimers()
global.localStorage = localStorage()
global.navigator = { language: 'en-US' }

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  }
}
