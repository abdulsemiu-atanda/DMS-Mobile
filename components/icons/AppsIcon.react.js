import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

const AppsIcon = ({tintColor}) => <Icon name='ios-apps' size={32} color={tintColor} />

AppsIcon.propTypes = {
  tintColor: PropTypes.string
}

export default AppsIcon
