import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
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

const pickOfTheWeek = ["x66aov7", "x6aiala", "x6ku1og"];
const movies = ["x77n9jw"];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 min-h-screen">
      {/* <Image
        src="/knight.jpg"
        width={500}
        height={500}
        objectFit="cover"
        alt="joker"
        className="h-[60vh] md:h-[100vh] w-auto object-cover"
      /> */}
      <Banner img="/knight.jpg" title="knight" />
      <Carousel title="PICK OF THE WEEK" videoIds={pickOfTheWeek} />
      <Carousel title="MOVIES" videoIds={movies} />
      <Carousel title="SERIES" videoIds={movies} />
      <Footer />
    </div>
  );
};

export default page;
