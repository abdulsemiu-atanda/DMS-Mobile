import {StackNavigator} from 'react-navigation'

import Home from '../../components/Home.react'

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
})

export default AppNavigator
