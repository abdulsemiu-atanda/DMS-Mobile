import React, {Component} from 'react'
import {Animated, Text, View, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {loginStyles} from '../assets/styles/styles'

class LogIn extends Component {
  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.props.frontInterpolate }
      ]
    }

    return (
      <Animated.View style={[loginStyles.loginContainer, frontAnimatedStyle, {opacity: this.props.frontOpacity}]}>
          <View style={loginStyles.logoContainer}>
            <Text style={loginStyles.title}>DMS</Text>
            <Icon style={loginStyles.icon} name='ios-briefcase-outline' size={100} color='#f7f7f7' />
            <Text style={loginStyles.phrase}>Manage your documents elegantly.</Text>
          </View>
          <View style={[loginStyles.form, {height: '35%'}]}>
            <Text style={loginStyles.label}>EMAIL</Text>
            <TextInput autoCapitalize='none' keyboardType='email-address' style={loginStyles.input} placeholder='jason@bourne.com' />
            <Text style={loginStyles.label}>PASSWORD</Text>
            <TextInput autoCapitalize='none' secureTextEntry style={loginStyles.input} />
            <TouchableHighlight style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Sign In</Text>
            </TouchableHighlight>
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

export default LogIn
