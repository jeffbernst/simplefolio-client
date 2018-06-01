import React from 'react'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { login } from '../actions/auth'
import { required, nonEmpty } from '../validators'

export class LoginForm extends React.Component {
  onSubmit (values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render () {
    let error
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }

    return (
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <div className="login-signup-message">Log in to go to your account.
          <span role='img' aria-label='slightly smiling emoji'>&#x1F642;</span>
        </div>
        <div className="login-signup-field">
          <Field component={Input} type="text" id="username" name="username" placeholder="username"
                 validate={[required, nonEmpty]} required/>
        </div>
        <div className="login-signup-field">
          <Field component={Input} type="password" id="password" name="password" placeholder="password"
                 validate={[required, nonEmpty]} required/>
        </div>
        <div className="submit-button-container">
          <button type="submit" className='login-signup-submit-button fade-in-out'
                  disabled={this.props.pristine || this.props.submitting}>Let's go!
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)