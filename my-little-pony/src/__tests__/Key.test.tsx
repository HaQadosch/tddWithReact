import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { Key } from '../components/Key';

afterEach(cleanup);

describe('<Key />', () => {
  const keyProps = {
    value: '1',
    type: 'number',
    action: jest.fn(),
  };
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Key {...keyProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Key />', () => {
    const { getByTestId, getByText } = render(<Key {...keyProps} />);
    expect(getByTestId('key')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });

  test('fires event when clicked', () => {
    const { getByTestId } = render(<Key {...keyProps} />);
    fireEvent.click(getByTestId('key'));
    expect(keyProps.action).toBeCalled();
  });
});
