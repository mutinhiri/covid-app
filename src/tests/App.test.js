import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-storage'
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
