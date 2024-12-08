"use client";

import Link from "next/link";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUp,
  UserButton,
} from "@clerk/nextjs";

const navList = [
  {
    title: "movies",
  },
  {
    title: "series",
  },
  {
    title: "cartoons",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Отключаем прокрутку страницы
      document.body.style.overflow = "hidden";
    } else {
      // Включаем прокрутку страницы
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="bg-gradient-to-b z-50 uppercase text-2xl fixed w-full font-light from-black to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 transition-all">
          <a href="/" className="font-bold text-4xl text-yellow-500">
            <div className="flex bg-gradient-to-t from-yellow-700 border border-yellow-100 shadow-sm shadow-black via-yellow-900 to-yellow-700 h-10 w-24 justify-center items-center">
              <span>V</span>
              <span className="text-yellow-400">V</span>
              <span>S</span>
            </div>
          </a>
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
          <div className="hidden lg:flex gap-6 text-white font-semibold items-center lg:space-x-4">
            {navList.map((e) => {
              return (
                <Link href={`/${e.title}`} key={e.title}>
                  {e.title}
                </Link>
              );
            })}
            <div className="min-w-24 flex items-center justify-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="uppercase">sign in</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox:
                        "h-12 w-12 shadow-xl shadow-black rounded-full",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed overflow-hidden flex items-center pt-8 flex-col inset-y-0 right-0 w-full text-white bg-black shadow-lg transform transition-transform duration-500 ease-in-out ${
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
        <div className="absolute bottom-24">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="uppercase px-4 py-2 bg-gradient-to-t from-green-800 to-green-400 font-light rounded-sm">
                sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="w-12 shadow-xl shadow-black rounded-full">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-12 w-12",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
        {navList.map((e) => {
          return (
            <Link
              onClick={toggleMenu}
              href={`/${e.title}`}
              key={e.title}
              className="text-white mt-10"
            >
              {e.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
