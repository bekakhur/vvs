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
    <div className="w-screen overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-between h-16 lg:h-24 bg-gradient-to-b text-white uppercase p-4 lg:p-8 text-2xl from-black to-transparent transition-all">
        <p>VSS</p>
        <div className="gap-6 hidden lg:flex">
          <p>video</p>
          <p>images</p>
          <p>audio</p>
        </div>
        <p className="lg:hidden" onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
          H
        </p>
      </div>
      <div
        className={`min-h-screen absolute overflow-hidden top-16 duration-500 right-[-100%] bg-black w-screen transition-all ${
          isMenuOpen && "right-0"
        }`}
      ></div>
    </div>
  );
};

export default Header;
