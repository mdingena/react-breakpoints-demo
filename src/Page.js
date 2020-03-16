import React from 'react'
import styles from './Page.module.css'

const Page = ({ width = '100%', children }) => (
  <div className={styles.root} style={{ width }}>
    {children}
  </div>
)

export default Page
