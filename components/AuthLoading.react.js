import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import {styles} from '../assets/styles/styles'

export default class AuthLoading extends React.Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    );
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}
