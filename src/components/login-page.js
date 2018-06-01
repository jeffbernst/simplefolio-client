import React from 'react'
import { LandingNav } from './landing-nav'
import './login.css'

export function LoginPage () {
  return (
    <div className="login-signup-background">
      <div className="container">
        <LandingNav/>
        <form className="login-form">
          <div className="login-signup-message">Log in to go to your account. <span role='img' aria-label='slightly smiling emoji'>&#x1F642;</span></div>
          <div className="login-signup-field">
            <input type="text" className="login-email" id="login-email" placeholder="email" required />
          </div>
          <div className="login-signup-field">
            <input type="password" className="login-password" id="login-password" placeholder="password" required />
          </div>
          <div className="submit-button-container">
            <button type="submit" className='login-signup-submit-button fade-in-out'>Let's go!</button>
          </div>
        </form>
      </div>
    </div>
  )
}