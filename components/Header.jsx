"use client";

import React, { useState } from "react";

const navList = [
  {
    title: "video",
  },
  {
    title: "images",
  },
  {
    title: "audio",
  },
  {
    title: "text",
  },
  {
    title: "settings",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full top-0 fixed transition-all h-16  flex items-center text-2xl text-white px-4 lg:px-8 font-bold justify-between lg:h-24 bg-gradient-to-b from-black to-transparent">
      <p>VVS</p>
      <div
        className="lg:hidden cursor-pointer transition-all"
        onClick={(e) => setIsMenuOpen(!isMenuOpen)}
      >
        H
      </div>
      <div className="hidden lg:flex font-light gap-6 uppercase">
        {navList.map((e) => {
          return <p onClick={(e) => setIsMenuOpen(false)}>{e.title}</p>;
        })}
      </div>
      <div
        className={`w-full h-screen absolute lg:hidden flex flex-col items-center shadow-lg gap-12 uppercase pt-8 bg-black right-[-100%] transition-all duration-500 top-16 ${
          isMenuOpen && " translate-x-[-100%]"
        }`}
      >
        {navList.map((e) => {
          return <p onClick={(e) => setIsMenuOpen(false)}>{e.title}</p>;
        })}
      </div>
    </div>
  );
};

export default Header;
