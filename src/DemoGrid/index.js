import React from 'react'
import { useResizeObserver, Observe } from '@envato/react-breakpoints'
import styles from './index.module.css'

const DemoGrid = ({ children }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'content-box' })

  const px = observedEntry?.borderBoxSize[0].inlineSize

  return (
    <div className={styles.root}>
      <div className={styles.resizer}>
        <div ref={ref} className={styles.width}>{px?.toFixed(0)}px</div>
        <Observe
          box='content-box'
          breakpoints={{
            box: 'content-box',
            widths: {
              0: styles.one,
              400: styles.two,
              600: styles.three
            }
          }}
          render={({ observedElementProps, widthMatch }) => (
              <div
                {...observedElementProps}
                className={`${styles.grid} ${widthMatch}`}
              >
                foo
                {children}
              </div>
          )}
        />
      </div>
    </div>
  )
}

export default DemoGrid
