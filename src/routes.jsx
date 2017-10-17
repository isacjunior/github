import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import IntlProviderWrapper from './core/components/IntlProviderWrapper'
import Main from './routes/main'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

const bashPath = '/'

const Routes = () => (
  <Provider store={store}>
    <IntlProviderWrapper>
      <Router history={history}>
        <Route path={bashPath}>
          { Main }
        </Route>
      </Router>
    </IntlProviderWrapper>
  </Provider>
)

export default Routes
