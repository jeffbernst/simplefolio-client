import React from 'react'
import { LandingNav } from './landing-nav'
import './sign-up.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignUpForm from './sign-up-form'

function SignUpPage (props) {
  if (props.loggedIn) {
    return <Redirect to="/"/>
  }

  return (
    <div className="login-signup-background">
      <div className="container">
        <LandingNav/>
        <SignUpForm/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(SignUpPage)