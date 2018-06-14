import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'

import SignUpPage from '../../components/sign-up-page'

describe('<SignUpPage />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpPage store={store}/>)
  })
})