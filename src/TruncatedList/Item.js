import React, { useEffect } from 'react';
import { useResizeObserver } from '@envato/react-breakpoints';
import styles from './TruncatedList.module.css';

const TruncatedListItem = ({ id, href, text, onResize = () => {} }) => {
  const [ref, observedEntry] = useResizeObserver({ box: 'border-box' });

  useEffect(() => {
      const width = Math.ceil(observedEntry?.borderBoxSize[0].inlineSize) || 0;
      onResize(id, width);
  }, [id, onResize, observedEntry]);

  return (
    <div ref={ref} className={styles.link}>
      <a href={href}>{text}</a>
    </div>
  );
};

export default TruncatedListItem;
