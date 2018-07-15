import {loginStyles} from '../../assets/styles/styles'
import {noop} from '../util'

export const signUpFixtures = () => ({
  buttonProps() {
    return {
      disabled: false,
      onPress: noop,
      style: loginStyles.button
    }
  },
  confirmPasswordInputProps() {
    return {
      onEndEditing: noop,
      autoCapitalize: 'none',
      style: loginStyles.input
    }
  },
  sharedInputProps(placeholderValue) {
    return {autoCapitalize: 'none', placeholder: placeholderValue}
  },
  emailInputProps() {
    return {
      ...this.sharedInputProps('jason@bourne.com'),
      keyboardType: 'email-address',
      style: loginStyles.input
    }
  },
  nameInputProps() {
    return {
      ...this.sharedInputProps('Jason Bourne'),
      style: loginStyles.input
    }
  },
  passwordInputProps() {
    return {
      autoCapitalize: 'none',
      style: loginStyles.input
    }
  },
  usernameInputProps() {
    return {
      ...this.sharedInputProps('jbourne'),
      style: loginStyles.input
    }
  },
  user: {signingUp: false}
})
