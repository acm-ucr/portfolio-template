"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import navbarLogo from "@/public/navbar_logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative flex items-center justify-between bg-[#252525] p-5 text-white">
      <Link href="/">
        <Image src={navbarLogo} alt="Portfolio logo" className="h-10 w-10" />
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="transition-transform duration-200 hover:scale-110"
      >
        <Menu className="h-7 w-7" />
      </button>

      {isOpen && (
        <ul className="absolute top-full right-0 z-10 w-48 rounded-lg bg-[#252525] p-6 text-center text-xl text-white shadow-lg">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="inline-block transition-all duration-200 hover:scale-110 hover:text-gray-400"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
