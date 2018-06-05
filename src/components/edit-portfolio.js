import React from 'react'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { required, nonEmpty } from '../validators'

export class EditPortfolio extends React.Component {
  onSubmit (values) {
    // return this.props.dispatch(login(values.username, values.password))
    // this will be triggered
    console.log('edited')
  }

  editPortfolioToggle () {
    this.props.editPortfolioToggle()
    // execute thunk to update portfolio on database
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

    // make array of fields for each currency in portfolio
    {/*<div className="login-signup-field">*/}
    {/*<Field component={Input} type="text" id="username" name="username" placeholder="username"*/}
    {/*validate={[required, nonEmpty]} required/>*/}
    {/*</div>*/}

    return (
      <form className="edit-portfolio" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out" type='submit' onClick={() => this.editPortfolioToggle()}
                  disabled={this.props.pristine || this.props.submitting}>Save
          </button>
        </div>
        <div className="portfolio">
          {error}
          <div className="login-signup-field">
            <Field component={Input} type="password" id="password" name="password" placeholder="password"
                   validate={[required, nonEmpty]} required/>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'edit-portfolio',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-portfolio', 'field'))
})(EditPortfolio)