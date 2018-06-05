import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR,
  FORMAT_PORTFOLIO,
  EDIT_PORTFOLIO_TOGGLE,
  GET_PORTFOLIO_REQUEST,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_ERROR,
  GET_CRYPTO_LISTINGS_SUCCESS, GET_CRYPTO_LISTINGS_REQUEST, GET_CRYPTO_LISTINGS_ERROR
} from '../actions/types'

const initialState = {
  loading: false,
  cryptoPriceData: undefined,
  portfolioData: undefined,
  formattedPortfolioList: undefined,
  pieChartData: undefined,
  editPortfolio: false,
  cryptoListings: undefined
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICE_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PRICE_DATA_SUCCES:
      return {
        ...state,
        loading: false,
        cryptoPriceData: action.payload
      }
    case GET_PRICE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FORMAT_PORTFOLIO:
      return {
        ...state,
        formattedPortfolioList: action.portfolioList,
        pieChartData: action.pieChartData
      }
    case EDIT_PORTFOLIO_TOGGLE:
      return {
        ...state,
        editPortfolio: !state.editPortfolio
      }
    case GET_PORTFOLIO_REQUEST:
      return {
        ...state
      }
    case GET_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolioData: action.payload
      }
    case GET_PORTFOLIO_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GET_CRYPTO_LISTINGS_REQUEST:
      return {
        ...state
      }
    case GET_CRYPTO_LISTINGS_SUCCESS:
      return {
        ...state,
        cryptoListings: action.payload
      }
    case GET_CRYPTO_LISTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}