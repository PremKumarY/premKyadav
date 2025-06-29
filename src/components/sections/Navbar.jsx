import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ menuOpen, setMenuOpen }) {
  // Prevent body scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Brand */}
          <a href="/" className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-sm">
            PREM<span className="text-blue-500">K</span>YADAV</a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>
            <a href="#About" className='text-gray-300 hover:text-white transition-colors'>About</a>
            <a href="#Projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>
            <a href="#Blog" className='text-gray-300 hover:text-white transition-colors'>Blog</a>
            <a href="#Contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
