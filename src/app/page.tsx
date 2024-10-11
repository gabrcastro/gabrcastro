"use client";

import { HomePage } from "./pages/home.page";
import { ProfilePage } from "./pages/profile.page";
import { Constants } from "@/utils/constants";
import { NextFont } from "next/dist/compiled/@next/font";
import * as motion from "framer-motion/client";
import { PortolioPage } from "./pages/portfolio.page";

export default function Application(props: { lastica: NextFont }) {
  const lastica = props.lastica;

  return (
    <main
      lang="en"
      className="overflow-x-hidden overflow-y-auto  bg-center bg-cover bg-no-repeat bg-[url('/backgrounds/bg.png')]"
    >
      {/* HOME PAGE */}
      <HomePage font={lastica} />

      {/* RESUME */}
      <div className="flex flex-row w-full items-center justify-end mt-24 gap-20 bg-zinc-500/5 py-14 px-20">
        {Constants.COUNTERS.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            key={item.label}
            className="flex flex-row items-center justify-start"
          >
            <span
              className="text-gray-950 text-4xl mr-5"
              style={{ fontFamily: lastica.style.fontFamily }}
            >
              {item.amount}
            </span>
            <span className="text-gray-950 text-2xl uppercase">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/*PROFILE*/}
      <ProfilePage font={lastica} />

      <div className="h-20" />

      {/* PORTFOLIO */}
      <PortolioPage font={lastica} />

      {/* RECOMENDATION */}
      {/* <RecomendationsPage font={lastica} /> */}

      {/* RECOMENDATION */}
      <footer className="p-10 w-full bg-zinc-100 flex items-center justify-between">
        <a href="/" className="text-gray-950 font-semibold text-2xl">
          I&apos;m Gabriel
        </a>

        <div className="flex items-center justify-between gap-3">
          <ul className="flex flex-row gap-10 text-gray-950 text-base uppercase ml-20">
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

          <ul className="border-l-[1px] border-l-gray-950/40 pl-20 flex flex-row gap-10 text-gray-950 text-base uppercase ml-20">
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

        <span className="text-gray-950 text-lg ml-20 uppercase">
          Gabriel Castro {new Date().getFullYear().toString()}
        </span>
      </footer>

      {/* <a
        href="#home"
        className="absolute top-0 right-0 mt-10 mr-10 text-zinc-700 text-2xl flex items-center justify-center bg-zinc-50 rounded-full border-[1px] border-zinc-400 p-3"
      >
        <FaArrowUp />
      </a> */}
    </main>
  );
}
