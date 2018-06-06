import React from 'react'
import './sign-up.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { Dropdown } from './dropdown'
import { editPortfolioToggle, getCryptoListings } from '../actions'
import { connect } from 'react-redux'
import './edit-portfolio.css'
import { nonEmpty, required } from '../validators'

export class EditPortfolio extends React.Component {
  state = {
    portfolio: this.props.portfolioData
  }

  componentDidMount () {
    this.props.getCryptoListings()
  }

  onSubmit (values) {
    switch(values.action) {
      case 'cancel':
        this.props.editPortfolioToggle()
        break
      case 'save':
        console.log({values})
        break
      case 'add':
        console.log({values})
        break
      default:
        console.log('error submitting edit portfolio form')
    }
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

    let editPortfolioFields
    // create initial set of fields from state
    // then allow more to be added from dropdown
    // without updating portfolio in state or db
    // might want to use component state to hold current version of portfolio

    if (this.state.portfolio)
      editPortfolioFields = this.state.portfolio.map((crypto, index) => {
        return (
          <div className='edit-portfolio-field' key={index}>
            {crypto.name}
            <div className="edit-input-container">
              <Field component={Input}
                     type="number"
                     id={crypto.name}
                     name={crypto.name}
                     validate={[required, nonEmpty]}
                     required/>&nbsp;
              {crypto.symbol}
              {/* x to close div goes here*/}
            </div>
          </div>
        )
      })

    return (
      <div>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out"
                  onClick={handleSubmit(values => this.onSubmit({...values, action: 'cancel'}))}>
            Cancel
          </button>
          <button className="edit fade-in-out"
                  onClick={handleSubmit(values => this.onSubmit({...values, action: 'save'}))}>
            Save
          </button>
        </div>
        <div className="edit-portfolio">
          {error}
          {editPortfolioFields}
          <div className="dropdown-container">
            <Field
              name="dropdown"
              label="dropdown"
              component={Dropdown}
              currencies={this.props.cryptoListings}
              className='dropdown'
            />
            <button className="edit fade-in-out"
                    onClick={handleSubmit(values =>
                      this.onSubmit({...values, action: 'add'}))}>Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  // initialize values for fields
  // when editing portfolio
  let initialValues
  if (state.index.portfolioData) {
    initialValues = state.index.portfolioData.map(crypto => {
      let cryptoObj = {}
      cryptoObj[crypto.name] = crypto.quantity
      return cryptoObj
    })
  }
  console.log({initialValues})

  return {
    portfolioData: state.index.portfolioData,
    cryptoListings: state.index.cryptoListings,
    initialValues
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