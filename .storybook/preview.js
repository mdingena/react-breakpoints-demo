import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider } from '../src/Provider';
import './reset.css'

addDecorator(storyFn => <Provider>{storyFn()}</Provider>);
