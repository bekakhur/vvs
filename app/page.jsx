import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 items-center min-h-screen">
      <Image
        src="/joker.jpg"
        width={500}
        height={500}
        objectFit="cover"
        alt="joker"
        className="h-screen w-auto object-cover"
      />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}
