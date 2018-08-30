//  ==========================================================================
//
//  Page Layout
//
//  ==========================================================================
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {
  Header,
  Footer
} from '../components'

import '../stylesheets/global.scss'

export default class RawApp extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const {title, description} = this.props.data.site.siteMetadata

    return (
      <div className="page">
        <div className="page__contents">
          <Helmet
            title={title}
            meta={[{
              name: 'description',
              content: description
            }]}
          />
          <Header userName="lesliecw" />
          <main className="main container">
            <div className="main__wrapper">
              {this.props.children()}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
