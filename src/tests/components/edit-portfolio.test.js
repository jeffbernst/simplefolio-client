import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'

import EditPortfolio from '../../components/edit-portfolio'

describe('<EditPortfolio />', () => {
  it('Renders without crashing', () => {
    shallow(<EditPortfolio store={store}/>)
  })
})