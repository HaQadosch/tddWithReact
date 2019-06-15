import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Keypad } from '../components/Keypad';

afterEach(cleanup);

const setDisplayValue = jest.fn(() => '');

describe('<Keypad />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Keypad setDisplayValue={setDisplayValue} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Keypad />', () => {
    const { debug, asFragment, getByTestId } = render(<Keypad setDisplayValue={setDisplayValue} />);
    // debug(asFragment());
    const calc = getByTestId('keypad');
  });
});
