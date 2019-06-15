import React from 'react';

import { storiesOf } from '@storybook/react';
import { Keypad } from '../components/Keypad';
import '../components/Keypad.css';
import '../index.css';

storiesOf('Keypad', module).add('default', () => <Keypad />);
