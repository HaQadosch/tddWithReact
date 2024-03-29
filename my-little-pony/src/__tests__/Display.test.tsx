import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { Display } from '../components/Display';

afterEach(cleanup);

describe('<Display />', () => {
  const displayValue = '1';

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display displayValue={displayValue} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Display />', () => {
    const { getByTestId } = render(<Display displayValue={displayValue} />);
    const display = getByTestId('display');
    expect(display).toBeInTheDocument();
  });
});
