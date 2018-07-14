import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import authScreenProps, {authLoadingProps} from '../util/fixtures/authFixtures'
import {SignUp} from '../components/SignUp.react'

describe('SignUp', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignUp {...authScreenProps('signup')} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0].type).toEqual('Text')
    expect(tree.children[1].children[0].children[0]).toEqual('Sign Up')
  })

  it('renders correct message when there is an error', () => {
    const failedSignUpProps = {
      ...authScreenProps('signup'),
      user: {signingUp: false, message: 'Invalid Email'}
    }
    const tree = renderer.create(<SignUp {...failedSignUpProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[12].type).toEqual('Text')
    expect(tree.children[1].children[12].children[0]).toEqual(failedSignUpProps.user.message)
  })

  it('renders spinner when sign up is loading', () => {
    const tree = renderer.create(<SignUp {...authLoadingProps('signup')} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[11].children[0].type).toEqual('ActivityIndicator')
  })
})
