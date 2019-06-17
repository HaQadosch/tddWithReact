import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { Keypad } from '../components/Keypad';

afterEach(cleanup);

const setKeyEvent = jest.fn();

describe('<Keypad />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Keypad setKeyEvent={setKeyEvent} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Keypad />', () => {
    const { getByTestId } = render(<Keypad setKeyEvent={setKeyEvent} />);
    const keypad = getByTestId('keypad');
    expect(keypad).toBeInTheDocument();
  });

  test('fire event when clicked', () => {
    const { getAllByTestId } = render(<Keypad setKeyEvent={setKeyEvent} />);
    const calc = getAllByTestId('key');
    fireEvent.click(calc[0]);
    expect(setKeyEvent).toBeCalled();
  });
});
