//  ==========================================================================
//
//  Line Chart
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AmCharts from '@amcharts/amcharts3-react'
import {colors} from '../../helpers'

export default class ChartLine extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    return (
      <AmCharts.React
        style={{ width: "100%", height: "500px" }}
        options={this._config}
      />
    )
  }

  _config = {
    "hideCredits": true,
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "legend": {
      "equalWidths": false,
      "periodValueText": "total: [[value.sum]]",
      "position": "top",
      "valueAlign": "left",
      "valueWidth": 100
    },
    "dataProvider": this.props.data,
    "valueAxes": [{
      "stackType": "regular",
      "gridAlpha": 0.07,
      "position": "left",
      "title": "Pageviews"
    }],
    "categoryField": "date",
    "categoryAxis": {
      "startOnAxis": true,
      "axisColor": colors.neutral,
      "gridAlpha": 0.07,
      "title": "Date",
      // truncate x axis labels on small screens
      "labelFunction": (label, item, axis) => {
        const chart = axis.chart;
        if ((chart.realWidth <= 700 ) && (label.length > 5 ))
          return label.substr(0, 5)
        return label;
      }
    },
    "graphs": [{
      "balloonText": "<img src='https://alistapart.com/components/assets/img/favicons/apple-touch-icon.png' style='vertical-align:bottom; margin-right: 10px; margin-top: 5px width:32px; height:32px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
      "fillAlphas": 0.6,
      "lineAlpha": 0.4,
      "fillColors": colors.dark,
      "lineColor": colors.dark,
      "title": "A List Apart",
      "valueField": "alistapart"
    }, {
      "balloonText": "<img src='https://www.smashingmagazine.com/images/favicon/favicon.png' style='vertical-align:bottom; margin-right: 10px; margin-top: 5px; width:28px; height:28px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
      "fillAlphas": 0.6,
      "lineAlpha": 0.4,
      "fillColors": colors.popc,
      "lineColor": colors.popc,
      "title": "Smashing Magazine",
      "valueField": "smashingmag"
    }, {
      "balloonText": "<img src='https://syntax.fm/static/favicon.png' style='vertical-align:bottom; margin-right: 10px; margin-top: 5px; width:32px; height:32px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
      "fillAlphas": 0.7,
      "lineAlpha": 0.4,
      "fillColors": colors.alert,
      "lineColor": colors.alert,
      "title": "Syntax FM",
      "valueField": "syntaxfm"
    }],
    "plotAreaBorderAlpha": 0,
    "marginTop": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartScrollbar": {
      "enabled": false
    },
    "chartCursor": {
      "selectWithoutZooming": true,
      "cursorAlpha": 0
    },
    "export": {
      "enabled": true
    },
    "responsive": {
      "enabled": true,
      "rules": [
        {
          "maxWidth": 580,
          "overrides": {
            "valueAxes": {
              "inside": true
            }
          }
        }
      ]
    }
  }
}
