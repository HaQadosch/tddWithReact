import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Display } from '../components/Display';

afterEach(cleanup);

describe('<Display />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Display />', async () => {
    const { debug, asFragment, getByTestId } = render(<Display />);
    getByTestId('display');
  });
});
