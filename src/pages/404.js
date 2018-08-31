//  ==========================================================================
//
//  404
//
//  ==========================================================================
import React from 'react'
import {Link} from '../components'

const NotFoundPage = () => (
  <div className="main__wrapper">
    <h1>Page not found</h1>
    <p className="lead">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <p>
      <Link
        to="/"
        className="action-link"
      >
        Head back to the dashboard
      </Link>
    </p>
  </div>
)

export default NotFoundPage
