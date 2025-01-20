'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  

  const links = ['About', 'Contact', 'Listing'];

  return (
    <nav className="bg-white sticky top-0 z-50 w-full">
      {/* Navbar Wrapper */}
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <Image 
          src="/assets/icons/si-logo2.png"
          alt="logo"
          width={200}
          height={200}
          className="w-40 h-12"
        />

        {/* Hamburger Menu */}
        <Image
          src="/assets/icons/hamburger-menu.svg"
          alt="menu"
          width={200}
          height={200}
          className="w-28 h-10 block lg:hidden cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-start gap-4">
            <li className="text-brand font-bold text-base">
              <Link href="/">Home</Link>
            </li>
            {links.map((link) => (
              <li key={link} className="text-brand font-bold text-base">
                <Link href={`/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden ">
          <ul className="flex flex-col justify-center items-center gap-3 p-4 text-center">
            <li className="text-brand font-bold text-base">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            {links.map((link) => (
              <li key={link} className="text-brand font-bold text-base">
                <Link
                  href={`/${link}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
