import React from 'react'
import { Observe } from '@envato/react-breakpoints'
import styles from './DemoItem.module.css'

const DemoItem = ({ image, url, title, description }) => (
  <Observe
    box='border-box'
    breakpoints={{
      box: 'border-box',
      widths: {
        0: styles.stack,
        410: styles.row
      }
    }}
    render={({ observedElementProps, widthMatch: className }) => (
      <div className={className} {...observedElementProps}>
        <div className={styles.ratio}>
          <img className={styles.image} src={image} alt='cat' />
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
    )}
  />
)

export default DemoItem
