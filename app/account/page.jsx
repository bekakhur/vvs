import React from "react";

const menuList = ["subscriptions", "info", "payment", "preferences"];

const page = () => {
  return (
    <div className="w-full flex flex-col font-semibold pt-8 bg-white justify-around min-h-screen items-center">
      <h1 className="text-4xl">ACCOUNT</h1>
      <div className="flex flex-col w-full font-extralight pl-[20%] gap-8 text-3xl uppercase">
        {menuList.map((e) => {
          return <h2>{e}</h2>;
        })}
      </div>
      <button className="p-4 border border-black rounded-md">LOG OUT</button>
    </div>
  );
};

export default page;
