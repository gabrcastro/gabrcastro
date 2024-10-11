import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import Application from "./page";

export const metadata: Metadata = {
  title: "Gabriel Castro",
  description: "Gabriel Castro Dev",
};

const lastica = localFont({ src: "../../public/fonts/lastica.ttf" });
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-100 overflow-x-hidden overflow-y-auto">
      <body className={`${quicksand.className} h-screen w-screen`}>
        <Application lastica={lastica} />

        <Analytics />
      </body>
    </html>
  );
}
