import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AuthLoading from '../components/AuthLoading.react'
import {noop} from '../util/util'

const props = {
  navigation: {
    navigate: noop
  }
}

describe('AuthLoading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AuthLoading {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
