import React from 'react'
import ConnectedUserNav from './user-nav'
import { connect } from 'react-redux'
import { getPriceData } from '../actions'
import { withRouter } from 'react-router-dom'

class PortfolioPage extends React.Component {


  render() {
    return (
      <div>
        <ConnectedUserNav/>
        portfolio
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.index.loading,
    cryptoPriceData: state.index.cryptoPriceData
  }
}

const mapDispatchToProps = {
  getPriceData
}

export const ConnectedPortfolioPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioPage))