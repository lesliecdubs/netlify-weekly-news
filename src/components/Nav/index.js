//  ==========================================================================
//
//  Nav
//
//  ==========================================================================
import React from 'react'
import {kebabCase} from 'lodash'
import {navRoutes} from '../../helpers'
import {Link} from '..'

const Nav = () => (
  <nav aria-label="Main navigation">
    <ul>
      {navRoutes.map(link =>
        <li key={kebabCase(link.name)}>
          <Link
            exact to={link.path}
            activeClassName="is-active"
          >
            {link.name}
          </Link>
        </li>
      )}
    </ul>
  </nav>
)

export default Nav
