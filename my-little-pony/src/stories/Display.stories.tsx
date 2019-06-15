import React from 'react';

import { storiesOf } from '@storybook/react';
import { Display } from '../components/Display';
import '../index.css';

storiesOf('Display', module).add('default', () => <Display />);
