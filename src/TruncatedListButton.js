import React from 'react';
import TruncatedListItem from './TruncatedListItem'
import styles from './TruncatedList.module.css';

/* eslint-disable jsx-a11y/anchor-is-valid */

const TruncatedListButton = ({ items }) => (
  <div className={styles.list}>
    <a className={styles.button} href='#'>&hellip;</a>
    <ul>
      {items.map(({ id, href, text }) => (
        <TruncatedListItem
          key={id}
          id={id}
          href={href}
          text={text}
        />
      ))}
    </ul>
  </div>
)

export default TruncatedListButton;
