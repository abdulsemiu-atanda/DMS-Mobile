import React from 'react'
import {Platform} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Auth from '../../components/Auth.react'
import AuthLoading from '../../components/AuthLoading.react'
import AppHeader from '../../components/shared/AppHeader.react'
import DocumentList from '../../components/shared/DocumentList.react'
import Home from '../../components/Home.react'
import AppsIcon from '../../components/icons/AppsIcon.react'
import AlbumsIcon from '../../components/icons/AlbumsIcon.react'

import colors from '../../assets/styles/colors'

const AuthStack = createStackNavigator({
  SignIn: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
})

const HomeTabs = createBottomTabNavigator({
  All: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: AlbumsIcon
    }
  },
  Collection: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Collection',
      tabBarIcon: AppsIcon
    }
  }
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'android' ? colors.white : colors.blue,
    inActiveTintColor: colors.darkBlue,
    labelStyle: {
      fontSize: 15
    },
    showLabel: Platform.OS === 'ios',
    showIcon: true
  }
})

const AppStack = createStackNavigator({
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

const AppNavigator = createSwitchNavigator({
  AuthLoading,
  Auth: AuthStack,
  App: AppStack
},
{
  initialRouteName: 'AuthLoading'
})

export default AppNavigator
