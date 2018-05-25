import React from 'react'
import fetch from 'isomorphic-fetch'
import './landing-page-middle-section.css'
import { PortfolioEntry } from './portfolio-entry'
import { PieChart } from './pie-chart'
import { colors, darkGray } from '../colors'

const samplePortfolio = [
  {
    id: 1,
    quantity: 0.1
  },
  {
    id: 1027,
    quantity: 1
  }
  ,
  {
    id: 1230,
    quantity: 150
  },
  {
    id: 1697,
    quantity: 500
  }
]

export class LandingPageMiddleSection extends React.Component {
  state = {
    portfolio: samplePortfolio,
    cryptoPriceData: undefined
  }

  async getPriceData () {
    const response = await fetch('https://api.coinmarketcap.com/v2/ticker/')
    const data = await response.json()
    return data.data
  }

  async componentDidMount () {
    const cryptoPriceData = await this.getPriceData()
    this.setState({
      cryptoPriceData
    })
  }

  render () {
    let portfolioList
    let pieChartData = []
    if (this.state.cryptoPriceData)
      portfolioList = samplePortfolio.map((item, index) => {
        // iterate through portfolio holdings and match up with current price data
        const itemData = this.state.cryptoPriceData[item.id]
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

    return (
      <div className="background-middle">
        <div className="container">
          <div className="landing-copy">
            It comes with a super simple portfolio feature. Just pick a cryptocurrency
            and enter how much you own to track your balance.
          </div>
          <div className="portfolio-title">Portfolio</div>
          <div className="portfolio-sample">
            <div className="portfolio-list">
              {portfolioList}
            </div>
            <div className="pie-chart">
              <PieChart pieChartData={pieChartData}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}