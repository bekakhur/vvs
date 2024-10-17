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
    <div className="w-full min-h-screen">
      <div className="h-[600px] w-full">
        <Carousel />
      </div>{" "}
      <div className="h-[600px] w-full">
        <Carousel />
      </div>
      <div className="h-[600px] w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default page;
