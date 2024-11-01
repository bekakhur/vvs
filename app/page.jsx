import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full shadow-yellow-300 flex flex-col gap-20 md:gap-32 items-center min-h-screen">
      <div className="bg-black shadow-2xl shadow-zinc-900 flex items-center justify-center w-full h-[60vh] sm:h-[100vh]">
        <Image
          src="/joker.jpg"
          width={500}
          height={500}
          objectFit="cover"
          alt="joker"
          className="h-[60vh] grayscale md:h-[100vh] w-auto object-cover"
        />
      </div>
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}
