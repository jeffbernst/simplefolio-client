import React from 'react'
import './sign-up.css'
import { editPortfolioToggle, getCryptoListings, editPortfolio } from '../actions'
import { connect } from 'react-redux'
import './edit-portfolio.css'

class EditPortfolio extends React.Component {
  constructor (props) {
    super(props)

    let holdings = {}
    this.props.portfolioData.forEach(crypto => holdings[crypto.name] = crypto)

    this.state = {
      portfolio: holdings,
      dropdown: 'Pick Cryptocurrency',
      alreadyAddedAlert: false,
      zeroBalanceAlert: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addCrypto = this.addCrypto.bind(this)
    this.removeCrypto = this.removeCrypto.bind(this)
  }

  componentDidMount () {
    this.props.getCryptoListings()
  }

  handleInputChange (event) {
    const value = event.target.value
    const name = event.target.name

    if (name === 'dropdown')
      this.setState({
        dropdown: value
      })
    else
      this.setState(prevState => ({
        portfolio: {
          ...prevState.portfolio,
          [name]: {
            ...prevState.portfolio[name],
            quantity: value
          }
        }
      }))
  }

  handleSubmit (event) {
    event.preventDefault()
    // check if zero balance exists only if portfolio isn't empty
    let containsZeroBalance
    if (Object.keys(this.state.portfolio).length === 0 && this.state.portfolio.constructor === Object) {
      containsZeroBalance = false
    } else {
      const portfolioKeys = Object.keys(this.state.portfolio)
      portfolioKeys.forEach(key => {
        if (this.state.portfolio[key].quantity === 0) containsZeroBalance = true
      })
    }

    if (containsZeroBalance) {
      this.setState({
        zeroBalanceAlert: true
      })
      setTimeout(() => {
        this.setState({
          zeroBalanceAlert: false
        })
      }, 2000)
    } else {
      this.props.editPortfolio(this.state.portfolio)
      this.props.editPortfolioToggle()
    }
  }

  addCrypto () {
    const name = this.state.dropdown
    const portfolioKeys = Object.keys(this.state.portfolio)
    const alreadyAdded = portfolioKeys.includes(name)

    if (alreadyAdded) {
      // toggle display style of already added alert message
      this.setState({
        alreadyAddedAlert: true
      })
      setTimeout(() => {
        this.setState({
          alreadyAddedAlert: false
        })
      }, 2000)
    }
    else if (name !== 'Pick Cryptocurrency' && !alreadyAdded) {
      const dataFromListing = this.props.cryptoListings.find(crypto => crypto.name === name)
      this.setState(prevState => ({
        portfolio: {
          ...prevState.portfolio,
          [name]: {
            id: dataFromListing.id,
            name,
            symbol: dataFromListing.symbol,
            quantity: 0
          }
        }
      }))
    }
  }

  removeCrypto (name) {
    let portfolio = Object.assign({}, this.state.portfolio)
    delete portfolio[name]
    this.setState({portfolio})
  }

  render () {
    let portfolioKeys = Object.keys(this.state.portfolio)
    let editPortfolioFields = portfolioKeys.map((key, index) => {
      return (
        <div className='edit-portfolio-field' key={index}>
          {this.state.portfolio[key].name}
          <div className="edit-input-container">
            <input
              name={this.state.portfolio[key].name}
              type="number"
              value={this.state.portfolio[key].quantity}
              onChange={this.handleInputChange}
              step='any'
              min='0'/>&nbsp;
            {this.state.portfolio[key].symbol}
            <div className="remove-item fade-in-out"
                 onClick={() => this.removeCrypto(this.state.portfolio[key].name)}>&times;</div>
          </div>
        </div>
      )
    })

    let cryptoDropdownOptions = []
    if (this.props.cryptoListings) {
      let cryptoNames = this.props.cryptoListings.map(cryptoData => cryptoData.name).sort((a, b) => {
        a = a.toLowerCase()
        b = b.toLowerCase()
        if (a === b) return 0
        return a < b ? -1 : 1
      })
      cryptoDropdownOptions = cryptoNames.map((name, index) => <option key={index} value={name}>{name}</option>)
    }

    const alreadyAdded = this.state.alreadyAddedAlert ? 'block' : 'none'
    const zeroBalance = this.state.zeroBalanceAlert ? 'block' : 'none'

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out" type='button' onClick={() => this.props.editPortfolioToggle()}>
            Cancel
          </button>
          <button className="edit fade-in-out" type='submit'>
            Save
          </button>
          <div className="edit-message zero-balance"
               style={{display: zeroBalance}}>
            Can't add zero balance!
            <span role='img' aria-label='pointing down emoji'>&#128071;</span>
          </div>
        </div>
        <div className="edit-portfolio">
          {editPortfolioFields}
          <div className="dropdown-container">
            <select value={this.state.dropdown} onChange={this.handleInputChange} className='dropdown' name='dropdown'>
              <option value="Pick Cryptocurrency" disabled>Pick Cryptocurrency</option>
              {cryptoDropdownOptions}
            </select>
            <button type='button' className="edit fade-in-out" onClick={this.addCrypto}>Add</button>
          </div>
          <div className='edit-message already-added'
               style={{display: alreadyAdded}}>
            Already added!
            <span role='img' aria-label='pointing up emoji'>&#128070;</span>
          </div>
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
  getCryptoListings,
  editPortfolio
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPortfolio)
