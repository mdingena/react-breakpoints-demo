import React from 'react'
import { useResizeObserver } from '@envato/react-breakpoints'
import styles from './Page.module.css'

const Page = ({ width = '100%', children }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'border-box' })

  const px = observedEntry?.borderBoxSize[0].inlineSize

  return (
    <div
      ref={ref}
      className={styles.root}
      style={{ width }}
    >
      <div className={styles.width}>{px}px</div>
      <div className={styles.wrap}>
        {children}
      </div>
    </div>
  )
}

export default Page
