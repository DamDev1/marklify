import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5 px-20 max-md:px-5 border-b fixed top-0 left-0 right-0 bg-white z-10">
      <Logo />
      <nav className="max-md:hidden">
        <ul className="flex items-center gap-10">
          <Link
            className="text-[16px] hover:scale-110 transition-all hover:text-blue-600"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[16px] hover:scale-110 transition-all hover:text-blue-600"
            href={"/"}
          >
            About
          </Link>
          <Link
            className="text-[16px] hover:scale-110 transition-all hover:text-blue-600"
            href={"/"}
          >
            Contact
          </Link>
          <Link
            className="text-[16px] hover:scale-110 transition-all hover:text-blue-600"
            href={"/"}
          >
            Blog
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-2 max-md:hidden">
        <Button variant={"outline"}>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
      <div className="max-md:flex hidden cursor-pointer border border-gray-300 rounded-md p-2">
        <AlignJustify />
      </div>
    </header>
  );
}
