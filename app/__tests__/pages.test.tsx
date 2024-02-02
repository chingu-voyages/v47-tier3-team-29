import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

test('example', () => {
  expect(true).toBe(true);
});

test('Page', () => {
  render(<Page />);
  const element = screen.queryByText('Docs');
  expect(element).toBeTruthy();
});
