import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { RedPony } from '../components/RedPony';

afterEach(cleanup);

describe('<RedPony />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RedPony />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <RedPony />', () => {
    const { debug, asFragment, getByTestId } = render(<RedPony />);
    // debug(asFragment());
    const calc = getByTestId('redPony');
  });
});
