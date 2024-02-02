'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

const UserWelcome = () => {
  const session = useSession()

  if (!session?.data?.user?.name) {
    return null
  }

  const { name, image } = session.data.user

  const firstInitial = name.charAt(0).toUpperCase() || undefined
  const userImage = image || undefined

  return (
    <div className="flex justify-center items-center gap-2">
      <Avatar>
        <AvatarImage src={userImage} />
        <AvatarFallback>{firstInitial}</AvatarFallback>
      </Avatar>
      <h3 className="text-2xl font-semibold tracking-tighter">{name}</h3>
    </div>
  )
}

export default UserWelcome
