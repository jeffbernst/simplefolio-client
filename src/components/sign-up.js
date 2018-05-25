import React from 'react'
import {LandingNav} from './landing-nav'
import './sign-up.css'

export function SignUp () {
  return (
    <div className="login-signup-background">
      <div className="container">
        <LandingNav/>
        <form className="signup-form">
          <div className="login-signup-message">Create an account to get started!</div>
          <div className="login-signup-field">
            <input type="text" className="signup-email" id="signup-email" placeholder="email" required />
          </div>
          <div className="login-signup-field">
            <input type="password" className="signup-password" id="signup-password" placeholder="password" required />
          </div>
          <div className="login-signup-field">
            <input type="password" className="signup-email-confirmation" id="signup-password-confirmation" placeholder="confirm password" required />
          </div>
          <div className="submit-button-container">
            <button type="submit" className='login-signup-submit-button fade-in-out'>Let's go!</button>
          </div>
        </form>
      </div>
    </div>
  )
}