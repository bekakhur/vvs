import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <Image
        src="/time_enemy.jpg"
        width={1400}
        height={600}
        objectFit="cover"
        alt="joker"
        loading="lazy"
      />
    </div>
  );
};

export default page;
