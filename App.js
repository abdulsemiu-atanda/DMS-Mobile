import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import AppNavigator from './config/routes/routes'
import rootReducer from './reducers'


const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)
const App = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = state => ({
  state: state.nav
})
const AppWithNavigationState = connect(mapStateToProps)(App)

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
