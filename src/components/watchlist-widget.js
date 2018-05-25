import React from 'react'
import './watchlist-widget.css'

export function WatchlistWidget (props) {
  return (
    <div className="coinmarketcap-currency-widget" data-currencyid={props.currencyId} data-base="USD" data-secondary=""
         data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
         data-statsticker="false">
    </div>
  )
}