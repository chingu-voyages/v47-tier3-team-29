import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import { PrismaClient } from '@prisma/client'

test('example', () => {
  expect(true).toBe(true)
})

test('Page', () => {
  render(<Page />)
  const element = screen.queryByText('Heads up!')
  expect(element).toBeTruthy()
})
