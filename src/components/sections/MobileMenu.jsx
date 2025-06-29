import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
      }`}>
      
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>

      {/* Optional: Add links for mobile menu */}
      <div className="flex flex-col items-center space-y-6 text-white text-xl mt-12">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#Blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </div>
  );
}
