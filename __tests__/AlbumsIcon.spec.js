import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AlbumsIcon from '../components/icons/AlbumsIcon.react'

describe('AlbumsIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AlbumsIcon tintColor='blue' />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.props.style[0].color).toEqual('blue')
  })
})
