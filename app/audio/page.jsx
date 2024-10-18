import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20 md:gap-32 min-h-screen">
      <Image
        src="/detachment.jpg"
        width={1400}
        height={1400}
        objectFit="cover"
        alt="joker"
        className="h-[60vh] md:h-[100vh] object-cover w-auto"
      />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default page;
