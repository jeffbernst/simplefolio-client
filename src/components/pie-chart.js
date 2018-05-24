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

    return (
      <RadialChart
        className={'pie-chart'}
        // innerRadius={100}
        colorRange={[purple, pink, blue, orange]}
        radius={200}
        getAngle={d => d.theta}
        data={[
          {theta: 2, label: 'BTC', className: 'pie-slice'},
          {theta: 6, className: 'pie-slice'},
          {theta: 2, className: 'pie-slice'},
          {theta: 3, className: 'pie-slice'},
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={() => this.setState({value: false})}
        width={400}
        height={400}>
        {value && <Hint value={value}/>}
      </RadialChart>
    )
  }
}