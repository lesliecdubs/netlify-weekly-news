//  ==========================================================================
//
//  Home Page
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {normalizeDate} from '../helpers'
import {flatten, groupBy, startCase} from 'lodash'

import {
  ChartLine,
  ChartPie,
  Link,
  Section
} from '../components'

export default class IndexPage extends Component {
  static propTypes = {
    siteTitle: PropTypes.string
  }

  constructor(props) {
    super(props)
    this._siteData = props.data.allSitedataJson.edges.map(normalizeDate)

    // format data from API as required for line chart
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

    const siteDeploys = flatten(this._siteData.map(dateGroup =>
      dateGroup.data.map(siteInfo => (
        {
          "site": siteInfo.siteName,
          "deploys": siteInfo.deploys
        })
      )
    ))

    const combineSites = data => {
      let cominbator = {}

      data.forEach(el => {
        cominbator[el.site] = (cominbator[el.site])
          ? cominbator[el.site] += +el.deploys
          : +el.deploys
        }
      )

      return Object.keys(cominbator).map(el => {
        return {
          site: el,
          deploys: cominbator[el]
        }
      })
    }

    this._deploys = combineSites(siteDeploys)
    console.log(this._deploys);
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
          <Section title="Most Active Sites">
            <ChartPie data={this._deploys} />
          </Section>

          <Section title="Noteworthy Events">
            <p>news feed, half width</p>
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
          }
        }
      }
    }
  }
`;
