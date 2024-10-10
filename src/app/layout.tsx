import { Metadata } from "next";
import { Inter, Chakra_Petch, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Constants } from "@/utils/constants";

// motion
import * as motion from "framer-motion/client";
import { HomePage } from "./pages/home.page";
import { WorkflowPage } from "./pages/workflow.page";
import { PortolioPage } from "./pages/portfolio.page";
import { RecomendationsPage } from "./pages/recomendation.page";

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
    <html lang="en" className="bg-zinc-50 overflow-x-hidden overflow-y-auto">
      <body className={`${quicksand.className} h-screen w-screen`}>
        {/* HOME PAGE */}
        <HomePage font={lastica} />

        {/*WORK FLOW & PORTFOLIO*/}
        <main className="w-full h-max flex flex-col bg-cover bg-[url('/backgrounds/test.png')] bg-repeat-y">
          <WorkflowPage font={lastica} />
          <PortolioPage font={lastica} />
        </main>

        {/* RECOMENDATION */}
        <RecomendationsPage font={lastica} />

        {/* RECOMENDATION */}
        <footer className="p-10 w-full bg-black flex items-center justify-between">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            className="w-10 h-10"
            width={100}
            height={100}
          />

          <div className="flex items-center justify-between gap-3">
            <ul className="flex flex-row gap-10 text-white text-base uppercase ml-20">
              {Constants.MENU.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className="hover:opacity-80 hover:cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="border-l-[1px] border-l-zinc-300/40 pl-20 flex flex-row gap-10 text-white text-base uppercase ml-20">
              {Constants.SOCIAL.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className="hover:opacity-80 hover:cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="text-white text-lg ml-20 uppercase">
            Gabriel Castro {new Date().getFullYear().toString()}
          </span>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
