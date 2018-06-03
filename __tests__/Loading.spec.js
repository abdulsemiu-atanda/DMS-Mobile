import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Loading from '../components/shared/Loading.react'

describe('Loading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loading animating />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
