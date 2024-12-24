import LoginFormWithPayment from "@/components/LoginFormWithPayment";
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
    <div className="w-full flex flex-col pt-28 pb-20 bg-gradient-to-t from-white to-white gap-12 min-h-screen items-center">
      <div className="flex flex-col w-full gap-8 items-center">
        <h1 className="text-4xl">ACCOUNT</h1>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center">
          <img src="./vintage_banner.png" alt="" className="w-4/5 sm:w-1/2" />
          <SignedIn>
            <div className="p-4">
              <LoginFormWithPayment />
            </div>
          </SignedIn>
        </div>
      </div>
      <div className="mt-[40px]">
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
            <button className="border-black border uppercase rounded-sm p-4">
              sign out
            </button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border-black border uppercase rounded-sm p-4">
              sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default page;
