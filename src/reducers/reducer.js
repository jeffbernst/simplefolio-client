import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR
} from '../actions/types'

const initialState = {
  loading: false,
  cryptoPriceData: undefined
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
    default:
      return state
  }
}