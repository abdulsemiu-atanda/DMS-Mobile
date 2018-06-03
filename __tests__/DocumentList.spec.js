import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import {fromJS} from 'immutable'
import moment from 'moment'

import DocumentList from '../components/shared/DocumentList.react'
import {noop} from '../util/util'

const publicDocuments = [
  {
    title: 'Scooby Doo',
    access: 'public',
    content: 'Scooby Doo is a beloved brown dog.',
    updatedAt: Date.now(),
    createdAt: Date.now()
  },
  {
    title: 'Sharpie',
    access: 'public',
    content: 'Sharpie is one of the perfectly crafted products.',
    updatedAt: Date.now(),
    createdAt: Date.now()
  }
]
const props = {
  documents: fromJS(publicDocuments),
  navigation: {
    navigate: noop,
    state: {}
  },
  screen: 'All'
}

describe('DocumentList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DocumentList {...props} />).toJSON()
    const component = tree.children[0].children[0].children[0].children[0].children[0].children

    expect(tree).toMatchSnapshot()
    expect(component[0].type).toEqual('Text')
    expect(component[0].children[0]).toEqual(publicDocuments[0].title)
    expect(component[1].children[0]).toEqual(publicDocuments[0].content)
    expect(component[3].children[1])
      .toEqual(moment(publicDocuments[0].updatedAt).format('MMM Do YY'))
    expect(component[3].children[3])
      .toEqual(moment(publicDocuments[0].createdAt).format('MMM Do YY'))
  })

  it('renders correctly when user is viewing their documents', () => {
    const userViewProps = {
      ...props,
      screen: 'Collection'
    }
    const tree = renderer.create(<DocumentList {...userViewProps} />).toJSON()
    const categoryView = tree.children[1].children[0].children[0].children[0].children[0]

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0].children[0]).toEqual('ACCESS')
    expect(categoryView.children[0]).toEqual('Public')
    expect(parseInt(categoryView.children[2])).toEqual(userViewProps.documents.size)
  })

  it('renders correctly when there are no documents', () => {
    const noDocProps = {
      ...props,
      documents: fromJS([])
    }
    const tree = renderer.create(<DocumentList {...noDocProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0])
      .toMatch('Oops! there are no public documents currently available for viewing.')
  })
})
