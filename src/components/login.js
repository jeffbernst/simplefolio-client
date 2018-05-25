import React from 'react'
import { LandingNav } from './landing-nav'
import './login.css'

export function Login () {
  return (
    <div className="login-background">
      <div className="container">
        <LandingNav/>
        <form className="login-form">
          <div className="login-message">Log in to go to your account. <span role='img' aria-label='slightly smiling emoji'>&#x1F642;</span></div>
          <div className="modal-form-field">
            <label htmlFor="login-email">Email: </label>
            <input type="text" className="login-email input-box modal-input-box" id="login-email" required />
          </div>
          <div className="modal-form-field">
            <label htmlFor="login-password">Password: </label>
            <input type="password" className="login-email input-box modal-input-box" id="login-password" required />
          </div>
          <div className="modal-submit-button-container">
            <button type="submit" className='login-submit-button slim-button modal-submit-button'>Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}