import { reducer } from '../../reducers/reducer'
import {
  editPortfolioToggle, editWatchlistToggle,
  getCryptoListingsSuccess,
  getPortfolioSuccess,
  getPriceDataRequest,
  getPriceDataSuccess
} from '../../actions'

describe('main reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      loading: false,
      cryptoPriceData: undefined,
      portfolioData: undefined,
      formattedPortfolioList: undefined,
      pieChartData: undefined,
      editPortfolio: false,
      cryptoListings: undefined,
      watchlistData: undefined,
      formattedWatchlist: undefined,
      editWatchlist: false,
      portfolioTotal: '0'
    })
  })

  it('should return the current state on an unknown action', () => {
    let currentState = {}
    const state = reducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState)
  })

  describe('get price data', () => {
    const priceData = {
      'data': {
        '1': {
          'id': 1,
          'name': 'Bitcoin',
          'symbol': 'BTC',
          'website_slug': 'bitcoin',
          'rank': 1,
          'circulating_supply': 17008162.0,
          'total_supply': 17008162.0,
          'max_supply': 21000000.0,
          'quotes': {
            'USD': {
              'price': 9024.09,
              'volume_24h': 8765400000.0,
              'market_cap': 153483184623.0,
              'percent_change_1h': -2.31,
              'percent_change_24h': -4.18,
              'percent_change_7d': -0.47
            }
          },
          'last_updated': 1525137271
        }
      },
      'metadata': {
        'timestamp': 1525137187,
        'num_cryptocurrencies': 1602,
        'error': null
      }
    }

    it('should set loading to true upon request', () => {
      let state
      state = reducer(state, getPriceDataRequest())
      expect(state.loading).toEqual(true)
    })

    it('should set loading to false upon success, and return cryptoPriceData in payload', () => {
      let state
      state = reducer(state, getPriceDataSuccess(priceData))
      expect(state.loading).toEqual(false)
      expect(state.cryptoPriceData).toEqual(priceData)
    })
  })

  describe('edit portfolio toggle', () => {
    it('should toggle editPortfolio', () => {
      let state
      state = reducer(state, editPortfolioToggle())
      expect(state.editPortfolio).toEqual(true)
    })
  })

  describe('get portfolio', () => {
    it('should return portfolio in portfolioData upon success', () => {
      const portfolio = [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          quantity: 1,
          id: 1
        }
      ]

      let state
      state = reducer(state, getPortfolioSuccess(portfolio))
      expect(state.portfolioData).toEqual(portfolio)
    })
  })

  describe('get crypto listings', () => {
    it('should return crypto listings when fetch succeeds', () => {
      const cryptoListings = {
        'data': [
          {
            'id': 1,
            'name': 'Bitcoin',
            'symbol': 'BTC',
            'website_slug': 'bitcoin'
          },
          {
            'id': 2,
            'name': 'Litecoin',
            'symbol': 'LTC',
            'website_slug': 'litecoin'
          },
        ],
        'metadata': {
          'timestamp': 1525137187,
          'num_cryptocurrencies': 1602,
          'error': null
        }
      }

      let state
      state = reducer(state, getCryptoListingsSuccess(cryptoListings))
      expect(state.cryptoListings).toEqual(cryptoListings)
    })
  })

  describe('edit watchlist toggle', () => {
    it('should toggle editWatchlist', () => {
      let state
      state = reducer(state, editWatchlistToggle())
      expect(state.editWatchlist).toEqual(true)
    })
  })
})