"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50" 
    style={{ backgroundImage: "url('/bg2.jpg')" }}>
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        
   
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4 space-y-4`}
      >
        <Link href="/" className="block">Home</Link>
        <Link href="/About" className="block">About</Link>
        <Link href="/Portfolio" className="block">Portfolio</Link>
        <Link href="/Contact" className="block">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
