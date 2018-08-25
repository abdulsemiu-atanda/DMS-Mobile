import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import {emptyDocumentStyles} from '../../assets/styles/styles'

const EmptyDocument = props => (
  <View style={emptyDocumentStyles.container}>
    <Icon name='ios-list-box' size={70} color='grey' />
    <Text style={emptyDocumentStyles.instructions}>
      {props.screen === 'All' ?
        'Oops! there are no public documents currently available for viewing.\
        Please check again later or start by adding a public document.' :
        'Oops! You have not added any document.'
      }
    </Text>
    <TouchableHighlight onPress={props.addDocument} style={emptyDocumentStyles.button}>
      <Text style={emptyDocumentStyles.buttonText}>ADD DOCUMENT</Text>
    </TouchableHighlight>
  </View>
)

EmptyDocument.propTypes = {
  addDocument: PropTypes.func,
  screen: PropTypes.string
}

export default EmptyDocument
