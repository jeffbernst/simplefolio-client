import React from 'react'
import './landing-page-middle-section.css'
import { PieChart } from './pie-chart'
import { getPriceDataAndFormatPortfolio, formatPortfolioAndPieChart } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const samplePortfolio = [
  {id: 1, quantity: 0.1},
  {id: 1027, quantity: 1},
  {id: 5426, quantity: 10},
  {id: 2011, quantity: 50}
]

class LandingPageMiddleSection extends React.Component {
  componentDidMount () {
    this.props.getPriceDataAndFormatPortfolio(samplePortfolio)
  }

  render () {
    return (
      <div className="background-middle">
        <div className="container">
          <div className="landing-copy">
            Just pick a cryptocurrency and enter how much you own to track your balance.
          </div>
          <div className="portfolio-title">Portfolio</div>
          <div className="portfolio">
            <div className="portfolio-list">
              {this.props.formattedPortfolioList}
              <div className="portfolio-total">
                Total: ${this.props.portfolioTotal}
              </div>
            </div>
            <div className="pie-chart">
              {this.props.pieChartData && <PieChart pieChartData={this.props.pieChartData}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.index.loading,
    cryptoPriceData: state.index.cryptoPriceData,
    formattedPortfolioList: state.index.formattedPortfolioList,
    pieChartData: state.index.pieChartData,
    portfolioTotal: state.index.portfolioTotal
  }
}

const mapDispatchToProps = {
  getPriceDataAndFormatPortfolio,
  formatPortfolioAndPieChart
}

export const ConnectedLandingPageMiddleSection = withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPageMiddleSection))