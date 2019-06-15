import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Calculator } from '../components/Calculator';

afterEach(cleanup);

describe('<Calculator />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Display />', () => {
    const { getByTestId } = render(<Calculator />);
    getByTestId('display');
  });
});
