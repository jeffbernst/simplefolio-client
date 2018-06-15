import {
  getPriceDataRequest,
  getPriceDataSuccess,
  getPriceDataError,
  formatPortfolio,
  updatePortfolioTotal,
  editPortfolioToggle,
  getPortfolioRequest,
  getPortfolioSuccess,
  getPortfolioError,
  getCryptoListingsRequest,
  getCryptoListingsSuccess,
  getCryptoListingsError,
  editPortfolioRequest,
  editPortfolioSuccess,
  editPortfolioError,
  getWatchlistRequest,
  getWatchlistSuccess,
  getWatchlistError,
  formatWatchlist,
  editWatchlistToggle,
  editWatchlistRequest,
  editWatchlistSuccess,
  editWatchlistError,
  getPriceDataAndFormatPortfolio
} from '../../actions'
import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR,
  FORMAT_PORTFOLIO,
  UPDATE_PORTFOLIO_TOTAL,
  EDIT_PORTFOLIO_TOGGLE,
  GET_PORTFOLIO_REQUEST,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_ERROR,
  GET_CRYPTO_LISTINGS_REQUEST,
  GET_CRYPTO_LISTINGS_SUCCESS,
  GET_CRYPTO_LISTINGS_ERROR,
  EDIT_PORTFOLIO_REQUEST,
  EDIT_PORTFOLIO_SUCCESS,
  EDIT_PORTFOLIO_ERROR,
  GET_WATCHLIST_REQUEST,
  GET_WATCHLIST_SUCCESS,
  GET_WATCHLIST_ERROR,
  FORMAT_WATCHLIST,
  EDIT_WATCHLIST_TOGGLE,
  EDIT_WATCHLIST_REQUEST,
  EDIT_WATCHLIST_SUCCESS,
  EDIT_WATCHLIST_ERROR
} from '../../actions/types'

// GET PRICE DATA

describe('getPriceDataRequest', () => {
  it('should return the action', () => {
    const action = getPriceDataRequest()
    expect(action.type).toEqual(GET_PRICE_DATA_REQUEST)
  })
})

describe('getPriceDataSuccess', () => {
  it('should return the action', () => {
    const priceData = {prices: 'lots of prices!'}
    const action = getPriceDataSuccess(priceData)
    expect(action.type).toEqual(GET_PRICE_DATA_SUCCES)
    expect(action.payload).toEqual(priceData)
  })
})

describe('getPriceDataError', () => {
  it('should return the action', () => {
    const error = 'my error'
    const action = getPriceDataError(error)
    expect(action.type).toEqual(GET_PRICE_DATA_ERROR)
    expect(action.payload).toEqual(error)
  })
})

// GET PRICE DATA AND THEN FORMAT PORTFOLIO

describe('getPriceDataAndFormatPortfolio', () => {
  it('Should dispatch getPriceDataRequest, getPriceDataSuccess', () => {
    const priceData = {
      "data": {
        "1": {
          "id": 1,
          "name": "Bitcoin",
          "symbol": "BTC",
          "website_slug": "bitcoin",
          "rank": 1,
          "circulating_supply": 17008162.0,
          "total_supply": 17008162.0,
          "max_supply": 21000000.0,
          "quotes": {
            "USD": {
              "price": 9024.09,
              "volume_24h": 8765400000.0,
              "market_cap": 153483184623.0,
              "percent_change_1h": -2.31,
              "percent_change_24h": -4.18,
              "percent_change_7d": -0.47
            }
          },
          "last_updated": 1525137271
        }
      },
      "metadata": {
        "timestamp": 1525137187,
        "num_cryptocurrencies": 1602,
        "error": null
      }
    }

    global.fetch = jest.fn().mockImplementation(() => {
        console.log('fetching')
        Promise.resolve({
          ok: true,
          json () {
            return priceData
          }
        })
      }
    )

    const dispatch = jest.fn()
    const portfolio = [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        quantity: 1
      }
    ]
    return getPriceDataAndFormatPortfolio(portfolio)(dispatch).then(() => {
      // expect(dispatch).toHaveBeenCalledWith(getPriceDataRequest())
      // expect(fetch).toHaveBeenCalledWith('https://api.coinmarketcap.com/v2/ticker/')
      expect(dispatch).toHaveBeenCalledWith(getPriceDataSuccess(priceData.data))
    })
  })
})

// FORMAT PORTFOLIO

describe('formatPortfolio', () => {
  it('should return the action', () => {
    const portfolioList = ['portfolio list']
    const pieChartData = 'pie chart data'
    const action = formatPortfolio(portfolioList, pieChartData)
    expect(action.type).toEqual(FORMAT_PORTFOLIO)
    expect(action.portfolioList).toEqual(portfolioList)
    expect(action.pieChartData).toEqual(pieChartData)
  })
})

// TODO format portfolio and pie chart thunk

// UPDATE PORTFOLIO TOTAL

describe('updatePortfolioTotal', () => {
  it('should return the action', () => {
    const portfolioTotal = 100
    const action = updatePortfolioTotal(portfolioTotal)
    expect(action.type).toEqual(UPDATE_PORTFOLIO_TOTAL)
    expect(action.payload).toEqual(portfolioTotal)
  })
})

// EDIT PORTFOLIO TOGGLE

describe('editPortfolioToggle', () => {
  it('should return the action', () => {
    const action = editPortfolioToggle()
    expect(action.type).toEqual(EDIT_PORTFOLIO_TOGGLE)
  })
})

// GET PORTFOLIO DATA

describe('getPortfolioRequest', () => {
  it('should return the action', () => {
    const action = getPortfolioRequest()
    expect(action.type).toEqual(GET_PORTFOLIO_REQUEST)
  })
})

describe('getPortfolioSuccess', () => {
  it('should return the action', () => {
    const portfolioData = 'portfolio data'
    const action = getPortfolioSuccess(portfolioData)
    expect(action.type).toEqual(GET_PORTFOLIO_SUCCESS)
    expect(action.payload).toEqual(portfolioData)
  })
})

describe('getPortfolioError', () => {
  it('should return the action', () => {
    const error = 'error'
    const action = getPortfolioError(error)
    expect(action.type).toEqual(GET_PORTFOLIO_ERROR)
    expect(action.payload).toEqual(error)
  })
})

// TODO test get portfolio thunk

// GET CRYPTO LISTINGS

describe('getCryptoListingsRequest', () => {
  it('should return the action', () => {
    const action = getCryptoListingsRequest()
    expect(action.type).toEqual(GET_CRYPTO_LISTINGS_REQUEST)
  })
})

describe('getCryptoListingsSucess', () => {
  it('should return the action', () => {
    const cryptoListings = 'listings'
    const action = getCryptoListingsSuccess(cryptoListings)
    expect(action.type).toEqual(GET_CRYPTO_LISTINGS_SUCCESS)
    expect(action.payload).toEqual(cryptoListings)
  })
})

describe('getCryptoListingsError', () => {
  it('should return an action', () => {
    const error = 'error'
    const action = getCryptoListingsError(error)
    expect(action.type).toEqual(GET_CRYPTO_LISTINGS_ERROR)
    expect(action.payload).toEqual(error)
  })
})

// TODO test get crypto listings thunk

// EDIT PORTFOLIO

describe('editPortfolioRequest', () => {
  it('should return an action', () => {
    const action = editPortfolioRequest()
    expect(action.type).toEqual(EDIT_PORTFOLIO_REQUEST)
  })
})

describe('editPortfolioSuccess', () => {
  it('should return an action', () => {
    const portfolioData = 'portfolio data'
    const action = editPortfolioSuccess(portfolioData)
    expect(action.type).toEqual(EDIT_PORTFOLIO_SUCCESS)
    expect(action.payload).toEqual(portfolioData)
  })
})

describe('editPortfolioError', () => {
  it('should return an action', () => {
    const error = 'error'
    const action = editPortfolioError(error)
    expect(action.type).toEqual(EDIT_PORTFOLIO_ERROR)
    expect(action.payload).toEqual(error)
  })
})

// TODO test edit portfolio thunk

// GET WATCHLIST

describe('getWatchlistRequest', () => {
  it('should return an action', () => {
    const action = getWatchlistRequest()
    expect(action.type).toEqual(GET_WATCHLIST_REQUEST)
  })
})

describe('getWatchlistSuccess', () => {
  it('should return an action', () => {
    const watchlistData = 'watchlist data'
    const action = getWatchlistSuccess(watchlistData)
    expect(action.type).toEqual(GET_WATCHLIST_SUCCESS)
    expect(action.payload).toEqual(watchlistData)
  })
})

describe('getWatchlistError', () => {
  it('should return an action', () => {
    const error = 'error'
    const action = getWatchlistError(error)
    expect(action.type).toEqual(GET_WATCHLIST_ERROR)
    expect(action.payload).toEqual(error)
  })
})

describe('formatWatchlist', () => {
  it('should return an action', () => {
    const formattedWatchlist = 'formatted watchlist'
    const action = formatWatchlist(formattedWatchlist)
    expect(action.type).toEqual(FORMAT_WATCHLIST)
    expect(action.payload).toEqual(formattedWatchlist)
  })
})

// TODO test get watchlist thunk

// EDIT WATCHLIST TOGGLE

describe('editWatchlistToggle', () => {
  it('should return an action', () => {
    const action = editWatchlistToggle()
    expect(action.type).toEqual(EDIT_WATCHLIST_TOGGLE)
  })
})

// EDIT WATCHLIST

describe('editWatchlistRequest', () => {
  it('should return an action', () => {
    const action = editWatchlistRequest()
    expect(action.type).toEqual(EDIT_WATCHLIST_REQUEST)
  })
})

describe('editWatchlistSuccess', () => {
  it('should return an action', () => {
    const watchlistData = 'watchlist data'
    const action = editWatchlistSuccess(watchlistData)
    expect(action.type).toEqual(EDIT_WATCHLIST_SUCCESS)
    expect(action.payload).toEqual(watchlistData)
  })
})

describe('editWatchlistError', () => {
  it('should return an action', () => {
    const error = 'error'
    const action = editWatchlistError(error)
    expect(action.type).toEqual(EDIT_WATCHLIST_ERROR)
    expect(action.payload).toEqual(error)
  })
})

// TODO test edit watchlist thunk