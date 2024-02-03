'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '../ui/button'

export default function AuthButton() {
  const { data: session } = useSession()

  const getButtonText = () => {
    if (session) {
      return 'Sign out'
    }

    return 'Sign in'
  }

  const handleClick = () => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }

  return (
    <Button size="sm" onClick={handleClick}>
      {getButtonText()}
    </Button>
  )
}
