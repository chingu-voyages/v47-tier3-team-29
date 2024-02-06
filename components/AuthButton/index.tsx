'use client';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export default function AuthButton() {
  const { data: session } = useSession();

  const getButtonText = () => {
    if (session) {
      return 'Sign out';
    }

    return 'Sign in';
  };

  const handleClick = () => {
    if (session) {
      signOut({ callbackUrl: '/' });
    } else {
      signIn('google', { callbackUrl: '/dashboard' });
    }
  };

  const getButtonVariant = session ? 'outline' : 'default';

  return (
    <Button variant={getButtonVariant} size="sm" onClick={handleClick}>
      {getButtonText()}
    </Button>
  );
}
