import {StackNavigator} from 'react-navigation'

import Auth from '../../components/Auth.react'

const AppNavigator = StackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
})

export default AppNavigator
