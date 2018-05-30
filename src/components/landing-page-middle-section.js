import React from 'react'
import './landing-page-middle-section.css'
import { PortfolioEntry } from './portfolio-entry'
import { PieChart } from './pie-chart'
import { colors, darkGray } from '../colors'
import { getPriceData } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const samplePortfolio = [
  {id: 1, quantity: 0.1},
  {id: 1027, quantity: 1},
  {id: 1230, quantity: 150},
  {id: 1697, quantity: 500}
]

class LandingPageMiddleSection extends React.Component {
  state = {
    portfolio: samplePortfolio
  }

  componentDidMount () {
    this.props.getPriceData()
  }

  render () {
    let portfolioList
    let pieChartData = []
    if (this.props.cryptoPriceData)
      portfolioList = samplePortfolio.map((item, index) => {
        // iterate through portfolio holdings and match up with current price data
        const itemData = this.props.cryptoPriceData[item.id]
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

function mapStateToProps (state) {
  return {
    loading: state.loading,
    cryptoPriceData: state.cryptoPriceData
  }
}

const mapDispatchToProps = {
  getPriceData
}

export const ConnectedLandingPageMiddleSection = withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPageMiddleSection))