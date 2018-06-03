import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import {fromJS} from 'immutable'

import AppHeader from '../components/shared/AppHeader.react'

const props = {
  navigation: {
    state: {
      routes: []
    }
  }
}

const routeParamsProps = {
  navigation: {
    state: {
      routes: [
        {
          params: {
            documents: fromJS([{access: 'Private'}, {access: 'Private'}])
          }
        },
        {
          params: {
            documents: fromJS([{access: 'Private'}, {access: 'Private'}])
          }
        }
      ]
    }
  }
}

describe('AppHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppHeader {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toEqual('DMS')
  })

  it('renders correctly when routes is not an empty array', () => {
    const tree = renderer.create(<AppHeader {...routeParamsProps} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toEqual('PRIVATE')
  })
})
