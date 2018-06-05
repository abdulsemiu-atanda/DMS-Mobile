import {Animated} from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {SignUp} from '../components/SignUp.react'
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
    signingUp: false,
    message: ''
  }
}

describe('SignUp', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignUp {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0].type).toEqual('Text')
    expect(tree.children[1].children[0].children[0]).toEqual('Sign Up')
  })

  it('renders correct message when there is an error', () => {
    const failedSignUpProps = {
      ...props,
      user: {signingUp: false, message: 'Invalid Email'}
    }
    const tree = renderer.create(<SignUp {...failedSignUpProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[12].type).toEqual('Text')
    expect(tree.children[1].children[12].children[0]).toEqual(failedSignUpProps.user.message)
  })

  it('renders spinner when sign up is loading', () => {
    const signingUpProps = {
      ...props,
      user: {signingUp: true, message: ''}
    }
    const tree = renderer.create(<SignUp {...signingUpProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[11].children[0].type).toEqual('ActivityIndicator')
  })
})
