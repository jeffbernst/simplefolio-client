import React, { Component } from 'react'
import { RadialChart, Hint } from 'react-vis'
import './pie-chart.css'

export class PieChart extends Component {
  state = {
    value: false
  }

  render () {
    const {value} = this.state

    const purple = '#A084D1'
    const pink = '#F934AA'
    const blue = '#5EA3E7'
    const orange = '#FFAA33'
    const darkGray = '#4A4A4A'

    const pieSliceHover =
      <Hint value={value}>
        <div className="pie-slice-hover" style={{background: 'white'}}>
          <div className="pie-slice-hover-text">{value.symbol} ({value.percentage}%)</div>
        </div>
      </Hint>

    return (
      <RadialChart
        className={'pie-chart'}
        // colorRange={[purple, pink, blue, orange]}
        radius={200}
        getAngle={d => d.theta}
        data={[
          {theta: 2, symbol: 'BTC', percentage: 25, style: {fill: blue, stroke: darkGray, strokeWidth: 3}, className: 'pie-slice'},
          {theta: 4, symbol: 'BTC', percentage: 25, style: {fill: pink, stroke: darkGray, strokeWidth: 3}, className: 'pie-slice'},
          {theta: 2, symbol: 'BTC', percentage: 25, style: {fill: purple, stroke: darkGray, strokeWidth: 3}, className: 'pie-slice'},
          {theta: 2, symbol: 'BTC', percentage: 25, style: {fill: orange, stroke: darkGray, strokeWidth: 3}, className: 'pie-slice'},
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={() => this.setState({value: false})}
        width={400}
        height={400}>
        {value && pieSliceHover}
      </RadialChart>
    )
  }
}