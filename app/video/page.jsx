import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-red-500 w-full min-h-screen">
      <Image
        src="/time_enemy.jpg"
        width={1400}
        height={600}
        objectFit="cover"
        alt="joker"
      />
    </div>
  );
};

export default page;
