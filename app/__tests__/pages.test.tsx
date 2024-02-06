import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../page';

test('example', async () => {
  expect(true).toBe(true);
});

test('Home page', () => {
  render(<Page />);

  const success = screen.getByText('success', {
    exact: false,
  });

  const simplicity = screen.getByText('simplicity', {
    exact: false,
  });

  expect(success).toBeTruthy();
  expect(simplicity).toBeTruthy();
});
