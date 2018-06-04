import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

const AlbumsIcon = ({tintColor}) => <Icon name='ios-albums' size={32} color={tintColor} />

AlbumsIcon.propTypes = {
  tintColor: PropTypes.string
}

export default AlbumsIcon
