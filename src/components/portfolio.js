import React from 'react'
import { formatPortfolioAndPieChart, getPriceDataAndFormatPortfolio, editPortfolioToggle } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {PieChart} from './pie-chart'

class Portfolio extends React.Component {
  editPortfolioToggle () {
    this.props.editPortfolioToggle()
  }

  render () {
    return (
      <div>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out" onClick={() => this.editPortfolioToggle()}>Edit</button>
        </div>
        <div className="portfolio">
          <div className="portfolio-list">
            {this.props.formattedPortfolioList}
          </div>
          <div className="pie-chart">
            {this.props.pieChartData && <PieChart pieChartData={this.props.pieChartData}/>}
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
  formatPortfolioAndPieChart,
  editPortfolioToggle
}

export const ConnectedPortfolio = withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio))