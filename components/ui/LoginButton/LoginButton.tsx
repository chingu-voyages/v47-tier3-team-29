"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div
      onClick={() =>
        signIn(undefined, {
          callbackUrl: "/dashboard",
        })
      }
    >
      LoginButton
    </div>
  );
}
