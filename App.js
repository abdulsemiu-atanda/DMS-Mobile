import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import AppWithNavigationState from './components/Main.react'
import rootReducer from './reducers'


const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const store = createStore(
  rootReducer,
  applyMiddleware(middleware, thunk, __DEV__ && createLogger())
)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
