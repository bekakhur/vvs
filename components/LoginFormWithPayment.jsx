import React from "react";

const LoginFormWithPayment = () => {
  return (
    <div className="uppercase w-full flex flex-col md:flex-row gap-8 justify-center items-center">
      <div className="flex flex-col w-2/3 md:w-1/3 gap-4 max-w-[350px]">
        <h2 className="text-2xl font-semibold text-zinc-500">info</h2>
        <input
          type="input"
          placeholder="EMAIL"
          className="w-full p-2 outline-none border border-gray-400 rounded-sm "
        />
        <input
          type="input"
          placeholder="PASSWORD"
          className="w-full p-2 outline-none border border-gray-400 rounded-sm "
        />
      </div>
      <div className="flex flex-col gap-4 w-2/3 md:w-1/3 max-w-[350px]">
        <h2 className="text-2xl font-semibold text-zinc-500">payment</h2>
        <input
          type="input"
          placeholder="0000 0000 0000 0000"
          className="w-full p-2 outline-none border border-gray-400 rounded-sm "
        />
        <div className="flex justify-between">
          <input
            type="input"
            placeholder="MM/YY"
            className="w-[120px] p-2 outline-none border border-gray-400 rounded-sm "
          />
          <input
            type="input"
            placeholder="CVV"
            className="w-[120px] p-2 outline-none border border-gray-400 rounded-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default LoginFormWithPayment;
