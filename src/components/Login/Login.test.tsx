import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import Login from './Login';

test('renders Login button', () => {
  render(<SnackbarProvider><Login /></SnackbarProvider>);

  const submitButton = screen.getByRole('button', { name: 'Login' });
  expect(submitButton).toHaveTextContent('Login');
  expect(submitButton).toBeEnabled();
});
