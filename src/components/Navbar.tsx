"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

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
        <Image
          src="/navbar_logo.webp"
          alt="Portfolio logo"
          width={40}
          height={40}
        />
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <ul className="absolute top-full right-0 z-10 w-48 rounded-lg bg-[#252525] p-6 text-center text-xl text-white shadow-lg">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} onClick={() => setIsOpen(false)}>
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
