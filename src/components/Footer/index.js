//  ==========================================================================
//
//  Footer
//
//  ==========================================================================
import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import {footerRoutes} from '../../helpers'
import {Link} from '..'

import './styles.scss'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <nav>
        <ul>
          {footerRoutes.map(link =>
            <li key={kebabCase(link.name)}>
              <Link to={link.path}>
                {link.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <p className="footer__copyright">
        <small>
          &copy;{(new Date().getFullYear())} Netlify
        </small>
      </p>
    </div>
  </footer>
)

export default Footer
