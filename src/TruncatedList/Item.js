import React, { useEffect } from 'react'
import { useResizeObserver } from '@envato/react-breakpoints'
import styles from './TruncatedList.module.css'

const Item = ({ href, text, onResize }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'border-box' })

  useEffect(() => {
    const width = Math.ceil(observedEntry?.borderBoxSize[0].inlineSize) || 0
    onResize(width)
  }, [observedEntry])

  return (
    <div className={styles.link}>
      <a ref={ref} href={href}>{text}</a>
    </div>
  )
}

export default Item
