"use client";

import { useUser } from "@clerk/clerk-react";
import React from "react";

const LoginFormWithPayment = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Показать загрузку, пока данные не получены
  }

  if (!isSignedIn) {
    return <div>Вы не авторизованы</div>; // Если пользователь не авторизован
  }

  const registrationDate = new Date(user.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="uppercase min-w-[300px] max-w-[400px] text-zinc-500 flex flex-col md:flex-row">
      <form className="flex w-full flex-col gap-4">
        <h2 className="text-2xl font-semibold">info</h2>
        <div className="flex flex-col gap-4 text-2xl">
          <p>{user?.primaryEmailAddress?.emailAddress || "Email не найден"}</p>
          <p className="text-lg">registered: {registrationDate || ""}</p>
        </div>
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
