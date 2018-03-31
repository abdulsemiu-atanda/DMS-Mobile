import {StackNavigator, SwitchNavigator} from 'react-navigation'

import Auth from '../../components/Auth.react'
import AuthLoading from '../../components/AuthLoading.react'
import Home from '../../components/Home.react'
import AppHeader from '../../components/shared/AppHeader.react'

const AuthStack = StackNavigator({
  SignIn: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
})

const AppStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: AppHeader
    }
  }
})

const AppNavigator = SwitchNavigator({
  AuthLoading,
  Auth: AuthStack,
  App: AppStack
})

export default AppNavigator
