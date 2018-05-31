import React from 'react'
import { LandingNav } from './landing-nav'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
// import { registerUser } from '../actions/users'
// import { login } from '../actions/auth'
import { required, nonEmpty, matches, length, isTrimmed } from '../validators'

const passwordLength = length({min: 10, max: 72})
const matchesPassword = matches('password')

class SignUp extends React.Component {
  onSubmit (values) {
    // const {username, password, passwordConfirmation} = values
    // const user = {username, password, firstName, lastName}
    // return this.props
    //   .dispatch(registerUser(user))
    //   .then(() => this.props.dispatch(login(username, password)))
    console.log(values)
  }

  render () {
    return (
      <div className="login-signup-background">
        <div className="container">
          <LandingNav/>
          <form className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
                )}>
            <div className="login-signup-message">Create an account to get started!</div>
            <div className="login-signup-field">
              <Field component={Input} type="text" name="username" placeholder="username"
                     validate={[required, nonEmpty, isTrimmed]}/>
            </div>
            <div className="login-signup-field">
              <Field component={Input} type="password" name="password"
                     placeholder="password" validate={[required, passwordLength, isTrimmed]}/>
            </div>
            <div className="login-signup-field">
              <Field component={Input} type="password" name="passwordConfirmation"
                     placeholder="confirm password"
                     validate={[required, nonEmpty, matchesPassword]}/>
            </div>
            <div className="submit-button-container">
              <button type="submit" className='login-signup-submit-button fade-in-out'
                      disabled={this.props.pristine || this.props.submitting}>
                Let's go!
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUp)