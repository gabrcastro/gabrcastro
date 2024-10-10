import { Constants } from "@/utils/constants";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";

export function HomePage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <main className="relative w-full h-full py-10 flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/bg.png')]">
      <iframe
        className="absolute left-0 w-screen h-screen opacity-30"
        src="https://lottie.host/embed/e24daa09-2076-46e5-843e-48c1241bf4ab/tJwxZcaWRb.json"
      ></iframe>

      {/* MENU */}
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-row justify-between items-center px-10"
      >
        <Image
          src="/icons/logo.svg"
          alt="logo"
          className="w-10 h-10"
          width={100}
          height={100}
        />

        <ul className="flex flex-row gap-10 text-white text-xl uppercase ml-20">
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

        <button
          type="button"
          className="text-white uppercase text-xl py-1 px-3 border-2 border-white hover:opacity-80 hover:cursor-pointer"
        >
          {Constants.CLICK_HERE}
        </button>
      </motion.div>

      {/* NAME */}
      <motion.div
        initial={{ opacity: 0, x: -1000, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -1000, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="ml-48 w-full items-center justify-center mt-32"
      >
        <div className="flex flex-col w-full items-start justify-center">
          <span
            className="text-white text-[140px] uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {Constants.FIRSTNAME}
          </span>
          <span
            className="text-white ml-48 text-[140px] -mt-20 uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {Constants.LASTNAME}
          </span>
          <div className="h-[1px] w-[60%] bg-zinc-500 -mt-5 ml-48" />
          <div className="flex flex-col items-end justify-center mt-4 w-full -ml-[490px]">
            <span className="text-white text-[20px] uppercase">
              {Constants.PROGRAMATION}
            </span>
            <span className="text-white ml-48 text-[20px] uppercase">
              {Constants.UX_UI}
            </span>
          </div>
        </div>
      </motion.div>

      {/* RESUME */}
      <div className="flex flex-row w-full items-center justify-end mt-48 gap-20 bg-[#0c0001] py-20 px-20">
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
              className="text-white text-4xl mr-5"
              style={{ fontFamily: lastica.style.fontFamily }}
            >
              {item.amount}
            </span>
            <span className="text-white text-2xl uppercase">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
