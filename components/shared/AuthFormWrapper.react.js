import React from 'react'
import {View} from 'react-native'

import {loginStyles} from '../../assets/styles/styles'

const AuthFormWrapper = props => (
  <View style={loginStyles.form}>{props.children}</View>
)

export default AuthFormWrapper
