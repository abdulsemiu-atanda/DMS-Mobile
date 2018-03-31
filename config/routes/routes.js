import {StackNavigator} from 'react-navigation'

import Auth from '../../components/Auth.react'
import Home from '../../components/Home.react'

const AppNavigator = StackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'DMS'
    }
  }
})

export default AppNavigator
