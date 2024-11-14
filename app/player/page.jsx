"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const images = [
  "./joker.jpg",
  "./time_enemy.jpg",
  "./knight.jpg",
  "./detachment.jpg",
  "./joker.jpg",
  "./time_enemy.jpg",
  "./knight.jpg",
  "./detachment.jpg",
];

const page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Возвращает на предыдущую страницу
  };

  return (
    <div className="text-white overscroll-none">
      <div className="w-full text-white h-[40vh] z-50 sm:h-[100vh] md:overflow-hidden sticky top-0 bg-black flex flex-col justify-center items-center">
        <button
          onClick={handleBack}
          className="absolute top-4 left-6 text-4xl md:text-6xl"
        >
          &times;
        </button>
        <img
          src="./lock.svg"
          alt=""
          className="z-50 h-16 w-16 md:h-28 md:w-28 md:mb-16 mb-8"
        />
        <div className="flex gap-2 items-center font-semibold  text-white">
          <Link
            href={"/playerA"}
            className="px-4 py-2 bg-gradient-to-t w-24 from-yellow-800 to-yellow-600 hover:bg-green-200 rounded-sm"
          >
            Sign In
          </Link>
          <span>OR</span>
          <button className="px-4 py-2 bg-gradient-to-t w-24 from-green-800 to-green-600  hover:bg-zinc-300 rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
      <div className="text-2xl sm:text-5xl bg-black border-t border-opacity-10 border-white sm:border-none sm:bg-transparent sticky top-[40vh] sm:top-auto py-6 px-6 z-50 left-6 sm:hidden font-bold">
        <h2>The Henpecked Duck</h2>
      </div>

      <div className="flex sm:hidden bg-black pb-4 flex-col gap-2 mx-6">
        {images.map((e) => {
          return (
            <Link
              href={"/player"}
              className="w-full flex justify-center items-center relative h-64"
            >
              <img
                src={e}
                alt=""
                className="opacity-70 object-cover grayscale w-full h-64"
              />
              <h2 className="absolute text-white text-2xl font-semibold bottom-2 left-2">
                City Lights
              </h2>
              <div className="absolute top-2 right-2 bg-black rounded-sm opacity-80">
                <span className="py-1 px-2 text-sm text-white">2:14:03</span>
              </div>
              <img
                src="./lock.svg"
                className=" h-20 w-20 mb-6 absolute opacity-80"
                alt=""
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
