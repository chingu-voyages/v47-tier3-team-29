"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => void signOut({ callbackUrl: "/" })}
    >
      Log out
    </button>
  );
}
