import React from 'react'
import { shallow } from 'enzyme'

import { LandingNav } from '../../components/landing-nav'

describe('<LandingNav />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingNav/>)
  })
})