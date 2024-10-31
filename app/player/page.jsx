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
          <button className="px-4 py-2 bg-gradient-to-t w-24 from-yellow-800 to-yellow-600 hover:bg-green-200 rounded-sm">
            Sign In
          </button>
          <span>OR</span>
          <button className="px-4 py-2 bg-gradient-to-t w-24 from-green-800 to-green-600  hover:bg-zinc-300 rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
      <div className="text-2xl sm:text-5xl bg-black border-t border-opacity-10 border-white sm:border-none sm:bg-transparent sticky top-[40vh] sm:top-auto py-6 px-6 z-50 left-6 sm:absolute uppercase font-bold">
        <h2>Liverpool</h2>
      </div>

      <Link
        href={"/player"}
        className="flex sm:hidden bg-black flex-col gap-2 mx-6"
      >
        {images.map((e) => {
          return (
            <div className="w-full h-64">
              <img
                src={e}
                alt=""
                className=" object-cover grayscale w-full h-64"
              />
            </div>
          );
        })}
      </Link>
    </div>
  );
};

export default page;
