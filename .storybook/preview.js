import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Provider } from '../src/Provider';
import './reset.css'

addDecorator(storyFn => <Provider>{storyFn()}</Provider>);

addParameters({
  options: {
    theme: themes.dark
  }
});
