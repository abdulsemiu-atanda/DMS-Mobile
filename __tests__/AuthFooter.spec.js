import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AuthFooter from '../components/shared/AuthFooter.react'
import {noop} from '../util/util'

const props = {
  flipCard: noop,
  screen: 'Login'
}

describe('AuthFooter', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AuthFooter {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toEqual("DON'T HAVE AN ACCOUNT?")
    expect(tree.children[1].children[0].children[0]).toEqual('SIGN UP')
  })

  it('renders correctly when screen is sign up', () => {
    const newProps = {
      ...props,
      screen: 'SignUp'
    }
    const tree = renderer.create(<AuthFooter {...newProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toEqual('ALREADY HAVE AN ACCOUNT?')
    expect(tree.children[1].children[0].children[0]).toEqual('SIGN IN')
  })
})
