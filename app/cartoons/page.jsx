import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Banner from "@/components/Banner";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 min-h-screen">
      <Banner img="/detachment.jpg" />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default page;
