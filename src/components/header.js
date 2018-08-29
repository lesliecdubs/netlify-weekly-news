import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
