import React from 'react'
import './landing-page-middle-section.css'
import { PortfolioEntry } from './portfolio-entry'
import { PieChart } from './pie-chart'
import { colors } from '../colors'

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
    cryptoPriceData: {}
  }

  async componentDidMount () {
    const cryptoPriceData = await this.getPriceData()
    this.setState({
      cryptoPriceData
    })
  }

  async getPriceData () {
    const response = await fetch('https://api.coinmarketcap.com/v2/ticker/')
    return response.json()
  }

  render () {
    console.log(this.state.cryptoPriceData)
    return (
      <div className="background-middle">
        <div className="container">
          <div className="landing-copy">
            It comes with a super simple portfolio feature. Just pick a cryptocurrency
            and enter how much you own to track your balance.
          </div>
          <div className="portfolio-title">Portfolio</div>
          <div className="portfolio-sample">
            <div className="portfolio-holdings">
              <PortfolioEntry
                name='Bitcoin'
                balance='250'
                percentage='25'
                quantity='0.1'
                symbol='BTC'
                price='8000'
                percentChange='3'
                // color={colors.purple}
              />
            </div>
            <div className="purple-pie-chart">
              <PieChart/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}