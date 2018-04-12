import React from 'react'
import {View, Text, TouchableOpacity, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import {headerStyles} from '../../assets/styles/styles'
import colors from '../../assets/styles/colors'

const AppHeader = props => {
  const {routes} = props.navigation.state
  const title = (routes.length === 2 && routes[1].params) ? routes[1].params.documents.first().get('access').toUpperCase() : 'DMS'

  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
      <View style={headerStyles.iconContainer}>
        <TouchableOpacity>
          <Icon name='ios-search' size={25} color='#0983ff' style={headerStyles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} size={30} color={colors.blue} style={headerStyles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

AppHeader.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routes: PropTypes.arrayOf(PropTypes.object)
    })
  })
}

export default AppHeader
