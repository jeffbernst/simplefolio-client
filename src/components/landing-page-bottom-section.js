import React from 'react'
import './landing-page-bottom-section.css'

export function LandingPageBottomSection () {
  return (
    <div className="background-bottom">
      <div className="container">
        <div className="landing-copy">
          Simplefolio also has a watchlist feature with only the
          important info you need to know.
        </div>
        <div className="watchlist-title">Watchlist</div>
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
        <div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary=""
             data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
             data-statsticker="false"></div>
      </div>
    </div>
  )
}