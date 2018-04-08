import React, {Component} from 'react'
import {Text, TouchableOpacity, View, ListView, Dimensions} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'

import EmptyDocument from './EmptyDocument.react'

import {documentListStyles} from '../../assets/styles/styles'
import {ucFirst} from '../../util/util'

const {width} = Dimensions.get('window')

class DocumentList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {dataSource: ds.cloneWithRows(props.documents), documents: props.documents, access: ''}

    this.renderRow = this.renderRow.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.documents.length !== prevState.documents.length)
      return {
        dataSource: ds.cloneWithRows(nextProps.documents),
        documents: nextProps.documents
      }
    return null
  }

  renderRow(document) {
    const {content, createdAt, updatedAt, title, access} = document
    const count = this.props.documents.filter(document => document.access === access).length

    if (this.props.screen === 'Collection' && this.previousValue !== access) {
      this.previousValue = access
      return (
        <View style={documentListStyles.collectionView}>
          <TouchableOpacity>
            <Text style={documentListStyles.headerText}>{ucFirst(access)} ({count})</Text>
          </TouchableOpacity>
          <View style={documentListStyles.hr} />
        </View>
      )
    } else if (this.previousValue === access) return null
    return (
      <View style={documentListStyles.container}>
        <TouchableOpacity>
          <View style={documentListStyles.content}>
            <Text style={documentListStyles.title}>{title}</Text>
            <Text style={documentListStyles.contentText} numberOfLines={3}>{content}</Text>
            <View style={documentListStyles.hr} />
            <Text style={documentListStyles.footer}>Modified: {moment(updatedAt).format('MMM Do YY')} / Created: {moment(createdAt).format('MMM Do YY')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    if (this.props.documents.length > 0)
      return (
        <View style={documentListStyles.rootNode}>
          {this.props.screen === 'Collection' &&
            <View style={documentListStyles.header}>
              <Text style={documentListStyles.headerText}>ACCESS</Text>
              <View style={[documentListStyles.hr, documentListStyles.headerHr]} />
            </View>
          }
          <ListView
            style={{backgroundColor: '#f7f7f7'}}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
        </View>
      )
    else
      return <EmptyDocument {...this.props} />
  }
}

DocumentList.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object)
}

export default DocumentList
