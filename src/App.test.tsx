import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Placeholder Text', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Search Countries/i);
  expect(inputElement).toBeInTheDocument();
});

test('table header 1', () => {
  render(<App />);
  const element = screen.getByText(/Country Name/i);
  expect(element).toBeInTheDocument();
});

test('table header 2', () => {
  render(<App />);
  const element = screen.getByText(/Country Code/i);
  expect(element).toBeInTheDocument();
});

