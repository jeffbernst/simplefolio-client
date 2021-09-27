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
  EDIT_PORTFOLIO_ERROR,
  GET_WATCHLIST_REQUEST,
  GET_WATCHLIST_SUCCESS,
  GET_WATCHLIST_ERROR,
  FORMAT_WATCHLIST,
  EDIT_WATCHLIST_TOGGLE,
  EDIT_WATCHLIST_REQUEST,
  EDIT_WATCHLIST_SUCCESS,
  EDIT_WATCHLIST_ERROR,
  UPDATE_PORTFOLIO_TOTAL
} from './types'
import React from 'react'
import fetch from 'isomorphic-fetch'
import { colors, darkGray } from '../colors'
import { PortfolioEntry } from '../components/portfolio-entry'
import { REACT_APP_API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'
import { WatchlistWidget } from '../components/watchlist-widget'

// GET PRICE DATA

export const getPriceDataRequest = () => ({
  type: GET_PRICE_DATA_REQUEST
})

export const getPriceDataSuccess = priceData => ({
  type: GET_PRICE_DATA_SUCCES,
  payload: priceData
})

export const getPriceDataError = error => ({
  type: GET_PRICE_DATA_ERROR,
  payload: error
})

// GET PRICE DATA AND THEN FORMAT PORTFOLIO

export const getPriceDataAndFormatPortfolio = portfolio => async dispatch => {
  dispatch(getPriceDataRequest())

  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/ticker`)
    const data = await response.json()

    // TODO: Handle fetching tokens not included in top 100
    const priceData = data.tickers.data.reduce((accumulator, ticker) => ({
      ...accumulator,
      [ticker.id]: {
        name: ticker.name,
        symbol: ticker.symbol,
        quotes: ticker.quote,
      }
    }), {})

    dispatch(getPriceDataSuccess(priceData))
    dispatch(formatPortfolioAndPieChart(portfolio, priceData))

  } catch (err) {
    console.error('error message: ', err)
    dispatch(getPriceDataError(err.toString()))
  }
}

// FORMAT PORTFOLIO

export const formatPortfolio = (portfolioList, pieChartData) => ({
  type: FORMAT_PORTFOLIO,
  portfolioList,
  pieChartData
})

export const formatPortfolioAndPieChart = (portfolio, priceData) => dispatch => {
  let portfolioList
  let pieChartData = []
  let portfolioTotal = 0
  portfolioList = portfolio.map((item, index) => {
    // iterate through portfolio holdings and match up with current price data
    const itemData = priceData[item.id]
    const {name, symbol} = itemData
    const price = itemData.quotes.USD.price.toFixed(2)
    const priceWithCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const percentChange = itemData.quotes.USD.percent_change_24h
    const {quantity} = item
    const balance = (quantity * price).toFixed(2)
    const balanceWithCommas = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const colorIndex = index <= colors.length ? index : index % colors.length

    portfolioTotal += parseFloat(balance)

    pieChartData.push({
      theta: balance,
      symbol,
      style: {fill: colors[colorIndex], stroke: darkGray, strokeWidth: 3}
    })

    return (
      <PortfolioEntry
        name={name}
        balance={balanceWithCommas}
        quantity={quantity}
        symbol={symbol}
        price={priceWithCommas}
        percentChange={percentChange}
        color={colors[colorIndex]}
        key={index}
      />
    )
  })

  const portfolioTotalWithCommas = portfolioTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  dispatch(formatPortfolio(portfolioList, pieChartData))
  dispatch(updatePortfolioTotal(portfolioTotalWithCommas))
}

// UPDATE PORTFOLIO TOTAL

export const updatePortfolioTotal = portfolioTotal => ({
  type: UPDATE_PORTFOLIO_TOTAL,
  payload: portfolioTotal
})

// EDIT PORTFOLIO TOGGLE

export const editPortfolioToggle = () => ({
  type: EDIT_PORTFOLIO_TOGGLE
})

// GET PORTFOLIO DATA

export const getPortfolioRequest = () => ({
  type: GET_PORTFOLIO_REQUEST
})

export const getPortfolioSuccess = portfolioData => ({
  type: GET_PORTFOLIO_SUCCESS,
  payload: portfolioData
})

export const getPortfolioError = error => ({
  type: GET_PORTFOLIO_ERROR,
  payload: error
})

export const getPortfolio = () => async (dispatch, getState) => {
  dispatch(getPortfolioRequest())

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users`, {
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

export const getCryptoListingsRequest = () => ({
  type: GET_CRYPTO_LISTINGS_REQUEST
})

export const getCryptoListingsSuccess = cryptoListings => ({
  type: GET_CRYPTO_LISTINGS_SUCCESS,
  payload: cryptoListings
})

export const getCryptoListingsError = error => ({
  type: GET_CRYPTO_LISTINGS_ERROR,
  payload: error
})

export const getCryptoListings = () => async dispatch => {
  dispatch(getCryptoListingsRequest())

  try {
    // TODO: Handle fetching tokens not included in top 100
    const response = await fetch(`${REACT_APP_API_BASE_URL}/ticker`)
    const data = await response.json()

    dispatch(getCryptoListingsSuccess(data.tickers.data))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getCryptoListingsError(err.toString()))
  }
}

// EDIT PORTFOLIO

export const editPortfolioRequest = () => ({
  type: EDIT_PORTFOLIO_REQUEST
})

export const editPortfolioSuccess = portfolioData => ({
  type: EDIT_PORTFOLIO_SUCCESS,
  payload: portfolioData
})

export const editPortfolioError = error => ({
  type: EDIT_PORTFOLIO_ERROR,
  payload: error
})

export const editPortfolio = updatedPortfolioObj => async (dispatch, getState) => {
  dispatch(editPortfolioRequest())

  // portfolio is edited through local state in
  // EditPortfolio component as an object
  // need to convert back to array to save in DB
  const portfolioKeys = Object.keys(updatedPortfolioObj)
  const updatedPortfolio = portfolioKeys.map(key => updatedPortfolioObj[key])

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users/portfolio`, {
      method: 'PUT',
      body: JSON.stringify(updatedPortfolio),
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
    await normalizeResponseErrors(response)
    const data = await response.json()

    dispatch(editPortfolioSuccess(data.portfolio))
    dispatch(getPriceDataAndFormatPortfolio(data.portfolio))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(editPortfolioError(err.toString()))
  }
}

// GET WATCHLIST

export const getWatchlistRequest = () => ({
  type: GET_WATCHLIST_REQUEST
})

export const getWatchlistSuccess = watchlistData => ({
  type: GET_WATCHLIST_SUCCESS,
  payload: watchlistData
})

export const getWatchlistError = error => ({
  type: GET_WATCHLIST_ERROR,
  payload: error
})

export const formatWatchlist = formattedWatchlist => ({
  type: FORMAT_WATCHLIST,
  payload: formattedWatchlist
})

export const getWatchlist = () => async (dispatch, getState) => {
  dispatch(getWatchlistRequest())

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    await await normalizeResponseErrors(response)
    const data = await response.json()

    const watchlistGrid = data.watchlist.map((item, index) => <WatchlistWidget currencyId={item.id} key={index}/>)

    dispatch(getWatchlistSuccess(data.watchlist))
    dispatch(formatWatchlist(watchlistGrid))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(getWatchlistError(err.toString()))
  }
}

// EDIT WATCHLIST TOGGLE

export const editWatchlistToggle = () => ({
  type: EDIT_WATCHLIST_TOGGLE
})

// EDIT WATCHLIST

export const editWatchlistRequest = () => ({
  type: EDIT_WATCHLIST_REQUEST
})

export const editWatchlistSuccess = watchlistData => ({
  type: EDIT_WATCHLIST_SUCCESS,
  payload: watchlistData
})

export const editWatchlistError = error => ({
  type: EDIT_WATCHLIST_ERROR,
  payload: error
})

export const editWatchlist = updatedWatchlist => async (dispatch, getState) => {
  dispatch(editWatchlistRequest())

  try {
    const authToken = getState().auth.authToken
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users/watchlist`, {
      method: 'PUT',
      body: JSON.stringify(updatedWatchlist),
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
    await normalizeResponseErrors(response)
    const data = await response.json()

    const watchlistGrid = data.watchlist.map((item, index) => <WatchlistWidget currencyId={item.id} key={index}/>)

    dispatch(editWatchlistSuccess(data.watchlist))
    dispatch(formatWatchlist(watchlistGrid))

  } catch (err) {
    console.log('error message: ', err)
    dispatch(editWatchlistError(err.toString()))
  }
}
