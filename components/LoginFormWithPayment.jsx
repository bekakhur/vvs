import React from "react";

const LoginFormWithPayment = () => {
  return (
    <div className="uppercase min-w-[300px] max-w-[400px] flex flex-col md:flex-row">
      <form className="flex w-full flex-col gap-4">
        <h2 className="text-2xl font-semibold text-zinc-500">info</h2>
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full p-2 text-sm font-thin outline-none border border-gray-400 rounded-sm "
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full p-2 text-sm font-thin outline-none border border-gray-400 rounded-sm "
        />
      </form>
      {/* <div className="flex flex-col gap-4 w-4/5 md:w-1/3 max-w-[400px]">
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
      </div> */}
    </div>
  );
};

export default LoginFormWithPayment;
