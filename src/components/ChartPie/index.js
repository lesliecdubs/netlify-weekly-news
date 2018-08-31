//  ==========================================================================
//
//  Chart Pie
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AmCharts from '@amcharts/amcharts3-react'

export default class ChartPie extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    AmCharts.makeChart('chart-pie', {
      "type": "pie",
      "theme": "light",
      "alpha": 0.7,
      "dataProvider": this.props.data,
      "valueField": "deploys",
      "titleField": "site",
      "colorField": "color",
      "startDuration": 0,
      "innerRadius": 40,
      "pullOutRadius": 20,
      "marginTop": 30,
      "hideCredits": true,
      "responsive": {
        "enabled": true
      },
      "export": {
        "enabled": true
      }
    })
  }

  render() {
    return (
      <div
        id="chart-pie"
        style={{ width: "100%", height: "300px" }}
      >
      </div>
    )
  }
}
