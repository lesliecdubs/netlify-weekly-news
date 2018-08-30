//  ==========================================================================
//
//  Home Page
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {normalizeSiteData} from '../helpers'

export default class IndexPage extends Component {
  static propTypes = {
    siteTitle: PropTypes.string
  }

  constructor(props) {
    super(props)
    this._siteData = props.data.allTrafficJson.edges.map(normalizeSiteData)
  }

  render() {
    return (
      <div>
        <h1 className="badge-wrapper">
          <span>Weekly News</span>
          <sup className="badge badge--beta">beta</sup>
        </h1>
      </div>
    )
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    allTrafficJson {
      edges {
        node {
          siteName
          siteUrl
          pageViews
        }
      }
    }
  }
`;
