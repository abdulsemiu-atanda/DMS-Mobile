import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {headerStyles} from '../../assets/styles/styles'

const AppHeader = props => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.title}>DMS</Text>
    <View style={headerStyles.iconContainer}>
      <TouchableOpacity>
        <Icon name='ios-search' size={25} color='#01f0b3' style={headerStyles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} size={30} color='#01f0b3' style={headerStyles.icon} />
      </TouchableOpacity>
    </View>
  </View>
)

export default AppHeader
