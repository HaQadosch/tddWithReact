import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Keypad } from '../components/Keypad';

afterEach(cleanup);

const setDisplayValue = jest.fn(() => '');
const selectOperator = jest.fn(() => '');

describe('<Keypad />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Keypad setDisplayValue={setDisplayValue} selectOperator={selectOperator} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Keypad />', () => {
    const { getByTestId } = render(<Keypad setDisplayValue={setDisplayValue} selectOperator={selectOperator} />);
    getByTestId('keypad');
  });

  test('fire event when clicked', () => {
    const { getAllByTestId } = render(<Keypad setDisplayValue={setDisplayValue} selectOperator={selectOperator} />);
    const calc = getAllByTestId('key');
    fireEvent.click(calc[0]);
    expect(setDisplayValue).toBeCalled();
  });
});
