import React from 'react'
import { shallow } from 'enzyme'

import SignUpForm from '../../components/sign-up-form'

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpForm/>)
  })
})