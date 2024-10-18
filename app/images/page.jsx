import Carousel from "@/components/Carousel";
import Image from "next/image";
import React from "react";

const images = [
  "./joker.jpg",
  "./time_enemy.jpg",
  "./joker.jpg",
  "./time_enemy.jpg",
  "./joker.jpg",
  "./time_enemy.jpg",
];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 min-h-screen">
      <Image
        src="/knight.jpg"
        width={500}
        height={500}
        objectFit="cover"
        alt="joker"
        className="h-[60vh] md:h-[100vh] w-auto object-cover"
      />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default page;
