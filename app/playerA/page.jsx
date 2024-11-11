import Link from "next/link";
import React from "react";

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
  return (
    <div className="w-full text-white min-h-screen">
      <div className="w-full text-white h-[40vh] z-50 sm:h-[100vh] sm:overflow-hidden sticky top-0 bg-black flex justify-center items-center">
        <iframe
          src="https://geo.dailymotion.com/player.html?video=x5tg33q"
          className="w-full h-[40vh] sm:h-[100vh]"
          allowfullscreen
          title="Dailymotion Video Player"
          allow="web-share, autoplay"
        ></iframe>
      </div>
      <div className="text-2xl sm:text-5xl bg-black border-t border-opacity-10 border-white sm:border-none sm:bg-transparent sticky top-[40vh] sm:top-auto py-6 px-6 z-50 left-6 sm:hidden font-bold">
        <h2>The Henpecked Duck</h2>
      </div>

      <Link
        href={"/playerA"}
        className="flex sm:hidden bg-black flex-col gap-2 mx-6"
      >
        {images.map((e) => {
          return (
            <div className="w-full relative h-64">
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
            </div>
          );
        })}
      </Link>
    </div>
  );
};

export default page;
