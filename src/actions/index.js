import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR,
  FORMAT_PORTFOLIO,
  EDIT_PORTFOLIO_TOGGLE,
  GET_PORTFOLIO_REQUEST,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_ERROR,
  GET_CRYPTO_LISTINGS_REQUEST,
  GET_CRYPTO_LISTINGS_SUCCESS,
  GET_CRYPTO_LISTINGS_ERROR,
  EDIT_PORTFOLIO_REQUEST,
  EDIT_PORTFOLIO_SUCCESS,
  EDIT_PORTFOLIO_ERROR
} from './types'
import React from 'react'
import fetch from 'isomorphic-fetch'
import { colors, darkGray } from '../colors'
import { PortfolioEntry } from '../components/portfolio-entry'
import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'

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

// THUNK TO GET PRICE DATA AND THEN FORMAT PORTFOLIO

export const getPriceDataAndFormatPortfolio = portfolio => async dispatch => {
  dispatch(getPriceDataRequest())

  try {
    const response = await fetch('https://api.coinmarketcap.com/v2/ticker/')
    const data = await response.json()

    dispatch(formatPortfolioAndPieChart(portfolio, data.data))
    dispatch(getPriceDataSuccess(data.data))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getPriceDataError(err.toString()))
  }
}

// FORMAT PORTFOLIO

const formatPortfolio = (portfolioList, pieChartData) => ({
  type: FORMAT_PORTFOLIO,
  portfolioList,
  pieChartData
})

export const formatPortfolioAndPieChart = (portfolio, priceData) => dispatch => {
  let portfolioList
  let pieChartData = []
  portfolioList = portfolio.map((item, index) => {
    // iterate through portfolio holdings and match up with current price data
    // const itemData = this.props.cryptoPriceData[item.id]
    const itemData = priceData[item.id]
    const {name, symbol} = itemData
    const price = itemData.quotes.USD.price.toFixed(2)
    const priceWithCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const percentChange = itemData.quotes.USD.percent_change_24h
    const {quantity} = item
    const balance = (quantity * price).toFixed(2)
    const colorIndex = index <= colors.length ? index : index % colors.length

    pieChartData.push({
      theta: balance,
      symbol,
      style: {fill: colors[colorIndex], stroke: darkGray, strokeWidth: 3}
    })

    return (
      <PortfolioEntry
        name={name}
        balance={balance}
        quantity={quantity}
        symbol={symbol}
        price={priceWithCommas}
        percentChange={percentChange}
        color={colors[colorIndex]}
        key={index}
      />
    )
  })

  dispatch(formatPortfolio(portfolioList, pieChartData))
}

// EDIT PORTFOLIO TOGGLE

export const editPortfolioToggle = () => ({
  type: EDIT_PORTFOLIO_TOGGLE
})

// GET PORTFOLIO DATA

const getPortfolioRequest = () => ({
  type: GET_PORTFOLIO_REQUEST
})

const getPortfolioSuccess = portfolioData => ({
  type: GET_PORTFOLIO_SUCCESS,
  payload: portfolioData
})

const getPortfolioError = error => ({
  type: GET_PORTFOLIO_ERROR,
  payload: error
})

export const getPortfolio = () => async (dispatch, getState) => {
  dispatch(getPortfolioRequest())

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    await await normalizeResponseErrors(response)
    const data = await response.json()

    dispatch(getPortfolioSuccess(data.portfolio))
    dispatch(getPriceDataAndFormatPortfolio(data.portfolio))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getPortfolioError(err.toString()))
  }
}

// GET CRYPTO LISTINGS

const getCryptoListingsRequest = () => ({
  type: GET_CRYPTO_LISTINGS_REQUEST
})

const getCryptoListingsSuccess = cryptoListings => ({
  type: GET_CRYPTO_LISTINGS_SUCCESS,
  payload: cryptoListings
})

const getCryptoListingsError = error => ({
  type: GET_CRYPTO_LISTINGS_ERROR,
  payload: error
})

// THUNK TO GET PRICE DATA AND THEN FORMAT PORTFOLIO

export const getCryptoListings = () => async dispatch => {
  dispatch(getCryptoListingsRequest())

  try {
    const response = await fetch('https://api.coinmarketcap.com/v2/listings/')
    const data = await response.json()



    dispatch(getCryptoListingsSuccess(data.data))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getCryptoListingsError(err.toString()))
  }
}

// EDIT PORTFOLIO


const editPortfolioRequest = () => ({
  type: EDIT_PORTFOLIO_REQUEST
})

const editPortfolioSuccess = portfolioData => ({
  type: EDIT_PORTFOLIO_SUCCESS,
  payload: portfolioData
})

const editPortfolioError = error => ({
  type: EDIT_PORTFOLIO_ERROR,
  payload: error
})

export const editPortfolio = updatedPortfolio => async (dispatch, getState) => {
  dispatch(editPortfolioRequest())

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${API_BASE_URL}/users/portfolio`, {
      method: 'PUT',
      body: JSON.stringify(updatedPortfolio),
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    await await normalizeResponseErrors(response)
    const data = await response.json()

    dispatch(editPortfolioSuccess(data.portfolio))
    // dispatch(getPriceDataAndFormatPortfolio(data.portfolio))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(editPortfolioError(err.toString()))
  }
}
