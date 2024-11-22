import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const pickOfTheWeek = ["x66aov7", "x6aiala", "x6ku1og"];
const movies = ["x77n9jw"];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 min-h-screen">
      <Banner img="/detachment.jpg" title="detachment" videoId="x6ku1og" />
      <Carousel title="PICK OF THE WEEK" videoIds={pickOfTheWeek} />
      <Carousel title="MOVIES" videoIds={movies} />
      <Carousel title="SERIES" videoIds={movies} />
      <Footer />
    </div>
  );
};

export default page;
