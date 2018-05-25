import React from 'react'
import { RadialChart } from 'react-vis'
import './pie-chart.css'

export function PieChart (props) {
  return (
    <RadialChart
      data={props.pieChartData}
      className={'pie-chart'}
      radius={200}
      getAngle={d => d.theta}
      width={400}
      height={400}>
    </RadialChart>
  )
}