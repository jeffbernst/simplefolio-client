import React from 'react'
import './portfolio-entry.css'

export function PortfolioEntry (props) {
  return (
    <div className="portfolio-entry">
      <div className="portfolio-entry-top-line">
        <div className="crypto-name">${props.name}</div>
        <div className="crypto-balance">${props.balance} ({props.percentage}%)</div>
      </div>
      <div className="portfolio-entry-bottom-line">
        <div className="crypto-quantity">{props.quantity} {props.symbol}</div>
        <div className="crypto-price">${props.price} (${props.percentChange} %)</div>
      </div>
    </div>
  )
}