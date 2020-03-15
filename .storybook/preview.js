import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Provider } from '../src/Provider';
import './reset.css'

addDecorator(storyFn => <Provider>{storyFn()}</Provider>);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    theme: themes.dark
  },
});
