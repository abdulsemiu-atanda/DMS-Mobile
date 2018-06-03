import {Animated} from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {LogIn} from '../components/LogIn.react'
import {noop} from '../util/util'

const animatedValue = new Animated.Value(0)
const props = {
  asyncRequest: noop,
  frontOpacity: animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  }),
  frontInterpolate: animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  }),
  flipCard: noop,
  goToHome: noop,
  user: {
    loggingIn: false,
    message: ''
  }
}

describe('LogIn', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LogIn {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0].type).toEqual('Text')
    expect(tree.children[0].children[0].children[0]).toEqual('DMS')
    expect(tree.children[0].children[2].type).toEqual('Text')
    expect(tree.children[0].children[2].children[0]).toEqual('Manage your documents elegantly.')
  })

  it('render correct error message when login fails', () => {
    const failedLoginProps = {
      ...props,
      user: {loggingIn: false, message: 'Username or password incorrect'}
    }
    const tree = renderer.create(<LogIn {...failedLoginProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[5].children[0]).toEqual('Username or password incorrect')
  })

  it('renders spinner when user is loggingIn', () => {
    const loggingInProps = {
      ...props,
      user: {loggingIn: true, message: ''}
    }
    const tree = renderer.create(<LogIn {...loggingInProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[4].children[0].type).toEqual('ActivityIndicator')
  })
})
