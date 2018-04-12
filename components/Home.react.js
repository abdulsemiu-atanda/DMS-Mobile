import React, {Component} from 'react'
import {View, AsyncStorage, ActivityIndicator, TouchableHighlight, Platform} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import {fromJS, List, Map} from 'immutable'

import EmptyDocument from './shared/EmptyDocument.react'
import DocumentList from './shared/DocumentList.react'

import {fetchDocRequest, fetchUserDocRequest, refreshToken} from '../requests/userRequest'
import {isTokenExpired} from '../util/util'
import color from '../assets/styles/colors'
import {homeStyles} from '../assets/styles/styles'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tokens: {},
      hasRequestUserDocuments: false,
      loading: (props.user.documents.length < 1)
    }

    this.addDocument = this.addDocument.bind(this)
    this.documentListProps = this.documentListProps.bind(this)
  }

  async componentDidMount() {
    const tokens = await AsyncStorage.getItem('token')
    const tokensObject = JSON.parse(tokens)

    if (isTokenExpired(tokensObject.token))
      this.props.refreshToken(tokensObject)
    else if (this.props.document.documents.size < 1)
      this.props.fetchDocRequest(tokensObject.token)
    this.setState({tokens: tokensObject})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.document.documents.size > 0
        && nextProps.user.documents.size < 1 &&
        !prevState.hasRequestUserDocuments) {
      nextProps.fetchUserDocRequest(prevState.tokens.token)
      return {hasRequestUserDocuments: true, loading: false}
    }
    return null
  }

  addDocument() {
    // console.log('Add Document')
  }

  documentListProps() {
    const {navigation, document, user} = this.props
    const {documents} = document
    const homeDocuments = documents.filterNot(document => document.get('access') === 'private')

    if (navigation.state.routeName === 'All')
      return homeDocuments
    else if (navigation.state.routeName !== 'All' && !user.documents.get('message'))
      return user.documents
    else
      return fromJS([])
  }

  render() {
    const {loading} = this.state
    const {documents, documentLoading} = this.props.document
    const {routeName} = this.props.navigation.state

    if (loading || documentLoading ||
      (routeName === 'Collection' && this.props.user.loadingDocuments)) {
      return (
        <ActivityIndicator
          animating={
            this.state.loading || documentLoading ||
            (routeName !== 'All' && this.props.user.loadingDocuments)
          }
          color='blue'
          size='large'
        />
      )
    }
    else if (!documentLoading && !documents.size) {
      return <EmptyDocument addDocument={this.addDocument} screen={routeName} />
    }
    else {
      return (
        <View style={homeStyles.container}>
          <DocumentList
            addDocument={this.addDocument}
            navigation={this.props.navigation}
            screen={routeName}
            documents={this.documentListProps()}
          />
          <TouchableHighlight onPress={this.addDocument} style={homeStyles.button}>
            <Icon
              style={homeStyles.buttonIcon}
              name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
              size={30}
              color={color.darkBlue}
            />
          </TouchableHighlight>
        </View>
      )
    }
  }
}

const mapStateToProps = state => ({
  document: state.document,
  user: state.user
})

Home.propTypes = {
  document: PropTypes.shape({
    documentLoading: PropTypes.bool,
    documents: PropTypes.instanceOf(List)
  }),
  fetchDocRequest: PropTypes.func,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routeName: PropTypes.string
    })
  }),
  refreshToken: PropTypes.func,
  user: PropTypes.shape({
    documents: PropTypes.oneOfType([PropTypes.instanceOf(List), PropTypes.instanceOf(Map)]),
    loadingDocuments: PropTypes.bool
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
