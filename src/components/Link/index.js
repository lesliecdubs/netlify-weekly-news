//  ==========================================================================
//
//  Link
//
//  ==========================================================================
import React from 'react'
import GatsbyLink from 'gatsby-link'

import './styles.scss'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to); // assumes all internal links start with a slash

  // use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link
