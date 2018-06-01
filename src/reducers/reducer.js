import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR,
  FORMAT_PORTFOLIO
} from '../actions/types'

const initialState = {
  loading: false,
  cryptoPriceData: undefined,
  portfolioData: undefined,
  formattedPortfolioList: undefined,
  pieChartData: undefined
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
    default:
      return state
  }
}