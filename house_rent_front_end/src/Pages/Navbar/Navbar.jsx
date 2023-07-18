// src/Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side of the navbar */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:block ml-10 space-x-4">
              <a href="/" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/contact" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              <a href="/registration" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Registration</a>
            </div>
          </div>

          {/* Right side of the navbar */}
          <div className="hidden md:flex items-center">
            <img className="h-8 w-8 rounded-full" src="/user-profile.jpg" alt="User" />
            <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700">Logout</button>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700">Home</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700">Contact</a>
            <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700">Login</a>
            <a href="/registration" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700">Registration</a>
            <div className="flex items-center">
              <img className="h-8 w-8 rounded-full" src="/user-profile.jpg" alt="User" />
              <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
