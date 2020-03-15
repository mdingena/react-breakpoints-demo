import React from 'react';
import { useResizeObserver } from '@envato/react-breakpoints';
import styles from './Resizer.module.css';

const getBoxSizes = resizeObserverEntry => {
  if (!resizeObserverEntry) return;

  const keys = [
    'borderBoxSize',
    'contentBoxSize',
    'devicePixelContentBoxSize'
  ];

  const contentRect = {
    name: 'contentRect',
    width: resizeObserverEntry.contentRect.width,
    height: resizeObserverEntry.contentRect.height
  };

  const boxes = keys.map(key => resizeObserverEntry[key] && ({
    name: key,
    width: resizeObserverEntry[key][0].inlineSize,
    height: resizeObserverEntry[key][0].blockSize
  }));

  return [contentRect, ...boxes.filter(box => box)];
};

const Resizer = ({ box }) => {
  const [ref, observedEntry] = useResizeObserver({ box });

  const boxSizes = getBoxSizes(observedEntry);

  return (
    <div className={styles.root}>
      <textarea
        ref={ref}
        className={styles.resizer}
        readOnly
        value={boxSizes && boxSizes.map(({ name, width, height }) => `${name}\n${width}×${height}`).join('\n\n')}
      />
    </div>
  );
};

export default Resizer;
