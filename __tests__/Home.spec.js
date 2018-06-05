import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import {fromJS} from 'immutable'

import {Home} from '../components/Home.react'
import {noop} from '../util/util'

const date = new Date(1330688329321)
const publicDocuments = [
  {
    title: 'Scooby Doo',
    access: 'public',
    content: 'Scooby Doo is a beloved brown dog.',
    updatedAt: date.toISOString(),
    createdAt: date.toISOString()
  },
  {
    title: 'Sharpie',
    access: 'public',
    content: 'Sharpie is one of the perfectly crafted products.',
    updatedAt: date.toISOString(),
    createdAt: date.toISOString()
  }
]

const props = {
  asyncRequest: noop,
  document: {
    documentLoading: false,
    documents: fromJS(publicDocuments)
  },
  navigation: {
    state: {
      routeName: 'All'
    }
  },
  user: {
    documents: fromJS(publicDocuments),
    loadingDocuments: false
  }
}

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children.length).toEqual(2)
    expect(tree.children[0].children[0].children[0].children.length).toEqual(publicDocuments.length)
  })

  it('renders correctly when user is viewing their documents', () => {
    const userViewProps = {
      ...props,
      navigation: {
        state: {
          routeName: 'Collections'
        }
      }
    }
    const tree = renderer.create(<Home {...userViewProps}  />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children.length).toEqual(2)
  })

  it('does not render add button when there are no documents', () => {
    const noDocProp = {
      ...props,
      document: {
        documentLoading: false,
        documents: fromJS([])
      }
    }
    const tree = renderer.create(<Home {...noDocProp} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children.length).toEqual(3)
  })

  it('renders spinner when document is loading', () => {
    const loadingDocProp = {
      ...props,
      document: {
        documentLoading: true,
        documents: fromJS([])
      }
    }
    const tree = renderer.create(<Home {...loadingDocProp} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.type).toEqual('ActivityIndicator')
  })
})

