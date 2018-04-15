import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers'
import {addNavigationHelpers} from 'react-navigation'
import PropTypes from 'prop-types'

import AppNavigator from '../config/routes/routes'


class Main extends Component {
  render() {
    const addListener = createReduxBoundAddListener('root')

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

Main.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
}

export default connect(mapStateToProps)(Main)
