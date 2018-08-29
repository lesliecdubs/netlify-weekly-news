import React, {Component} from 'react'
import {normalizeSiteData} from '../helpers'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this._siteData = props.data.allTrafficJson.edges.map(normalizeSiteData)
  }

  render() {
    return (
      <div>
        {/* <h1>{siteName}</h1> */}
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
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
