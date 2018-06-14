import React from 'react'
import { shallow } from 'enzyme'

import { PieChart } from '../../components/pie-chart'

describe('<PieChart />', () => {
  it('Renders without crashing', () => {
    shallow(<PieChart/>)
  })
})