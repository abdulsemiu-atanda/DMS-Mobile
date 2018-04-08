import React, {Component} from 'react'
import {View, AsyncStorage, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import EmptyDocument from './shared/EmptyDocument.react'
import DocumentList from './shared/DocumentList.react'

import {fetchDocRequest, fetchUserDocRequest, refreshToken} from '../requests/userRequest'
import {isTokenExpired} from '../util/util'

class Home extends Component {
  constructor() {
    super()

    this.doucmentListProps = this.doucmentListProps.bind(this)
  }

  async componentWillMount() {
    const tokens = await AsyncStorage.getItem('token')
    const tokensObject = JSON.parse(tokens)

    if (isTokenExpired(tokensObject.token))
      this.props.refreshToken(tokensObject)
    else
      this.props.fetchDocRequest(tokensObject.token)
  }

  doucmentListProps() {
    return this.props.navigation.state.routeName === 'All' ? this.props.document.documents : []
  }

  render() {
    const {documents, documentLoading} = this.props.document

    if (documentLoading)
      return <ActivityIndicator size='large' color='blue' animating={documentLoading} />
    else if (!documentLoading && !documents.length)
      return <EmptyDocument screen={this.props.navigation.state.routeName} />
    else
      return (
        <DocumentList screen={this.props.navigation.state.routeName} documents={this.doucmentListProps()} />
      )
  }
}

const mapStateToProps = state => ({
  document: state.document,
  user: state.user
})

Home.propTypes = {
  document: PropTypes.shape({
    documentLoading: PropTypes.bool,
    documents: PropTypes.arrayOf(PropTypes.object)
  })
}

export default connect(
  mapStateToProps,
  {
    fetchDocRequest,
    fetchUserDocRequest,
    refreshToken
  }
  )(Home)
