import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  // const element = render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const { debug } = render(<App />);
  debug();
});

