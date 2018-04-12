import React, {Component} from 'react'
import {Text, TouchableOpacity, View, ListView} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import {List} from 'immutable'

import EmptyDocument from './EmptyDocument.react'

import colors from '../../assets/styles/colors'
import {documentListStyles} from '../../assets/styles/styles'
import {ucFirst} from '../../util/util'


class DocumentList extends Component {
  constructor(props) {
    super(props)

    const {params, routeName} = props.navigation.state
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource:
        routeName === 'ViewDocuments' ?
          ds.cloneWithRows(params.documents.toJS()) :
          ds.cloneWithRows(props.documents.toJS()),
      documents: props.documents,
      access: ''
    }

    this.renderRow = this.renderRow.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.documents && nextProps.documents.size !== prevState.documents.size){
      return {
        dataSource: ds.cloneWithRows(nextProps.documents.toJS()),
        documents: nextProps.documents
      }}
    return null
  }

  viewDocuments(access) {
    const accessDocuments = this.props.documents.filter(document =>
      document.get('access') === access)

    this.props.navigation.navigate('ViewDocuments', {documents: accessDocuments})
  }

  renderRow(document) {
    const {content, createdAt, updatedAt, title, access} = document
    const count = this.props.documents &&
      this.props.documents.filter(document => document.get('access') === access).size

    if (this.props.screen === 'Collection' && this.previousValue !== access) {
      this.previousValue = access
      return (
        <View style={documentListStyles.collectionView}>
          <TouchableOpacity onPress={() => this.viewDocuments(access)}>
            <Text style={documentListStyles.headerText}>{ucFirst(access)} ({count})</Text>
          </TouchableOpacity>
          <View style={documentListStyles.hr} />
        </View>
      )
    } else if (this.props.screen === 'Collection' && this.previousValue === access) {return null}
    return (
      <View style={documentListStyles.container}>
        <TouchableOpacity>
          <View style={documentListStyles.content}>
            <Text style={documentListStyles.title}>{title}</Text>
            <Text style={documentListStyles.contentText} numberOfLines={3}>{content}</Text>
            <View style={documentListStyles.hr} />
            <Text style={documentListStyles.footer}>
              Modified: {
                moment(updatedAt).format('MMM Do YY')
              } / Created: {moment(createdAt).format('MMM Do YY')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const {params} = this.props.navigation.state

    if ((params && params.documents.size) || this.props.documents.size > 0) {
      return (
        <View style={documentListStyles.rootNode}>
          {this.props.screen === 'Collection' &&
            <View style={documentListStyles.header}>
              <Text style={documentListStyles.headerText}>ACCESS</Text>
              <View style={[documentListStyles.hr, documentListStyles.headerHr]} />
            </View>
          }
          <ListView
            style={{backgroundColor: colors.whitish}}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
        </View>
      )}
    else {
      return <EmptyDocument {...this.props} />
    }
  }
}

DocumentList.propTypes = {
  documents: PropTypes.instanceOf(List),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.object
  }),
  screen: PropTypes.string
}

export default DocumentList
