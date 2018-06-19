import React from 'react'
import { LandingNav } from './landing-nav'
import './login.css'
import LoginForm from './login-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function LoginPage (props) {
  if (props.loggedIn) {
    return <Redirect to="/"/>
  }

  return (
    <div className="login-signup-background">
      <div className="container">
        <LandingNav/>
        <LoginForm/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LoginPage)