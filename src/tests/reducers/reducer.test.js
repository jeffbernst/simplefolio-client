import { reducer } from '../../reducers/reducer'

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

  // TODO tests for various thunks/actions
})