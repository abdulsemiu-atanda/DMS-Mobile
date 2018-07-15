import React, {Component} from 'react'
import {
  Animated,
  Text,
  View,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AuthButton from './shared/AuthButton.react'
import AuthFooter from './shared/AuthFooter.react'

import {asyncRequest} from '../util/asyncUtils'
import {persistUser} from '../util/util'
import {LOG_IN} from '../actionTypes/userConstants'

import {loginStyles} from '../assets/styles/styles'

export class LogIn extends Component {
  constructor() {
    super()


    this.state = {navigationComplete: false}
    this.onLogIn = this.onLogIn.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return persistUser(nextProps, prevState)
  }

  onLogIn() {
    const logInData = {
      username: this.username._lastNativeText,
      password: this.password._lastNativeText
    }

    this.props.asyncRequest(LOG_IN, 'user/login', 'POST', logInData)
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        {rotateY: this.props.frontInterpolate}
      ]
    }
    const loginFail = !this.props.user.loggingIn &&
      this.props.user.message === 'Username or password incorrect'

    return (
      <Animated.View
        style={
          [loginStyles.loginContainer, frontAnimatedStyle, {opacity: this.props.frontOpacity}]
        }>
        <View style={loginStyles.logoContainer}>
          <Text style={loginStyles.title}>DMS</Text>
          <Icon style={loginStyles.icon} name='ios-briefcase-outline' size={100} color='#f7f7f7' />
          <Text style={loginStyles.phrase}>Manage your documents elegantly.</Text>
        </View>
        <View style={loginStyles.form}>
          <Text style={loginStyles.label}>USERNAME</Text>
          <TextInput
            ref={ref => this.username = ref}
            autoCapitalize='none'
            keyboardType='email-address'
            style={loginStyles.input}
            placeholder='jason@bourne.com'
          />
          <Text style={loginStyles.label}>PASSWORD</Text>
          <TextInput
            ref={ref => this.password = ref}
            autoCapitalize='none'
            secureTextEntry
            style={loginStyles.input}
          />
          <AuthButton
            disabled={this.props.user.loggingIn}
            login
            onPress={this.onLogIn}
            loggingIn={this.props.user.loggingIn}
            style={loginStyles.button}
          />
          {loginFail && <Text style={loginStyles.error}>{this.props.user.message}</Text>}
        </View>
        <AuthFooter screen='Login' flipCard={this.props.flipCard} />
      </Animated.View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

LogIn.propTypes = {
  asyncRequest: PropTypes.func,
  frontOpacity: PropTypes.object,
  frontInterpolate: PropTypes.object,
  flipCard: PropTypes.func,
  goToHome: PropTypes.func,
  user: PropTypes.shape({
    loggingIn: PropTypes.bool,
    message: PropTypes.string
  })
}

export default connect(mapStateToProps, {asyncRequest})(LogIn)
