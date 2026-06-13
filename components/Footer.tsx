import { Mail, MapPin } from "lucide-react";
import { navlinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-amber-950 border-t border-amber-800/50">
      <div className="max-w-7xl mx-auto py-16 px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-5">
          <Link href="/" className="text-2xl gap-3 flex items-center font-extrabold text-white">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>Loony</span>
            <span className="text-amber-400">Wolfie</span>
          </Link>
          <p className="text-amber-200/60 text-sm leading-relaxed">
            An interactive project tracker that monitors your git history,
            visualizes progress, and generates insights to keep your development
            workflow on track.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-amber-400 font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {navlinks.map((link, idx) => (
              <Link
                href={`#${link.id}`}
                key={idx}
                className="text-amber-200/70 hover:text-amber-300 text-sm font-semibold transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-amber-400 font-bold text-lg">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-amber-200/70 text-sm">
              <Mail className="size-4 shrink-0" />
              <a
                href="mailto:adrishikharc@gmail.com"
                className="hover:text-amber-300 transition-colors"
              >
                adrishikharc@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-amber-200/70 text-sm">
              <MapPin className="size-4 shrink-0" />
              <span>Kolkata, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-800/40 py-6 px-12">
        <p className="text-center text-amber-200/50 text-xs font-medium">
          &copy; {new Date().getFullYear()} Loony Wolfie. All rights reserved. Built with{" "}
          <span className="text-red-400">&hearts;</span> by Adrishikhar Chowdhury.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
