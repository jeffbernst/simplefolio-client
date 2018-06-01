import React from 'react'
import ConnectedUserNav from './user-nav'
import { connect } from 'react-redux'
import { formatPortfolioAndPieChart, getPriceDataAndFormatPortfolio } from '../actions'
import { withRouter } from 'react-router-dom'
import { PieChart } from './pie-chart'

const samplePortfolio = [
  {id: 1, quantity: 0.1},
  {id: 1230, quantity: 150}
]

class PortfolioPage extends React.Component {
  componentDidMount () {
    this.props.getPriceDataAndFormatPortfolio(samplePortfolio)
  }

  render () {
    return (
      <div className='container'>
        <ConnectedUserNav/>
        <div className="portfolio-title">Portfolio</div>
        <div className="portfolio-sample">
          <div className="portfolio-list">
            {this.props.formattedPortfolioList}
          </div>
          <div className="pie-chart">
            {/*{this.props.pieChart && <PieChart pieChartData={this.props.pieChartData}/>}*/}
            <PieChart pieChartData={this.props.pieChartData}/>
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