import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'

class Home extends Component {
  async componentWillMount() {
    const tokens = await AsyncStorage.getItem('token')

    console.log(JSON.parse(tokens))
  }
  render() {
    return (
      <View />
    )
  }
}

const mapStateToProps = state => ({
  documents: state.document
})

export default connect(mapStateToProps)(Home)
