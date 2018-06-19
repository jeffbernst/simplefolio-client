import React from 'react'

export class WatchlistWidget extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://files.coinmarketcap.com/static/widget/currency.js')
    document.body.appendChild(script)
  }

  render () {
    return (
      <div>
        <div className="coinmarketcap-currency-widget" data-currencyid={this.props.currencyId} data-base="USD"
             data-secondary=""
             data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
             data-statsticker="false">
        </div>
      </div>
    )
  }
}