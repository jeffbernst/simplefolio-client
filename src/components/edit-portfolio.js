import React from 'react'
import './sign-up.css'
import { editPortfolioToggle, getCryptoListings } from '../actions'
import { connect } from 'react-redux'
import './edit-portfolio.css'

class EditPortfolio extends React.Component {
  // state = {
  //   portfolio: this.props.portfolioData
  // }
  constructor (props) {
    super(props)

    let holdings = {}
    this.props.portfolioData.forEach(crypto => holdings[crypto.name] = crypto.quantity)

    this.state = {
      portfolio: this.props.portfolioData,
      dropdown: 'Pick Cryptocurrency',
      ...holdings
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getCryptoListings()
  }

  handleInputChange (event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  render () {
    let editPortfolioFields
    if (this.state.portfolio)
      editPortfolioFields = this.state.portfolio.map((crypto, index) => {
        return (
          <div className='edit-portfolio-field' key={index}>
            {crypto.name}
            <div className="edit-input-container">
              <input
                name={crypto.name}
                type="number"
                value={this.state[crypto.name]}
                onChange={this.handleInputChange}/>&nbsp;
              {crypto.symbol}
              {/* x to close div goes here*/}
            </div>
          </div>
        )
      })

    let cryptoNames = []
    let cryptoDropdownOptions = []
    if (this.props.cryptoListings) {
      cryptoNames = this.props.cryptoListings.map(cryptoData => cryptoData.name)
      cryptoNames.sort()
      cryptoDropdownOptions = cryptoNames.map((name, index) => <option key={index} value={name}>{name}</option>)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out">
            Cancel
          </button>
          <button className="edit fade-in-out">
            Save
          </button>
        </div>
        <div className="edit-portfolio">
          {editPortfolioFields}
          <div className="dropdown-container">
            <select value={this.state.dropdown} onChange={this.handleInputChange} className='dropdown' name='dropdown'>
              <option value="Pick Cryptocurrency" disabled>Pick Cryptocurrency</option>
              {cryptoDropdownOptions}
            </select>
            <button className="edit fade-in-out" >Add</button>
          </div>
          {/*<div className="dropdown-container">*/}
          {/*<Field*/}
          {/*name="dropdown"*/}
          {/*label="dropdown"*/}
          {/*component={Dropdown}*/}
          {/*currencies={this.props.cryptoListings}*/}
          {/*className='dropdown'*/}
          {/*/>*/}
          {/*<button className="edit fade-in-out"*/}
          {/*onClick={handleSubmit(values =>*/}
          {/*this.onSubmit({...values, action: 'add'}))}>Add*/}
          {/*</button>*/}
          {/*</div>*/}
        </div>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    portfolioData: state.index.portfolioData,
    cryptoListings: state.index.cryptoListings,
  }
}

const mapDispatchToProps = {
  editPortfolioToggle,
  getCryptoListings
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPortfolio)
