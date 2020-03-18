import React from 'react'
import styles from './Sidebar.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Sidebar = () => (
  <div className={styles.root}>
    <a href="#">Homepage</a>
    <a href="#">Design</a>
    <a href="#">Web Design</a>
    <a href="#">Video &amp; Audio</a>
    <a href="#">Marketing</a>
    <a href="#">Inside Envato</a>
  </div>
)

export default Sidebar
