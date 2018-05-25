import React from 'react'
import './landing-nav.css'

export function LandingNav () {
  return (
    <nav>
      <div className="site-logo fade-in-out">Simplefol.io</div>
      <div className="nav-buttons">
        <button className="login fade-in-out">Login</button>
        <button className="signup fade-in-out">Sign Up</button>
      </div>
    </nav>
  )
}