import React from 'react'
import { shallow } from 'enzyme'

import { ConnectedPortfolioPage as PortfolioPage } from '../../components/portfolio-page'

describe('<PortfolioPage />', () => {
  it('Renders without crashing', () => {
    shallow(<PortfolioPage/>)
  })
})