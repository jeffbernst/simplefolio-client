import React from 'react'
import { RadialChart } from 'react-vis'
import './pie-chart.css'

export function PieChart (props) {
  // return multiple pie charts and show
  // proper size based on window size
  // with CSS
  return (
    <div>
      <RadialChart
        data={props.pieChartData}
        className={'pie-chart pie-chart-small'}
        radius={150}
        getAngle={d => d.theta}
        width={300}
        height={300}>
      </RadialChart>
      <RadialChart
        data={props.pieChartData}
        className={'pie-chart-large'}
        radius={200}
        getAngle={d => d.theta}
        width={400}
        height={400}>
      </RadialChart>
    </div>
  )
}