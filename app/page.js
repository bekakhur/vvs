import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <Image
        src="/joker.jpg"
        width={600}
        height={600}
        objectFit="cover"
        alt="joker"
        loading="lazy"
      />
      <div className="h-[600px] w-full">
        <Carousel />
      </div>
    </div>
  );
}
