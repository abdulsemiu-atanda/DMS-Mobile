import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AuthButton from '../components/shared/AuthButton.react'

describe('AuthButton', () => {
  describe.only('Login', () => {
    it('renders correctly when not logging in', () => {
      const tree = renderer.create(<AuthButton login />).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree.children[0].children[0]).toEqual('Sign In')
    })

    it('renders spinner when logging in', () => {
      const tree = renderer.create(<AuthButton loggingIn login />).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree.children[0].type).toEqual('ActivityIndicator')
    })
  })

  describe.only('SignUp', () => {
    it('renders correctly when not signing up', () => {
      const tree = renderer.create(<AuthButton />).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree.children[0].children[0]).toEqual('Create')
    })

    it('renders spinner when signing up', () => {
      const tree = renderer.create(<AuthButton signingUp />).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree.children[0].type).toEqual('ActivityIndicator')
    })
  })
})
