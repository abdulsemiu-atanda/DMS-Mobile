import React from 'react'
import {ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'

const Loading = props => (
  <ActivityIndicator color='#01f0b3' size='large' animating={props.animating} />
)

Loading.propTypes = {
  animating: PropTypes.bool
}

export default Loading
