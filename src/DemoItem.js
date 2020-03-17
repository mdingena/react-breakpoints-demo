import React from 'react'
import { useBreakpoints } from '@envato/react-breakpoints'
import styles from './DemoItem.module.css'

const DemoItem = ({ image, url, title, description }) => {
  const [className] = useBreakpoints({
    widths: {
      0: styles.stack,
      400: styles.row
    }
  })

  return (
    <div className={className}>
      <div className={styles.ratio}>
        <img className={styles.image} src={image} alt='demo image' />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <a href={url}>{title}</a>
        </div>
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
          <div className={styles.icons}>
            <svg><use href='#thumb_up' /></svg>
            <svg><use href='#insert_emoticon' /></svg>
            <svg><use href='#favorite' /></svg>
            <svg><use href='#insert_comment' /></svg>
            <svg><use href='#insert_link' /></svg>
            <svg><use href='#share' /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoItem
