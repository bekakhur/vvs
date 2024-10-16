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
      <Carousel images={images} slidesToShow={3} />
    </div>
  );
};

export default page;
