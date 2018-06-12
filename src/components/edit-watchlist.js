import React from 'react'
import { connect } from 'react-redux'
import { getCryptoListings, editWatchlistToggle } from '../actions'

class EditWatchlist extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      watchlist: [...this.props.watchlistData],
      dropdown: 'Pick Cryptocurrency',
      alreadyAddedAlert: false,
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

    this.setState({
      dropdown: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submitted')
    // this.props.editPortfolio(this.state.portfolio)
    // this.props.editPortfolioToggle()
  }

  addCrypto () {
    const name = this.state.dropdown
    let alreadyAdded = false
    this.state.watchlist.forEach(item => {
      if (item.name === name) alreadyAdded = true
    })

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
        watchlist: [
          ...prevState.watchlist,
          {
            id: dataFromListing.id,
            name,
            symbol: dataFromListing.symbol
          }
        ]
      }))
    }
  }

  removeCrypto (name) {
    const updateWatchlist = [...this.state.watchlist]
    const index = updateWatchlist.findIndex(item => item.name === name)
    updateWatchlist.splice(index, 1)
    this.setState({watchlist: updateWatchlist})
  }

  render () {
    let editWatchlistFields = this.state.watchlist.map((item, index) => {
      return (
        <div className='edit-portfolio-field' key={index}>
          {item.name} ({item.symbol})
          <div className="edit-input-container">
            <div className="remove-item fade-in-out"
                 onClick={() => this.removeCrypto(item.name)}>&times;</div>
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

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="title-and-button">
          <div className="portfolio-title">Watchlist</div>
          <button className="edit fade-in-out" type='button' onClick={() => this.props.editWatchlistToggle()}>
            Cancel
          </button>
          <button className="edit fade-in-out" type='submit'>
            Save
          </button>
        </div>
        <div className="edit-portfolio">
          {editWatchlistFields}
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
    editWatchlist: state.index.editWatchlist,
    watchlistData: state.index.watchlistData,
    cryptoListings: state.index.cryptoListings
  }
}

const mapDispatchToProps = {
  editWatchlistToggle,
  getCryptoListings
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWatchlist)