"use client";

import Link from "next/link";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUp,
  UserButton,
} from "@clerk/nextjs";

const navList = [
  {
    title: "movies",
  },
  {
    title: "series",
  },
  {
    title: "cartoons",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Отключаем прокрутку страницы
      document.body.style.overflow = "hidden";
    } else {
      // Включаем прокрутку страницы
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="bg-gradient-to-b z-50 uppercase text-2xl fixed w-full font-light from-black via-black/60 via-60% to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between relative items-center h-16 lg:h-20 transition-all">
          <a
            href="/"
            className="font-bold hidden lg:flex text-4xl text-yellow-500"
          >
            <div className="text-[50px] font-bold text-yellow-500">
              <span>V</span>
              <span className="text-yellow-400">V</span>
              <span>S</span>
            </div>
          </a>
          <a
            href="/"
            className="absolute lg:hidden transform -translate-x-1/2 left-[50%]"
          >
            <div className="text-[50px] font-bold text-yellow-500">
              <span>V</span>
              <span className="text-yellow-400">V</span>
              <span>S</span>
            </div>
          </a>
          {/* Menu button for mobile view */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <a href="/account" className="lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          {/* Links for desktop view */}
          <div className="hidden lg:flex gap-12 text-white font-medium tracking-wide items-center">
            {navList.map((e) => {
              return (
                <Link href={`/${e.title}`} key={e.title}>
                  {e.title}
                </Link>
              );
            })}

            {/* <div className="min-w-24 flex items-center justify-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="uppercase">sign in</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox:
                        "h-12 w-12 shadow-xl shadow-black rounded-full",
                    },
                  }}
                />
              </SignedIn>
            </div> */}
          </div>
          <a href="/account" className="lg:flex hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed overflow-hidden sm:overflow-y-auto flex items-center pt-8 flex-col inset-y-0 right-0 w-full text-white bg-black shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-white absolute right-4 sm:right-6 top-5 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
        <div className="w-full flex ml-16 flex-col">
          {navList.map((e) => {
            return (
              <Link
                onClick={toggleMenu}
                href={`/${e.title}`}
                key={e.title}
                className="text-white mt-10"
              >
                {e.title}
              </Link>
            );
          })}
        </div>
        <div className=" portrait:absolute portrait:bottom-[10vh] landscape:my-32">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="uppercase px-4 py-2 bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-500 font-light rounded-sm">
                sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <button className="uppercase px-4 py-2 bg-gradient-to-t from-zinc-700 via-zinc-600 to-zinc-700 font-light rounded-sm">
                sign out
              </button>
            </SignOutButton>
            {/* <UserButton
              showName // Включаем отображение имени пользователя
              appearance={{
                elements: {
                  userButtonPopoverCard: "pl-8 pr-16",
                  userButtonTrigger: {
                    backgroundColor: "white", // Белый фон кнопки
                    borderRadius: "50px", // Скругление для овальной формы
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
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
