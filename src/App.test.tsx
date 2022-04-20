import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Portfolio from './view/portfolio'
test('renders learn react link', () => {
  render(<App children={<Portfolio/>} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
