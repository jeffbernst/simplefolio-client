import React from 'react'
import ConnectedUserNav from './user-nav'
import { connect } from 'react-redux'
import { formatPortfolioAndPieChart, getPriceDataAndFormatPortfolio } from '../actions'
import { withRouter } from 'react-router-dom'
import { PieChart } from './pie-chart'
import './portfolio-page.css'

const samplePortfolio = [
  {id: 1, quantity: 0.1},
  {id: 1230, quantity: 150}
]

class PortfolioPage extends React.Component {
  componentDidMount () {
    this.props.getPriceDataAndFormatPortfolio(samplePortfolio)
  }

  editPortfolio () {
    console.log('edit portfolio')
  }

  render () {
    return (
      <div className='portfolio-container container'>
        <ConnectedUserNav/>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out" onClick={() => this.editPortfolio()}>Edit</button>
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
  formatPortfolioAndPieChart
}

export const ConnectedPortfolioPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioPage))