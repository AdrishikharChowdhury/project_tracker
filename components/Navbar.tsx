"use client"
import { navlinks } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname=usePathname()
  const isHome=pathname==='/'
  return (
    <nav className="w-full py-6 px-12 flex justify-between">
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
        <Link href="/signin" className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors" >Sign In</Link>
        <Link href="/signup" className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors" >Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
