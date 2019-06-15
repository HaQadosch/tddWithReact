import React from 'react';

import { storiesOf } from '@storybook/react';
import { Calculator } from '../components/Calculator';
import '../components/Calculator.css';
import '../index.css';

storiesOf('Calculator', module).add('default', () => <Calculator />);
