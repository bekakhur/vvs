import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20 md:gap-32 min-h-screen">
      <Image
        src="/time_enemy.jpg"
        width={1400}
        height={1400}
        objectFit="cover"
        alt="joker"
        className="h-screen object-cover w-auto"
      />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default page;
