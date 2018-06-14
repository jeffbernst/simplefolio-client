import React from 'react'
import { shallow } from 'enzyme'

import { PortfolioEntry } from '../../components/portfolio-entry'

describe('<PortfolioEntry />', () => {
  it('Renders without crashing', () => {
    shallow(<PortfolioEntry/>)
  })
})