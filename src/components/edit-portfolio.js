import React from 'react'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { editPortfolioToggle } from '../actions'

export class EditPortfolio extends React.Component {
  onSubmit (values) {
    if (values.action === 'cancel')
      this.props.dispatch(editPortfolioToggle())
    else if (values.action === 'save')
      console.log('save stuff!')
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

    const {handleSubmit} = this.props

    return (
      <div>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out"
                  onClick={handleSubmit(values =>
                    this.onSubmit({ ...values, action: 'cancel' }))}>Cancel
          </button>
          <button className="edit fade-in-out"
                  onClick={handleSubmit(values =>
                    this.onSubmit({ ...values, action: 'save' }))}>Save
          </button>
        </div>
        <div className="portfolio">
          {error}
          <div className="login-signup-field">
            <Field component={Input} type="password" id="password" name="password" placeholder="password"/>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'edit-portfolio',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-portfolio', 'password'))
})(EditPortfolio)