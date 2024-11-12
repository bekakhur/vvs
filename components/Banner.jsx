import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ img }) => {
  return (
    <div>
      <div className="bg-black  relative overflow-hidden flex items-center justify-center w-full h-[60vh] sm:h-[100vh]">
        <Image
          src={img}
          width={500}
          height={500}
          objectFit="cover"
          alt="joker"
          className="h-full grayscale animate-zoom w-full object-cover"
          style={{ transformOrigin: "20% 60%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-80% via-transparent to-transparent"></div>
        <Link
          className="absolute bottom-10 bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-500 text-sm p-3 rounded-md"
          href={"/player"}
        >
          WATCH NOW
        </Link>
      </div>
      <div className="w-full h-20 sm:h-24 bg-gradient-to-t from-transparent via-black via-80% to-black"></div>
    </div>
  );
};

export default Banner;
