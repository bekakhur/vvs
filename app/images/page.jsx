import Carousel from "@/components/Carousel";
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
    <div className="w-full flex flex-col gap-20 md:gap-32 pt-24 min-h-screen">
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default page;
