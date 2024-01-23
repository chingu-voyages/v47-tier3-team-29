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

test('DB', async () => {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id: '84ca7613-c981-4171-9f5b-02b6c0ce76b2',
    },
  })
  expect(user?.name).toBe('Fouad')
})
