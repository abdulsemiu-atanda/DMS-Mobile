import React, {Component} from 'react'
import {
  Animated,
  AsyncStorage,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import AuthFooter from './shared/AuthFooter.react'
import Loading from './shared/Loading.react'

import {asyncRequest} from '../util/asyncUtils'
import {SIGN_UP} from '../actionTypes/userConstants'

import {loginStyles} from '../assets/styles/styles'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {passwordMatch: '', navigationComplete: false}
    this.confirmPassword = this.confirmPassword.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.user.signingUp && !prevState.navigationComplete && nextProps.user.token) {
      const tokenObject = {token: nextProps.user.token, accessToken: nextProps.user.accessToken}

      AsyncStorage.setItem('token', JSON.stringify(tokenObject)).then(() => {
        nextProps.goToHome()
      }).catch(err => console.warn(err))
      return {
        navigationComplete: true
      }
    }
    return null
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

  render() {
    const backAnimatedStyle = {
      transform: [
        {rotateY: this.props.backInterpolate}
      ]
    }
    const signUpFail = !this.props.user.signingUp && (this.props.user.message === 'Invalid Email' ||
      this.props.user.message === 'User already exists')

    return (
      <Animated.View
        style={
          [
            loginStyles.loginContainer,
            loginStyles.sigupContainer,
            backAnimatedStyle,
            {opacity: this.props.backOpacity}
          ]
        }>
        <TouchableOpacity style={loginStyles.closer} onPress={this.props.flipCard}>
          <Icon name='ios-close' size={40} color='#cfcfd1' />
        </TouchableOpacity>
        <View style={loginStyles.form}>
          <Text style={loginStyles.headerText}>Sign Up</Text>
          <Text style={loginStyles.label}>FULL NAME</Text>
          <TextInput
            ref={ref => this.fullname = ref}
            autoCapitalize='none'
            style={loginStyles.input}
            placeholder='Jason Bourne'
          />
          <Text style={loginStyles.label}>USERNAME</Text>
          <TextInput
            ref={ref => this.username = ref}
            autoCapitalize='none'
            style={loginStyles.input}
            placeholder='jbourne'
          />
          <Text style={loginStyles.label}>EMAIL</Text>
          <TextInput
            ref={ref => this.email = ref}
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
          <Text style={loginStyles.label}>CONFIRM PASSWORD</Text>
          <TextInput
            onEndEditing={this.confirmPassword}
            autoCapitalize='none'
            secureTextEntry
            style={loginStyles.input}
          />
          <TouchableHighlight
            disabled={this.props.user.signingUp}
            onPress={this.onSignUp}
            style={loginStyles.button}>
            {
              this.props.user.signingUp ?
                <Loading animating={this.props.user.signingUp} /> :
                <Text style={loginStyles.buttonText}>Create</Text>
            }
          </TouchableHighlight>
          {
            this.state.passwordMatch === 'false' &&
            <Text style={loginStyles.error}>Your password do not match</Text>
          }
          {signUpFail && <Text style={loginStyles.error}>{this.props.user.message}</Text>}
        </View>
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
