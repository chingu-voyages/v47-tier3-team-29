import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import StrapLine from '../StrapLine';
import UserWelcome from '../UserWelcome';
import LoginButton from '../AuthButton';

async function Navbar() {
  return (
    <div className="bg-white">
      <div className=" flex justify-between items-center p-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-5 items-center justify-between">
          <UserWelcome />
          <LoginButton />
        </div>
      </div>
      <div className="">
        <StrapLine />
      </div>
    </div>
  );
}

export { Navbar };
