import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoginButton from '@/components/AuthButton'
import UserWelcome from '@/components/UserWelcome'
import Logo from '@/components/Logo'

export default async function Navbar() {
  return (
    <div className="flex justify-between p-6 sticky top-0">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <UserWelcome />
        <LoginButton />
      </div>
    </div>
  )
}
