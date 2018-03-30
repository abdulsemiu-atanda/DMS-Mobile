

import React, {Component} from 'react'
import {Animated, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import LogIn from './LogIn.react'
import SignUp from './SignUp.react'

import {styles} from '../assets/styles/styles'

export default class Auth extends Component {
  constructor() {
    super()

    this.state = {showLogIn: true}
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
    this.setState({showLogIn: !this.state.showLogIn}, () => {
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
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.showLogIn ?
          <LogIn
            frontOpacity={this.frontOpacity}
            frontInterpolate={this.frontInterpolate}
            flipCard={this.flipCard}
            navigation={this.props.navigation}
          /> :
          <SignUp
            backOpacity={this.backOpacity}
            backInterpolate={this.backInterpolate}
            flipCard={this.flipCard}
            navigation={this.props.navigation}
          />
        }
      </View>
    );
  }
}
