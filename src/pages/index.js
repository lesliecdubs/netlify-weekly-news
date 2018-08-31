//  ==========================================================================
//
//  Home Page
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {colors} from '../helpers'

import {
  determineTotalDeploysBySite,
  normalizeDate
} from '../helpers'

import {
  flatten,
  startCase
} from 'lodash'

import {
  ChartLine,
  ChartPie,
  Link,
  NewsFeed,
  Section
} from '../components'

export default class IndexPage extends Component {
  static propTypes = {
    siteTitle: PropTypes.string
  }

  constructor(props) {
    super(props)
    this._siteData = props.data.allSitedataJson.edges.map(normalizeDate)

    // get dates from data for display
    this._latestDayWithData = this._siteData[0].date
    this._oldestDayWithData = this._siteData[this._siteData.length - 1].date

    // pageview data: format data from API as required for line chart
    this._sitePageviews = this._siteData.map(dateGroup =>
      dateGroup.data.map(siteInfo => (
        {
          "date": dateGroup.date,
          [siteInfo.siteName]: siteInfo.pageviews
        })
      ).reduce((total, currentVal) => {
        return Object.assign(total, currentVal)
      }, {})
    )

    // deploy data: format data from API as required for pie chart
    this._siteDeploys = determineTotalDeploysBySite(
      flatten(this._siteData.map(dateGroup =>
        dateGroup.data.map(siteInfo => (
          {
            "site": startCase(siteInfo.siteName),
            "deploys": siteInfo.deploys
          })
        )
      ))
    ).map((siteDeployData, i) => {
      // add appropriate color property to each object
      const o = Object.assign({}, siteDeployData)
      o.color = Object.values(colors)[i]
      return o
    })

    // events: format data from API as needed for news feed
    this._siteEvents = this._siteData.filter((dateGroup) => {
      return dateGroup.data.some((site) => {
        return site.events.length > 0
      })
    })
  }

  render() {
    return (
      <div>
        <div className="main__wrapper">
          <header className="main__header">
            <h1 className="badge-wrapper">
              <span>Weekly Activity News</span>
              <sup className="badge badge--beta">beta</sup>
            </h1>
            <p>{this._oldestDayWithData} - {this._latestDayWithData}</p>
            <p className="lead">Looks like you've had a busy week! Catch up on your stats from the past seven days.</p>
            <p>If there's a specific statistic you'd like to see here, let us know. This dashboard is for you.</p>
            <p>
              <Link
                to="mailto:leslie@cohnwein.com?subject=Netlify%20Weekly%20News%20Idea"
                className="action-link"
              >
                Submit an idea for customizing the dashboard
              </Link>
            </p>
          </header>

          <hr aria-hidden="true" />

          <Section title="Compare Site Traffic">
            <ChartLine data={this._sitePageviews} />
          </Section>
        </div>

        <div className="section-blocks">
          <Section
            title="Activity By Deploys"
            description="Where has all your time gone? See which sites are most active based on the number of deploys over the past week."
          >
            <ChartPie data={this._siteDeploys} />
          </Section>

          <Section
            title="Noteworthy Events"
            description="Catch up on all the Netlify account updates that occurred on your sites this week."
          >
            <NewsFeed data={this._siteEvents} />
          </Section>
        </div>
      </div>
    )
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    allSitedataJson {
      edges {
        node {
          date
          data {
            site
            pageviews
            deploys
            events
          }
        }
      }
    }
  }
`;
