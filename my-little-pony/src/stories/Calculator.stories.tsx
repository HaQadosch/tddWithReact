import React from 'react';

import { storiesOf } from '@storybook/react';
import { Calculator } from '../components/Calculator';
import '../index.css';
import '../components/Calculator.css';

storiesOf('Calculator', module).add('default', () => <Calculator />);
