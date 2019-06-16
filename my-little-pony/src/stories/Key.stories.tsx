import React from 'react';

import { storiesOf } from '@storybook/react';
import { Key } from '../components/Key';
import '../components/Key.css';
import '../index.css';

storiesOf('Key', module).add('default', () => <Key action={() => {}} type='numbers' value='1' />);
