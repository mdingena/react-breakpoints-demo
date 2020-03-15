import React from 'react';
import { Provider as ResizeObserverProvider } from '@envato/react-breakpoints';
import { ResizeObserver } from '@juggle/resize-observer';

export const Provider = ({ children }) => (
  <ResizeObserverProvider ponyfill={ResizeObserver}>
    {children}
  </ResizeObserverProvider>
);
