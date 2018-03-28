

import React, {Component} from 'react'
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {styles, loginStyles} from '../assets/styles/styles'

export default class App extends Component {
  constructor() {
    super()

    this.flipCard = this.flipCard.bind(this)
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }

    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[loginStyles.loginContainer, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
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
            <TouchableOpacity onPress={this.flipCard}>
              <Text style={loginStyles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View style={[loginStyles.loginContainer, loginStyles.sigupContainer, backAnimatedStyle, {opacity: this.backOpacity}]}>
          <TouchableOpacity style={loginStyles.closer} onPress={this.flipCard}>
            <Icon name='ios-close' size={40} color='#cfcfd1' />
          </TouchableOpacity>
          <View style={loginStyles.form}>
            <Text style={loginStyles.headerText}>Sign Up</Text>
            <Text style={loginStyles.label}>FULL NAME</Text>
            <TextInput autoCapitalize='none' style={loginStyles.input} placeholder='Jason Bourne' />
            <Text style={loginStyles.label}>USERNAME</Text>
            <TextInput autoCapitalize='none' style={loginStyles.input} placeholder='jbourne' />
            <Text style={loginStyles.label}>EMAIL</Text>
            <TextInput autoCapitalize='none' keyboardType='email-address' style={loginStyles.input} placeholder='jason@bourne.com' />
            <Text style={loginStyles.label}>PASSWORD</Text>
            <TextInput autoCapitalize='none' secureTextEntry style={loginStyles.input} />
            <TouchableHighlight style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Create</Text>
            </TouchableHighlight>
          </View>
          <View style={loginStyles.infoContainer}>
            <Text style={loginStyles.infoText}>ALREADY HAVE AN ACCOUNT?</Text>
            <TouchableOpacity onPress={this.flipCard}>
              <Text style={loginStyles.signUpText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}
