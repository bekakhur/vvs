import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VVS",
  description: "VVS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-x-hidden bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
