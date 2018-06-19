import React from 'react'
import { ConnectedLandingPageTopSection as LandingPageTopSection } from './landing-page-top-section'
import { ConnectedLandingPageMiddleSection } from './landing-page-middle-section'
import { LandingPageBottomSection } from './landing-page-bottom-section'
import './landing-page.css'

export function LandingPage () {
  return (
    <div>
      <LandingPageTopSection/>
      <ConnectedLandingPageMiddleSection/>
      <LandingPageBottomSection/>
    </div>
  )
}