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

        <div className="flex flex-col w-full font-extralight pl-[10%] gap-4 text-3xl uppercase">
          <div className="h-20">
            <SignedIn>
              <UserButton
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
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="uppercase px-4 py-2 bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-500 font-light rounded-sm">
                  sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
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
