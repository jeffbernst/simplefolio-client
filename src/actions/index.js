import {
  GET_PRICE_DATA_REQUEST,
  GET_PRICE_DATA_SUCCES,
  GET_PRICE_DATA_ERROR,
  FORMAT_PORTFOLIO
} from './types'
import React from 'react'
import fetch from 'isomorphic-fetch'
import { colors, darkGray } from '../colors'
import { PortfolioEntry } from '../components/portfolio-entry'

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