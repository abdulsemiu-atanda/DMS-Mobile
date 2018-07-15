import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import SignUpForm from '../components/SignUpForm.react'
import {signUpFixtures} from '../util/fixtures/formFixtures'

describe('SignUpForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignUpForm {...signUpFixtures()} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children).toHaveLength(12)
  })

  it('render correctly when rendering conditions are present', () => {
    const tree = renderer.create(
      <SignUpForm {...signUpFixtures()} passwordMatch='false' signUpFail />
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.children).toHaveLength(14)
  })
})
