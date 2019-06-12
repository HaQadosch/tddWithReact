import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App';
import '../components/App.css';

storiesOf('App', module).add('default', () => <App />);
