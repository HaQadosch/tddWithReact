import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Key } from '../components/Key';

afterEach(cleanup);

describe('<Key />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Key />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Key />', () => {
    const { debug, asFragment, getByTestId } = render(<Key />);
    // debug(asFragment());
    const calc = getByTestId('key');
  });
});
