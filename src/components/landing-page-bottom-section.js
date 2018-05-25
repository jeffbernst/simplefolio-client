import React from 'react'
import {WatchlistWidget} from './watchlist-widget'
import './landing-page-bottom-section.css'

export function LandingPageBottomSection () {
  const sampleWatchlist = [1, 1027, 1230, 1765, 1376, 1839]
  const watchlistGrid = sampleWatchlist.map(item => <WatchlistWidget currencyId={item}/>)

  return (
    <div className="background-bottom">
      <div className="container">
        <div className="landing-copy">
          Simplefolio also has a watchlist feature to track the coins you're interested in.
        </div>
        <div className="watchlist-title">Watchlist</div>
        <div className="watchlist-grid">
          {watchlistGrid}
        </div>
      </div>
    </div>
  )
}