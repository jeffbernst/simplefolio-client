import React from 'react'
import './landing-page-bottom-section.css'

export function LandingPageBottomSection () {
  return (
    <div className="background-bottom">
      <div className="container">
        <div className="landing-copy">
          Simplefolio also has a watchlist feature to track the coins you're interested in.
        </div>
        <div className="watchlist-title">Watchlist</div>
        <div className="watchlist-grid">
          <div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
          <div className="coinmarketcap-currency-widget" data-currencyid="1027" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
          <div className="coinmarketcap-currency-widget" data-currencyid="1230" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
          <div className="coinmarketcap-currency-widget" data-currencyid="1765" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
          <div className="coinmarketcap-currency-widget" data-currencyid="1376" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
          <div className="coinmarketcap-currency-widget" data-currencyid="1839" data-base="USD" data-secondary=""
               data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD"
               data-statsticker="false"></div>
        </div>
      </div>
    </div>
  )
}