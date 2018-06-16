import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'

import LoginPage from '../../components/login-page'

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage store={store}/>)
  })
})