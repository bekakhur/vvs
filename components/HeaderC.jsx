"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              VVS
            </a>
          </div>
          {/* Menu button for mobile view */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          {/* Links for desktop view */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed flex items-center pt-8 flex-col inset-y-0 right-0 w-full text-white bg-black shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-white absolute right-4 sm:right-6 top-5 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
        <a href="/" className="block px-4 py-2 ">
          Home
        </a>
        <a href="/about" className="block px-4 py-2 ">
          About
        </a>
        <a href="/contact" className="block px-4 py-2">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
