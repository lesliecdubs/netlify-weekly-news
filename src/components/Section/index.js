//  ==========================================================================
//
//  Section
//
//  ==========================================================================
import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section
