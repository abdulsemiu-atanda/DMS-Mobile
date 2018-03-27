

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import {styles, loginStyles} from '../assets/styles/styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={loginStyles.logoContainer}></View>
        <View style={loginStyles.form}>
          <Text style={loginStyles.label}>EMAIL</Text>
          <TextInput keyboardType='email-address' style={loginStyles.input} placeholder='jason@bourne.com' />
          <Text style={loginStyles.label}>PASSWORD</Text>
          <TextInput secureTextEntry style={loginStyles.input} />
          <TouchableHighlight style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
        <View style={loginStyles.infoContainer}>
          <Text style={loginStyles.infoText}>DON'T HAVE AN ACCOUNT?</Text>
          <TouchableOpacity>
            <Text style={loginStyles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
