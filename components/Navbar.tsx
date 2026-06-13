"use client"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { navlinks } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname=usePathname()
  const isHome=pathname==='/'
  return (
    <nav className="w-full py-6 px-12 flex justify-between sticky top-0 z-50">
      <Link href="/"  className="text-4xl gap-4 flex items-center font-extrabold">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1><span>Loony</span> <span className="text-amber-800">Wolfie</span></h1>
      </Link>
      <ul className="flex gap-8 items-center">
        {navlinks.map((link,idx:number)=>(
          <Link href={!isHome ? link.link : `#${link.id}` } key={idx} className="text-lg hover:text-amber-800 font-bold transition-colors cursor-pointer" >{link.name}</Link>
      ))}
      </ul>
      <div className="flex gap-6 items-center">
        <Show when="signed-out">
          <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
            <button className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
            <button className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <div className="scale-125">
            <UserButton />
          </div>
        </Show>
      </div>
    </nav>
  );
};

export default Navbar;
