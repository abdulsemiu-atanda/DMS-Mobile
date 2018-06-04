import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initializeListeners, createNavigationPropConstructor} from 'react-navigation-redux-helpers'
import PropTypes from 'prop-types'

import AppNavigator from '../config/routes/routes'


class Main extends Component {
  componentDidMount() {
    initializeListeners('root', this.props.nav)
  }

  render() {
    const navigationPropConstructor = createNavigationPropConstructor('root')

    return (
      <AppNavigator
        navigation={navigationPropConstructor(
          this.props.dispatch,
          this.props.nav
        )}
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
