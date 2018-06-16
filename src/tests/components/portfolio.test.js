import React from 'react'
import { shallow } from 'enzyme'

import { ConnectedPortfolio as Portfolio } from '../../components/portfolio'

describe('<Portfolio />', () => {
  it('Renders without crashing', () => {
    shallow(<Portfolio/>)
  })
})