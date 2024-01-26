import React from "react";
import Link from "next/link";
import LogoutButton from "../ui/LogoutButton.tsx/LogoutButton";

export default async function Navbar() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-2">
        <span>Get started</span>
        <LogoutButton />
      </div>
    </div>
  );
}
