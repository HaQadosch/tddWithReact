import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Keypad } from '../components/Keypad';

afterEach(cleanup);

describe('<Keypad />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Keypad />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Keypad />', () => {
    const { debug, asFragment, getByTestId } = render(<Keypad />);
    // debug(asFragment());
    const calc = getByTestId('keypad');
  });
});
