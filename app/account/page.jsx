import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUp,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import React from "react";

const menuList = ["info", "subscriptions", "payment", "preferences"];

const page = () => {
  return (
    <div className="w-full flex flex-col font-semibold pt-24 pb-20 bg-white gap-12 min-h-screen items-center">
      <div className="flex flex-col w-full items-center gap-8">
        <h1 className="text-4xl">ACCOUNT</h1>

        <div className="flex flex-col w-3/4 lg:w-1/2 font-extralight gap-20 text-3xl uppercase">
          {menuList.map((e) => {
            return <h2>{e}</h2>;
          })}
        </div>
      </div>
      <div className="h-20 mt-[80px]">
        <SignedIn>
          {/* <UserButton
            showName // Включаем отображение имени пользователя
            appearance={{
              elements: {
                userButtonTrigger: {
                  backgroundColor: "white", // Белый фон кнопки
                  borderRadius: "5px", // Скругление для овальной формы
                  padding: "10px 15px", // Внутренние отступы
                  border: "1px solid #e5e7eb", // Лёгкая рамка
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Тень для объёма
                  display: "flex", // Выравнивание
                  alignItems: "center",
                  gap: "10px", // Расстояние между аватаром и именем
                  cursor: "pointer",
                },
                userButtonAvatarBox: {
                  width: "32px", // Размер аватара
                  height: "32px",
                },
                userButtonName: {
                  color: "#374151", // Цвет имени (серый)
                  fontSize: "14px", // Размер текста
                  fontWeight: "500", // Полужирный текст
                },
              },
            }}
          /> */}
          <SignOutButton>
            <button className="border-black border uppercase rounded-md p-4">
              sign out
            </button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border-black border uppercase rounded-md p-4">
              sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default page;
