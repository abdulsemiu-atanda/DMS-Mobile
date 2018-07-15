import React from 'react'
import {Text, TextInput} from 'react-native'
import PropTypes from 'prop-types'

import AuthButton from './shared/AuthButton.react'
import AuthFormWrapper from './shared/AuthFormWrapper.react'
import {loginStyles} from '../assets/styles/styles'

const SignUpForm = props => (
  <AuthFormWrapper>
    <Text style={loginStyles.headerText}>Sign Up</Text>
    <Text style={loginStyles.label}>FULL NAME</Text>
    <TextInput {...props.nameInputProps()} />
    <Text style={loginStyles.label}>USERNAME</Text>
    <TextInput {...props.usernameInputProps()} />
    <Text style={loginStyles.label}>EMAIL</Text>
    <TextInput {...props.emailInputProps()} />
    <Text style={loginStyles.label}>PASSWORD</Text>
    <TextInput secureTextEntry {...props.passwordInputProps()} />
    <Text style={loginStyles.label}>CONFIRM PASSWORD</Text>
    <TextInput secureTextEntry {...props.confirmPasswordInputProps()} />
    <AuthButton {...props.buttonProps()} signingUp={props.user.signingUp} />
    {
      props.passwordMatch === 'false' &&
      <Text style={loginStyles.error}>Your password do not match</Text>
    }
    {props.signUpFail && <Text style={loginStyles.error}>{props.user.message}</Text>}
  </AuthFormWrapper>
)

SignUpForm.propTypes = {
  nameInputProps: PropTypes.func,
  usernameInputProps: PropTypes.func,
  emailInputProps: PropTypes.func,
  passwordInputProps: PropTypes.func,
  confirmPasswordInputProps: PropTypes.func,
  buttonProps: PropTypes.func,
  user: PropTypes.shape({
    message: PropTypes.string,
    signingUp: PropTypes.bool
  }),
  passwordMatch: PropTypes.string,
  signUpFail: PropTypes.bool
}

export default SignUpForm
