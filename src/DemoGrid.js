import React from 'react'
import { Observe } from '@envato/react-breakpoints'
import styles from './DemoGrid.module.css'

const DemoGrid = ({ children }) => (
  <Observe
    box='content-box'
    breakpoints={{
      box: 'content-box',
      widths: {
        0: 1,
        540: 2,
        1000: 3
      }
    }}
    render={({ observedElementProps, widthMatch: columns }) => (
      <div
        {...observedElementProps}
        className={styles.root}
        style={{ '--columns': columns }}
      >
        {children}
      </div>
    )}
  />
)

export default DemoGrid
