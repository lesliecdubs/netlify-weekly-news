//  ==========================================================================
//
//  Header
//
//  ==========================================================================
import React from 'react'
import PropTypes from 'prop-types'

import {
  Link,
  Nav
} from '..'

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

Header.propTypes = {
  userName: PropTypes.string.isRequired
}

export default Header
