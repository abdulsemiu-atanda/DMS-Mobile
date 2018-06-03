import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AppsIcon from '../components/icons/AppsIcon.react'

describe('AppsIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppsIcon tintColor='blue' />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
