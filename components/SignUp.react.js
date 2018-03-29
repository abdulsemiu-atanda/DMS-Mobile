import React, {Component} from 'react'
import {Animated, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {loginStyles} from '../assets/styles/styles'
import {signUpRequest} from '../requests/userRequest'
import {validateFields} from '../util/util'

class SignUp extends Component {
  constructor() {
    super()

    this.onSignUp = this.onSignUp.bind(this)
  }
  onSignUp() {
    const data = {
      fullname: this.fullname._lastNativeText,
      confirmPassword: this.confirmPassword._lastNativeText,
      email: this.email._lastNativeText,
      password: this.password._lastNativeText,
      username: this.username._lastNativeText
    }

    this.props.validateFields(data)
  }
  render() {
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.props.backInterpolate }
      ]
    }

    return (
      <Animated.View style={[loginStyles.loginContainer, loginStyles.sigupContainer, backAnimatedStyle, {opacity: this.props.backOpacity}]}>
          <TouchableOpacity style={loginStyles.closer} onPress={this.props.flipCard}>
            <Icon name='ios-close' size={40} color='#cfcfd1' />
          </TouchableOpacity>
          <View style={loginStyles.form}>
            <Text style={loginStyles.headerText}>Sign Up</Text>
            <Text style={loginStyles.label}>FULL NAME</Text>
            <TextInput ref={ref => this.fullname = ref} autoCapitalize='none' style={loginStyles.input} placeholder='Jason Bourne' />
            <Text style={loginStyles.label}>USERNAME</Text>
            <TextInput ref={ref => this.username = ref} autoCapitalize='none' style={loginStyles.input} placeholder='jbourne' />
            <Text style={loginStyles.label}>EMAIL</Text>
            <TextInput ref={ref => this.email = ref} autoCapitalize='none' keyboardType='email-address' style={loginStyles.input} placeholder='jason@bourne.com' />
            <Text style={loginStyles.label}>PASSWORD</Text>
            <TextInput ref={ref => this.password = ref} autoCapitalize='none' secureTextEntry style={loginStyles.input} />
            <Text style={loginStyles.label}>CONFIRM PASSWORD</Text>
            <TextInput ref={ref => this.confirmPassword = ref} autoCapitalize='none' secureTextEntry style={loginStyles.input} />
            <TouchableHighlight onPress={this.onSignUp} style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Create</Text>
            </TouchableHighlight>
          </View>
          <View style={loginStyles.infoContainer}>
            <Text style={loginStyles.infoText}>ALREADY HAVE AN ACCOUNT?</Text>
            <TouchableOpacity onPress={this.props.flipCard}>
              <Text style={loginStyles.signUpText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
    )
  }
}

SignUp.propTypes = {
  backOpacity: PropTypes.object,
  backInterpolate: PropTypes.object,
  flipCard: PropTypes.func
}

const mapStateToProps = state => ({
  form: state.form,
  user: state.user
})

export default connect(mapStateToProps, {validateFields})(SignUp)
