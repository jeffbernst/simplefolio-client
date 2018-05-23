import React from 'react'
import './landing-page-top-section.css'

export function LandingPageTopSection () {
  const yellowPie =
    <svg width="251px" height="250px" viewBox="0 0 251 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Landing-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="preview" transform="translate(-562.000000, -426.000000)">
          <g id="pie-chart" transform="translate(563.000000, 426.000000)">
            <circle id="Oval" fill="#F7D633" cx="125" cy="125" r="125"></circle>
            <path d="M126.774623,117.369886 L96.473374,243.834127" id="Line-4" stroke="#A084D1" stroke-width="3" stroke-linecap="square"></path>
            <path d="M124.26746,117.349498 L1.14860984,122.617057" id="Line-5" stroke="#A084D1" stroke-width="3" stroke-linecap="square"></path>
            <path d="M232.128568,190.323276 L28.7437914,47.9710388" id="Line-6" stroke="#A084D1" stroke-width="3" stroke-linecap="square"></path>
          </g>
        </g>
      </g>
    </svg>

  return (
    <div className="background">
      <div className="container">
        <nav>
          <div className="site-logo">Simplefolio</div>
          <div className="nav-buttons">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
        </nav>
        <div className="landing-message">
          {yellowPie}
          <div className="landing-copy-and-button">
            <div className="landing-copy">
              A simple cryptocurrency portfolio for those
              who don’t want to get bogged down with
              complicated features.
            </div>
            <button className="get-started">Get Started</button>
          </div>
          </div>
      </div>
    </div>
  )
}