import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full text-white h-[40vh] z-50 md:h-[100vh] fixed bg-black flex justify-center items-center">
        <Link href={"/"} className="absolute top-4 left-6 text-4xl md:text-6xl">
          &times;
        </Link>
        <img
          src="./lock.svg"
          alt=""
          className="z-50 h-16 w-16 md:h-28 md:w-28 md:mb-16 mb-8"
        />
        <h2 className="text-2xl md:text-5xl bottom-6 left-6 md:bottom-16 uppercase absolute font-bold">
          Liverpool
        </h2>
      </div>
    </div>
  );
};

export default page;
