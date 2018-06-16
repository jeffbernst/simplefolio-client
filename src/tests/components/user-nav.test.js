import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'

import UserNav from '../../components/user-nav'

describe('<UserNav />', () => {
  it('Renders without crashing', () => {
    shallow(<UserNav store={store}/>)
  })
})