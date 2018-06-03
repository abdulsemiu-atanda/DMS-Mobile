import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import EmptyDocument from '../components/shared/EmptyDocument.react'
import {noop} from '../util/util'

const props = {
  screen: 'All',
  addDocument: noop
}

describe('EmptyDocument', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EmptyDocument {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0])
      .toMatch('Oops! there are no public documents currently available for viewing.')
  })

  it('renders correctly when screen is not All', () => {
    const newProps = {
      ...props,
      screen: 'Collection'
    }
    const tree = renderer.create(<EmptyDocument {...newProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0]).toEqual('Oops! You have not added any document.')
  })
})
