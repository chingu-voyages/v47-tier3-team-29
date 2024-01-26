import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "../ui/AuthButton/AuthButton";

export default async function Navbar() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-2">
        <Link href="/">
          <Image src="/logo.png" width={100} height={40} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-2">
        <LoginButton />
      </div>
    </div>
  );
}
