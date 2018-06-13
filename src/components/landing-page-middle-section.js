import React from 'react'
import './landing-page-middle-section.css'
import { PieChart } from './pie-chart'
import { getPriceDataAndFormatPortfolio, formatPortfolioAndPieChart } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const samplePortfolio = [
  {id: 1, quantity: 0.1},
  {id: 1027, quantity: 1},
  {id: 1230, quantity: 150},
  {id: 1697, quantity: 500}
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
            It comes with a super simple portfolio feature. Just pick a cryptocurrency
            and enter how much you own to track your balance.
          </div>
          <div className="portfolio-title">Portfolio</div>
          <div className="portfolio">
            <div className="portfolio-list">
              {this.props.formattedPortfolioList}
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
    pieChartData: state.index.pieChartData
  }
}

const mapDispatchToProps = {
  getPriceDataAndFormatPortfolio,
  formatPortfolioAndPieChart
}

export const ConnectedLandingPageMiddleSection = withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPageMiddleSection))