import React from 'react'
import styles from './TruncatedList.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Button = ({ children }) => (
  <div className={styles.list}>
    <a className={styles.button} href='#'>&hellip;</a>
    <ul>
      {children}
    </ul>
  </div>
)

export default Button
