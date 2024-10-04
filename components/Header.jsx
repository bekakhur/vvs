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
    <div className="w-full sticky top-0 transition-all h-16 lg:h-24 bg-gradient-to-b from-black to-transparent text-white flex justify-between items-center lg:px-12 px-4 font-bold text-2xl uppercase">
      <div>VVS</div>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        H
      </div>
      <div className="hidden lg:flex gap-6 text-xl font-light">
        {navList.map((e) => {
          return <p onClick={() => setIsMenuOpen(!isMenuOpen)}>{e.title}</p>;
        })}
      </div>
      <div
        className={`transition-all flex flex-col pt-10 items-center gap-4 shadow-xl duration-500 absolute right-[-100%] top-16  lg:hidden bg-black h-screen w-full ${
          isMenuOpen && "right-0"
        }`}
      >
        {navList.map((e) => {
          return <p onClick={() => setIsMenuOpen(!isMenuOpen)}>{e.title}</p>;
        })}
      </div>
    </div>
  );
};

export default Header;
