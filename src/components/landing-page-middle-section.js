import React from 'react'
import './landing-page-middle-section.css'
import { PortfolioEntry } from './portfolio-entry'
import {PieChart} from './pie-chart'

export function LandingPageMiddleSection () {
  return (
    <div className="background-middle">
      <div className="container">
        <div className="landing-copy">
          It comes with a super simple portfolio feature. Just pick a cryptocurrency
          and enter how much you own to track your balance.
        </div>
        <div className="portfolio-title">Portfolio</div>
        <div className="portfolio-sample">
          <div className="portfolio-holdings">
            <PortfolioEntry
              name='Bitcoin'
              balance='250'
              percentage='25'
              quantity='0.1'
              symbol='BTC'
              price='8000'
              percentChange='3'
              color='purple'
            />
            <PortfolioEntry
              name='Bitcoin'
              balance='250'
              percentage='25'
              quantity='0.1'
              symbol='BTC'
              price='8000'
              percentChange='3'
              color='blue'
            />
            <PortfolioEntry
              name='Bitcoin'
              balance='250'
              percentage='25'
              quantity='0.1'
              symbol='BTC'
              price='8000'
              percentChange='3'
              color='orange'
            />
            <PortfolioEntry
              name='Bitcoin'
              balance='250'
              percentage='25'
              quantity='0.1'
              symbol='BTC'
              price='8000'
              percentChange='3'
              color='pink'
            />
          </div>
          <div className="purple-pie-chart">
           <PieChart />
          </div>
        </div>
      </div>
    </div>
  )
}