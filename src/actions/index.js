import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR
} from './types'
import fetch from 'isomorphic-fetch'

const getPriceDataRequest = () => ({
  type: GET_PRICE_DATA_REQUEST
})

const getPriceDataSuccess = priceData => ({
  type: GET_PRICE_DATA_SUCCES,
  payload: priceData
})

const getPriceDataError = error => ({
  type: GET_PRICE_DATA_ERROR,
  payload: error
})

export const getPriceData = () => async dispatch => {
  dispatch(getPriceDataRequest())

  try {
    const response = await fetch('https://api.coinmarketcap.com/v2/ticker/')
    const data = await response.json()
    dispatch(getPriceDataSuccess(data.data))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getPriceDataError(err.toString()))
  }
}