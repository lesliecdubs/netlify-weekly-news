//  ==========================================================================
//
//  Section
//
//  ==========================================================================
import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Section = ({ title, description, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {description && <p className="section__description">{description}</p>}
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Section
