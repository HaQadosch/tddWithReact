import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from '../components/App';

afterEach(cleanup);

describe('<App />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <Calculator />', () => {
    const { getByTestId } = render(<App />);
    const calc = getByTestId('calculator');
    expect(calc).toBeInTheDocument();
  });
});
