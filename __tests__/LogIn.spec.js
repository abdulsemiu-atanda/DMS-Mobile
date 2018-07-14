import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import authScreenProps, {authLoadingProps} from '../util/fixtures/authFixtures'
import {LogIn} from '../components/LogIn.react'

describe('LogIn', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LogIn {...authScreenProps('login')} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0].type).toEqual('Text')
    expect(tree.children[0].children[0].children[0]).toEqual('DMS')
    expect(tree.children[0].children[2].type).toEqual('Text')
    expect(tree.children[0].children[2].children[0]).toEqual('Manage your documents elegantly.')
  })

  it('render correct error message when login fails', () => {
    const failedLoginProps = {
      ...authScreenProps('login'),
      user: {loggingIn: false, message: 'Username or password incorrect'}
    }
    const tree = renderer.create(<LogIn {...failedLoginProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[5].children[0]).toEqual('Username or password incorrect')
  })

  it('renders spinner when user is loggingIn', () => {
    const tree = renderer.create(<LogIn {...authLoadingProps('login')} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[4].children[0].type).toEqual('ActivityIndicator')
  })
})
