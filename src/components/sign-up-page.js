import React from 'react'
import { LandingNav } from './landing-nav'
import './sign-up.css'
import {connect} from 'react-redux';
import SignUpForm from './sign-up-form'

class SignUpPage extends React.Component {
  componentDidMount() {
    console.log('logged in?', this.props.loggedIn)
  }

  render () {
    return (
      <div className="login-signup-background">
        <div className="container">
          <LandingNav/>
          <SignUpForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);