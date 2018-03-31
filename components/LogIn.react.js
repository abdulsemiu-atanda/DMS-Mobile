import React, {Component} from 'react'
import {Animated, ActivityIndicator, Text, View, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {logInRequest} from '../requests/userRequest'

import {loginStyles} from '../assets/styles/styles'

class LogIn extends Component {
  constructor() {
    super()


    this.state = {navigationComplete: false}
    this.onLogIn = this.onLogIn.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.logingIn && !this.state.navigationComplete && nextProps.user.token) {
      this.props.goToHome()
      this.setState({navigationComplete: true})
    }
  }
  
  onLogIn() {
    const logInData = {
      username: this.username._lastNativeText,
      password: this.password._lastNativeText
    }

    this.props.logInRequest(logInData)
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.props.frontInterpolate }
      ]
    }
    const loginFail = !this.props.user.logingIn && this.props.user.message === 'Username or password incorrect'

    return (
      <Animated.View style={[loginStyles.loginContainer, frontAnimatedStyle, {opacity: this.props.frontOpacity}]}>
          <View style={loginStyles.logoContainer}>
            <Text style={loginStyles.title}>DMS</Text>
            <Icon style={loginStyles.icon} name='ios-briefcase-outline' size={100} color='#f7f7f7' />
            <Text style={loginStyles.phrase}>Manage your documents elegantly.</Text>
          </View>
          <View style={[loginStyles.form, {flex: 2}]}>
            <Text style={loginStyles.label}>USERNAME</Text>
            <TextInput ref={ref => this.username = ref} autoCapitalize='none' keyboardType='email-address' style={loginStyles.input} placeholder='jason@bourne.com' />
            <Text style={loginStyles.label}>PASSWORD</Text>
            <TextInput ref={ref => this.password = ref} autoCapitalize='none' secureTextEntry style={loginStyles.input} />
            <TouchableHighlight disabled={this.props.user.logingIn} onPress={this.onLogIn} style={loginStyles.button}>
            {
              this.props.user.logingIn ?
              <ActivityIndicator color='#01f0b3' size='large' animating={this.props.user.logingIn} /> :
              <Text style={loginStyles.buttonText}>Sign In</Text>
            }
            </TouchableHighlight>
            {loginFail && <Text style={loginStyles.error}>{this.props.user.message}</Text>}
          </View>
          <View style={[loginStyles.infoContainer, {height: '16%'}]}>
            <Text style={loginStyles.infoText}>DON'T HAVE AN ACCOUNT?</Text>
            <TouchableOpacity onPress={this.props.flipCard}>
              <Text style={loginStyles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

LogIn.propTypes = {
  frontOpacity: PropTypes.object,
  frontInterpolate: PropTypes.object,
  flipCard: PropTypes.func,
  goToHome: PropTypes.func,
  user: PropTypes.shape({
    logingIn: PropTypes.bool,
    message: PropTypes.string
  })
}

export default connect(mapStateToProps, {logInRequest})(LogIn)
