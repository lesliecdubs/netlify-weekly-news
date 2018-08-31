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

  render() {
    return (
      <AmCharts.React
        style={{ width: "100%", height: "300px" }}
        options={this._config}
      />
    )
  }

  _config = {
    "type": "pie",
    "theme": "light",
    "dataProvider": this.props.data,
    "valueField": "deploys",
    "titleField": "site",
    "startDuration": 0,
    "innerRadius": 40,
    "pullOutRadius": 20,
    "marginTop": 30,
    "export": {
      "enabled": true
    }
  }
}
