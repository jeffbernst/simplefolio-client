import React from 'react'
import { RadialChart } from 'react-vis'
import './pie-chart.css'

export function PieChart (props) {
  return (
    <RadialChart
      className={'pie-chart'}
      radius={200}
      getAngle={d => d.theta}
      data={props.pieChartData}
      width={400}
      height={400}>
    </RadialChart>
  )
}