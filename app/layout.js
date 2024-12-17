import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

const oswald = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

export const metadata = {
  title: "VVS",
  description: "VVS",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#000000" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </head>
        <body
          className={`${oswald.className} bg-gradient-to-r safari-fixed-height no-bounce select-none no-scrollbar portrait:no-scrollbar min-h-[100dvh] landscape:no-scrollbar landscape:bg-black portrait:bg-black overscroll-y-none from-black via-zinc-800 to-black`}
        >
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
