import React from 'react';

import { storiesOf } from '@storybook/react';
import { RedPony } from '../components/RedPony';
import '../components/RedPony.css';
import '../index.css';

storiesOf('RedPony', module).add('default', () => <RedPony />);
