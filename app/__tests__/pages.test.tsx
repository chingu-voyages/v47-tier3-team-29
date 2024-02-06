import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../page';

test('example', async () => {
  expect(true).toBe(true);
});

test('Home page', () => {
  render(<Page />);

  const text = screen.getByText('Project Management', {
    exact: false,
  });

  expect(text).toBeTruthy();
});
