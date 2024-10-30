import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[100vh] z-50 fixed">
        <iframe
          src="https://geo.dailymotion.com/player.html?video=x5tg33q"
          className="w-full h-[100vh] "
          allowfullscreen
          title="Dailymotion Video Player"
          allow="web-share, autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
