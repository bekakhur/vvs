import localFont from "next/font/local";
import "./globals.css";
import HeaderC from "@/components/HeaderC";
import Header from "@/components/Header";
import Head from "next/head";

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
      <Head>
        {/*Android/Chrome */}
        <meta name="theme-color" content="#000000" />

        {/*iOS Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <body className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">
        <HeaderC />
        <div>{children}</div>
      </body>
    </html>
  );
}
