import React from "react";

const menuList = ["info", "subscriptions", "payment", "preferences"];

const page = () => {
  return (
    <div className="w-full flex flex-col font-semibold pt-24 pb-20 bg-white gap-12 min-h-screen items-center">
      <div className="flex flex-col w-full items-center gap-8">
        <h1 className="text-4xl">ACCOUNT</h1>
        <div className="flex flex-col w-full font-extralight pl-[10%] gap-4 text-3xl uppercase">
          {menuList.map((e) => {
            return <h2>{e}</h2>;
          })}
        </div>
      </div>
      <button className="p-4 border mt-[80px] border-black rounded-md">
        LOG OUT
      </button>
    </div>
  );
};

export default page;
