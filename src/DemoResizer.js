import React from 'react'
import { useResizeObserver, Observe } from '@envato/react-breakpoints'
import styles from './DemoResizer.module.css'

const DemoResizer = ({ init, children }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'content-box' })

  const px = observedEntry?.borderBoxSize[0].inlineSize

  return (
    <div className={styles.root}>
      <div>
        <div
          ref={ref}
          className={styles.width}
          style={{ width: init }}
        >
          {px?.toFixed(0)}px
        </div>
        <div className={styles.bar}></div>
        <div style={{ width: px }}>
          <Observe
            box='content-box'
            render={({ observedElementProps }) => (
              <div
                {...observedElementProps}
                className={styles.container}
                
              >
                {children}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoResizer
