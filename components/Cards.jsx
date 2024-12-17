import React from "react";

const Cards = () => {
  return (
    <div className="uppercase w-full mb-12 flex flex-col md:flex-row gap-8 text-3xl font-semibold justify-center items-center">
      <div className="flex flex-col h-80 items-center justify-center rounded-xl shadow-2xl bg-gradient-to-t from-yellow-300 to-yellow-200 border border-yellow-300 w-2/3 md:w-1/3 gap-4 max-w-[350px]">
        <h2>monthly</h2>
        <h2 className="text-5xl">$4.99</h2>
        <button className="px-4 py-2 uppercase mt-4 rounded-sm shadow-2xl bg-gradient-to-t from-yellow-100 to-yellow-50">
          select
        </button>
      </div>
      <div className="flex flex-col h-80 items-center justify-center rounded-xl shadow-2xl bg-gradient-to-t from-yellow-300 to-yellow-200 border border-yellow-300 w-2/3 md:w-1/3 gap-4 max-w-[350px]">
        <h2>lifetime</h2>
        <h2 className="text-5xl">$29.99</h2>
        <button className="px-4 py-2 uppercase mt-4 rounded-sm shadow-2xl bg-gradient-to-t from-yellow-100 to-yellow-50">
          select
        </button>
      </div>
    </div>
  );
};

export default Cards;
