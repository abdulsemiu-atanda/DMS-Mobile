import React, {Component} from 'react'
import {Text, TouchableOpacity, View, ListView} from 'react-native'
import moment from 'moment'

import {documentListStyles} from '../../assets/styles/styles'

class DocumentList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {dataSource: ds.cloneWithRows(props.documents)}

    this.renderRow = this.renderRow.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.setState({dataSource: ds.cloneWithRows(nextProps.documents)})
  }

  renderRow(document) {
    const {content, createdAt, updatedAt, title} = document

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
    return (
      <ListView
        style={{backgroundColor: '#f7f7f7'}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    )
  }
}

export default DocumentList
