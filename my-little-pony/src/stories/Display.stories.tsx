import React from 'react';

import { storiesOf } from '@storybook/react';
import { Display } from '../components/Display';
import '../components/Display.css';
import '../index.css';

storiesOf('Display', module).add('default', () => <Display displayValue='0' />);
