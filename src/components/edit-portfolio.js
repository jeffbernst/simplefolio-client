import React from 'react'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { Dropdown } from './dropdown'
import { editPortfolioToggle, getCryptoListings } from '../actions'
import { connect } from 'react-redux'

export class EditPortfolio extends React.Component {
  componentDidMount () {
    this.props.getCryptoListings()
  }

  onSubmit (values) {
    if (values.action === 'cancel')
      this.props.editPortfolioToggle()
    else if (values.action === 'save')
      console.log({values})
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
                    this.onSubmit({...values, action: 'cancel'}))}>Cancel
          </button>
          <button className="edit fade-in-out"
                  onClick={handleSubmit(values =>
                    this.onSubmit({...values, action: 'save'}))}>Save
          </button>
        </div>
        <div className="portfolio">
          {error}
          <Field component={Input} type="dropdown" id="add-crypto" name="add-crypto"/>
          <Field
            name="dropDownSelect"
            label="dropDownSelect"
            component={Dropdown}
            currencies={this.props.cryptoListings}
            className="form-control"
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    portfolioData: state.index.portfolioData,
    cryptoListings: state.index.cryptoListings
  }
}

const mapDispatchToProps = {
  editPortfolioToggle,
  getCryptoListings
}

EditPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPortfolio)

export default reduxForm({
  form: 'edit-portfolio',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-portfolio', 'password'))
})(EditPortfolio)