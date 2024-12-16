/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        zoom: "zoom 20s ease-in-out infinite", // 10 секунд, бесконечный цикл
      },
      keyframes: {
        zoom: {
          "0%, 95%, 100%": { transform: "scale(1)" }, // Начальная и конечная точка (отдалено)
          "45%": { transform: "scale(1.4)" }, // Максимальное приближение на середине цикла
        },
      },
    },
  },
};
