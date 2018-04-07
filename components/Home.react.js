import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import EmptyDocument from './shared/EmptyDocument.react'

import {fetchDocRequest, refreshToken} from '../requests/userRequest'
import {isTokenExpired} from '../util/util'

class Home extends Component {

  async componentWillMount() {
    const tokens = await AsyncStorage.getItem('token')
    const tokensObject = JSON.parse(tokens)

    if (isTokenExpired(tokensObject.token))
      this.props.refreshToken(tokensObject)
    else
      this.props.fetchDocRequest(tokensObject.token)
  }

  render() {
    const {documents, documentLoading} = this.props.document

    if (!documentLoading && !documents.length)
      return <EmptyDocument screen={this.props.navigation.state.routeName} />
    return (
      <View />
    )
  }
}

const mapStateToProps = state => ({
  document: state.document
})

Home.propTypes = {
  document: PropTypes.shape({
    documentLoading: PropTypes.bool,
    documents: PropTypes.arrayOf(PropTypes.object)
  })
}

export default connect(mapStateToProps, {fetchDocRequest, refreshToken})(Home)
