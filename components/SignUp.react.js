import React, {Component} from 'react'
import {
  Animated,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import AuthFooter from './shared/AuthFooter.react'
import SignUpForm from './SignUpForm.react'

import {asyncRequest} from '../util/asyncUtils'
import {persistUser} from '../util/util'
import {SIGN_UP} from '../actionTypes/userConstants'

import {loginStyles} from '../assets/styles/styles'

export class SignUp extends Component {
  constructor() {
    super()

    this.state = {passwordMatch: '', navigationComplete: false}

    this.animatedProps = this.animatedProps.bind(this)
    this.buttonProps = this.buttonProps.bind(this)
    this.confirmPassword = this.confirmPassword.bind(this)
    this.confirmPasswordInputProps = this.confirmPasswordInputProps.bind(this)
    this.emailInputProps = this.emailInputProps.bind(this)
    this.nameInputProps = this.nameInputProps.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
    this.passwordInputProps = this.passwordInputProps.bind(this)
    this.sharedInputProps = this.sharedInputProps.bind(this)
    this.usernameInputProps = this.usernameInputProps.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return persistUser(nextProps, prevState)
  }

  animatedProps() {
    const backAnimatedStyle = {
      transform: [
        {rotateY: this.props.backInterpolate}
      ]
    }

    return {
      style: [
        loginStyles.loginContainer,
        loginStyles.sigupContainer,
        backAnimatedStyle,
        {opacity: this.props.backOpacity}
      ]
    }
  }

  confirmPassword(evt) {
    if (this.password._lastNativeText === evt.nativeEvent.text) {
      this.setState({passwordMatch: 'true'})
    }
    else {
      this.setState({passwordMatch: 'false'})
      setTimeout(() => this.setState({passwordMatch: ''}), 2000)
    }
  }

  onSignUp() {
    const data = {
      fullname: this.fullname._lastNativeText,
      email: this.email._lastNativeText,
      password: this.password._lastNativeText,
      username: this.username._lastNativeText
    }

    if (this.state.passwordMatch === 'true' && (!Object.values(data).includes(undefined))) {
      const fullnameArray = this.fullname._lastNativeText.split(' ')
      const userData = {
        firstName: fullnameArray[0],
        lastName: fullnameArray[1],
        email: this.email._lastNativeText,
        password: this.password._lastNativeText,
        username: this.username._lastNativeText,
        roleId: 2
      }

      this.props.asyncRequest(SIGN_UP, 'user', 'POST', userData)
    } else {
      this.setState({passwordMatch: 'false'})
      setTimeout(() => this.setState({passwordMatch: ''}), 2000)
    }
  }

  buttonProps() {
    return {
      disabled: this.props.user.signingUp,
      onPress: this.onSignUp,
      style: loginStyles.button
    }
  }

  confirmPasswordInputProps() {
    return {
      onEndEditing: this.confirmPassword,
      autoCapitalize: 'none',
      style: loginStyles.input
    }
  }

  sharedInputProps(placeholderValue) {
    return {autoCapitalize: 'none', placeholder: placeholderValue}
  }

  emailInputProps() {
    return {
      ...this.sharedInputProps('jason@bourne.com'),
      ref: ref => this.email = ref,
      keyboardType: 'email-address',
      style: loginStyles.input
    }
  }

  nameInputProps() {
    return {
      ...this.sharedInputProps('Jason Bourne'),
      ref: ref => this.fullname = ref,
      style: loginStyles.input
    }
  }

  passwordInputProps() {
    return {
      ref: ref => this.password = ref,
      autoCapitalize: 'none',
      style: loginStyles.input
    }
  }

  usernameInputProps() {
    return {
      ...this.sharedInputProps('jbourne'),
      ref: ref => this.username = ref,
      style: loginStyles.input
    }
  }

  render() {
    const signUpFail = !this.props.user.signingUp && (this.props.user.message === 'Invalid Email' ||
      this.props.user.message === 'User already exists')

    return (
      <Animated.View {...this.animatedProps()}>
        <TouchableOpacity style={loginStyles.closer} onPress={this.props.flipCard}>
          <Icon name='ios-close' size={40} color='#cfcfd1' />
        </TouchableOpacity>
        <SignUpForm
          nameInputProps={this.nameInputProps}
          usernameInputProps={this.usernameInputProps}
          emailInputProps={this.emailInputProps}
          passwordInputProps={this.passwordInputProps}
          confirmPasswordInputProps={this.confirmPasswordInputProps}
          buttonProps={this.buttonProps}
          passwordMatch={this.state.passwordMatch}
          user={this.props.user}
          signUpFail={signUpFail}
        />
        <AuthFooter screen='Signup' flipCard={this.props.flipCard} />
      </Animated.View>
    )
  }
}

SignUp.propTypes = {
  asyncRequest: PropTypes.func,
  backOpacity: PropTypes.object,
  backInterpolate: PropTypes.object,
  flipCard: PropTypes.func,
  user: PropTypes.shape({
    message: PropTypes.string,
    signingUp: PropTypes.bool
  })
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {asyncRequest})(SignUp)
