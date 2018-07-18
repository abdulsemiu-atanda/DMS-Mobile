import React from 'react'
import {TouchableHighlight, Text} from 'react-native'
import PropTypes from 'prop-types'

import Loading from './Loading.react'

import {loginStyles} from '../../assets/styles/styles'

const AuthButton = ({loggingIn, signingUp, login, ...otherProps}) => (
  <TouchableHighlight {...otherProps}>
    {(loggingIn || signingUp) ?
      <Loading animating={loggingIn || signingUp} /> :
      <Text style={loginStyles.buttonText}>{login ? 'Sign In' : 'Create'}</Text>
    }
  </TouchableHighlight>
)

AuthButton.propTypes = {
  loggingIn: PropTypes.bool,
  login: PropTypes.bool,
  signingUp: PropTypes.bool
}

export default AuthButton
