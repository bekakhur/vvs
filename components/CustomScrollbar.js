"use client";

// components/CustomScrollbar.js
import { useState, useEffect } from "react";

const CustomScrollbar = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout = null;

  const handleScroll = () => {
    setIsScrolling(true);

    // Сбрасываем таймер, чтобы скрыть скроллбар через 1.5 секунды после прокрутки
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1500);
  };

  useEffect(() => {
    // Добавляем обработчик скролла
    const container = document.querySelector("#scrollable-container");
    container.addEventListener("scroll", handleScroll);

    return () => {
      // Удаляем обработчик при размонтировании компонента
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      id="scrollable-container"
      className={`relative h-screen overflow-y-scroll transition-all duration-300 ${
        isScrolling ? "custom-scrollbar" : "scrollbar-hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default CustomScrollbar;
