import React, { useState, useCallback, useEffect } from 'react';
import { useResizeObserver } from '@envato/react-breakpoints';
import Item from './Item'
import Button from './Button'
import styles from './TruncatedList.module.css';

const TruncatedList = ({ items = [] }) => {
  const [itemWidths, setItemWidths] = useState({});
  const [cutoffIndex, setCutoffIndex] = useState(0);
  const [ref, observedEntry] = useResizeObserver({ box: 'content-box' });

  const handleChildResize = (id, width) => {
    if (width > 0) {
      const widths = { ...itemWidths, [id]: width };
      setItemWidths(widths);
    }
  };

  const calculateCutoffIndex = useCallback(() => {
    const containerWidth = Math.floor(observedEntry?.contentBoxSize[0].inlineSize) || 0;
    let sumWidth = 60; // Start off at 60 (size + margin of ellipses button)
    let index = 0;

    if (containerWidth) {
      for (const { id } of items) {
        sumWidth += itemWidths[id];
        if (sumWidth > containerWidth) break;
        ++index;
      }
    }

    return index;
  }, [items, itemWidths, observedEntry]);

  useEffect(() => {
    const widths = {};

    items.forEach(({ id }) => {
      widths[id] = 0;
    });

    setItemWidths(widths);
    setCutoffIndex(0)
  }, [items]);

  useEffect(() => {
    const index = calculateCutoffIndex();
    setCutoffIndex(index);
  }, [itemWidths, observedEntry, calculateCutoffIndex]);

  const visibleItems = items.slice(0, cutoffIndex);
  const hiddenItems = items.slice(cutoffIndex);

  return (
    <div ref={ref} className={styles.root}>
      {visibleItems.map(({ id, href, text }) => (
        <Item
          key={id}
          id={id}
          href={href}
          text={text}
          onResize={handleChildResize}
        />
      ))}
      <Button items={hiddenItems} />
    </div>
  );
};

export default TruncatedList;
