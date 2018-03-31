import {StackNavigator} from 'react-navigation'

import Auth from '../../components/Auth.react'
import Home from '../../components/Home.react'
import AppHeader from '../../components/shared/AppHeader.react'

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
      header: AppHeader
    }
  }
})

export default AppNavigator
