//  ==========================================================================
//
//  Header
//
//  ==========================================================================
import React from 'react'
import Link from 'gatsby-link'

import {Nav} from '..'
import {Logomark} from '../../assets/images'

import './styles.scss'

const Header = ({ userName }) => (
  <header className="site-header">
    <div className="container">
      <div className="site-info">
        <Link to="/">
          <Logomark aria-hidden="true" />
        </Link>
        <p className="site-info__username">
          {userName}
        </p>
      </div>
      <Nav />
    </div>
  </header>
)

export default Header
