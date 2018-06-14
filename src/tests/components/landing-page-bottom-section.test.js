import React from 'react'
import { shallow } from 'enzyme'

import { LandingPageBottomSection } from '../../components/landing-page-bottom-section'

describe('<LandingPageBottomSection />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPageBottomSection/>)
  })
})