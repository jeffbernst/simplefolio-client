import React from 'react'
import { LandingPageTopSection } from './landing-page-top-section'
import { LandingPageMiddleSection } from './landing-page-middle-section'
import {LandingPageBottomSection} from './landing-page-bottom-section'
import './landing-page.css'

export function LandingPage () {
  return (
    <div>
      <LandingPageTopSection/>
      <LandingPageMiddleSection/>
      <LandingPageBottomSection/>
    </div>
  )
}