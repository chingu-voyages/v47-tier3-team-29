'use client'

import { SessionProvider as NextSessionProvider } from 'next-auth/react'

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextSessionProvider>{children}</NextSessionProvider>
}

export default SessionProvider
