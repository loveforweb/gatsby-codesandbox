import React from 'react'
import { Link } from 'gatsby'
import styles from '../scss/nav.module.scss'

export default () => (
  <nav className={styles.nav}>
    <Link to="/">Home</Link>
    <Link to="/profile/">Profile</Link>
  </nav>
)
