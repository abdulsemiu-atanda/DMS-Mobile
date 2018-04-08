import React from 'react'
import {StackNavigator, SwitchNavigator, TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Auth from '../../components/Auth.react'
import AuthLoading from '../../components/AuthLoading.react'
import AppHeader from '../../components/shared/AppHeader.react'
import DocumentList from '../../components/shared/DocumentList.react'
import Home from '../../components/Home.react'

import colors from '../../assets/styles/colors'

const AuthStack = StackNavigator({
  SignIn: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
})

const HomeTabs = TabNavigator({
  All: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: ({tintColor}) => <Icon name='ios-albums' size={32} color={tintColor} />
    }
  },
  Collection: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Collection',
      tabBarIcon: ({tintColor}) => <Icon name='ios-apps' size={32} color={tintColor} />
    }
  }
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.blue,
    labelStyle: {
      fontSize: 15
    }
  }
})

const AppStack = StackNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      header: AppHeader
    }
  },
  ViewDocuments: {
    screen: DocumentList,
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
