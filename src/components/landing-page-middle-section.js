import React from 'react'
import './landing-page-middle-section.css'
import { PortfolioEntry } from './portfolio-entry'

export function LandingPageMiddleSection () {
  // const purplePieChart =
  //   <svg width='404' height='404' viewBox='0 0 404 404' xmlns='http://www.w3.org/2000/svg'>
  //     {/* Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch */}
  //     <g id='Landing-Page' fill='none' fillRule='evenodd'>
  //       <g id='preview' transform='translate(-1032 -1175)' stroke='#4A4A4A' strokeWidth='3'>
  //         <g id='pie-chart-purple' transform='translate(1034 1177)'>
  //           <circle id='Oval' fill='#A084D1' cx='200' cy='200' r='200'/>
  //           <path d='M202.5,187.5 L154.506098,389.5' id='Line-4' strokeLinecap='square'/>
  //           <path d='M199.496815,187.5 L2.5,196.5' id='Line-5' strokeLinecap='square' />
  //           <path d='M370.5,304.5 L45.5044643,76.5' id='Line-6' strokeLinecap='square' />
  //         </g>
  //       </g>
  //     </g>
  //   </svg>

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
            {/*{purplePieChart}*/}
          </div>
        </div>
      </div>
    </div>
  )
}