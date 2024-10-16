import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <Image
        src="/time_enemy.jpg"
        width={1400}
        height={600}
        objectFit="cover"
        alt="joker"
      />
      <div className="h-[600px] w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default page;
