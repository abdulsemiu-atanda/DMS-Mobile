import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'

export default class Home extends Component {
  async componentWillMount() {
    const tokens = await AsyncStorage.getItem('token')

    console.log(JSON.parse(tokens))
  }
  render() {
    return (
      <View />
    )
  }
}