import React from 'react'
import { formatPortfolioAndPieChart, getPriceDataAndFormatPortfolio, editPortfolioToggle } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PieChart } from './pie-chart'

class Portfolio extends React.Component {
  editPortfolioToggle () {
    this.props.editPortfolioToggle()
  }

  render () {
    const renderedPortfolio = (
      <div className='portfolio'>
        <div className="portfolio-list">
          {this.props.formattedPortfolioList}
        </div>
        <div className="pie-chart">
          {this.props.pieChartData && <PieChart pieChartData={this.props.pieChartData}/>}
        </div>
      </div>
    )

    const clickEditPortfolioMessage = (
      <div className="portfolio">
        <div>
          Click the edit button above to add to your portfolio
          <span role='img' aria-label='pointing up emoji'>&#128070;</span>
        </div>
      </div>
    )

    let portfolioSection
    if (this.props.portfolioData)
      portfolioSection =
        this.props.portfolioData.length === 0
          ? clickEditPortfolioMessage
          : renderedPortfolio

    return (
      <div>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out" onClick={() => this.editPortfolioToggle()}>Edit</button>
        </div>
        {portfolioSection}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.index.loading,
    portfolioData: state.index.portfolioData,
    cryptoPriceData: state.index.cryptoPriceData,
    formattedPortfolioList: state.index.formattedPortfolioList,
    pieChartData: state.index.pieChartData,
  }
}

const mapDispatchToProps = {
  getPriceDataAndFormatPortfolio,
  formatPortfolioAndPieChart,
  editPortfolioToggle
}

export const ConnectedPortfolio = withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio))