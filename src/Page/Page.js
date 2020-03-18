import React from 'react'
import { useResizeObserver } from '@envato/react-breakpoints'
import styles from './Page.module.css'

const Page = ({ width = '100%', padding = '10px', children }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'border-box' })

  const paddingLeft = padding
  const paddingRight = padding
  const px = observedEntry?.borderBoxSize[0].inlineSize

  return (
    <div
      ref={ref}
      className={styles.root}
      style={{ width }}
    >
      <div className={styles.width}>{px}px</div>
      <div
        className={styles.wrap}
        style={{
          paddingLeft,
          paddingRight
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Page
