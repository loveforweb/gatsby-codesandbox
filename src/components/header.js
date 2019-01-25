import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from './nav'
import styles from '../scss/header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
