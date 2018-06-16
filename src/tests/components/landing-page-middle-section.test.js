import React from 'react'
import { shallow } from 'enzyme'

import { ConnectedLandingPageMiddleSection as LandingPageMiddleSection } from '../../components/landing-page-middle-section'

describe('<LandingPageMiddleSection />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPageMiddleSection/>)
  })
})