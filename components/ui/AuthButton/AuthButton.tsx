"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex gap-2 items-center">
        <span>Welcome, {session?.user?.name}</span>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
