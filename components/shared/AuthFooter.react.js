import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'

import {loginStyles} from '../../assets/styles/styles'

const AuthFooter = props => (
  <View style={[loginStyles.infoContainer, {height: '16%'}]}>
    <Text style={loginStyles.infoText}>
      {props.screen === 'Login' ? "DON'T HAVE AN ACCOUNT?" : 'ALREADY HAVE AN ACCOUNT?'}
    </Text>
    <TouchableOpacity onPress={props.flipCard}>
      <Text style={loginStyles.signUpText}>
        {props.screen === 'Login' ? 'SIGN UP' : 'SIGN IN'}
      </Text>
    </TouchableOpacity>
  </View>
)

AuthFooter.propTypes = {
  flipCard: PropTypes.func,
  screen: PropTypes.string
}

export default AuthFooter
