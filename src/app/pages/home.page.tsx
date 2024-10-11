import { Constants } from "@/utils/constants";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import { CiLinkedin, CiMenuBurger } from "react-icons/ci";
import {
  FaArrowDown,
  FaArrowDown19,
  FaBehance,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { AiOutlineArrowDown, AiOutlineMenu } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";

export function HomePage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div id="home" className="relative w-full h-full flex flex-col">
      {/* <iframe
        className="absolute w-screen h-screen opacity-10"
        src="https://lottie.host/embed/e24daa09-2076-46e5-843e-48c1241bf4ab/tJwxZcaWRb.json"
      ></iframe> */}

      {/* MENU */}
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-row justify-between items-center p-10"
      >
        <a href="/" className="text-gray-950 font-semibold text-2xl">
          I&apos;m Gabriel
        </a>

        {/* <ul className="flex flex-row gap-10 text-gray-950 text-xl uppercase ml-20">
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
        </ul> */}

        <button
          type="button"
          className="text-gray-900 uppercase text-4xl py-1 px-3 hover:opacity-80 hover:cursor-pointer"
        >
          <CgMenuRight />
        </button>
      </motion.div>

      {/* NAME */}
      <motion.div
        initial={{ opacity: 0, x: -1000, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -1000, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="ml-48 w-full items-center justify-center mt-48"
      >
        <div className="flex flex-col w-full items-start justify-center">
          <span
            className="text-gray-950 text-5xl uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {Constants.GREETINGS}
          </span>

          <div className="h-[1px] w-[70%] bg-zinc-500 mt-5" />

          <div className="w-[70%] flex flex-col items-end justify-center mt-4">
            <span className="text-gray-950 text-xl uppercase">
              {Constants.SUB_GREETINGS}
            </span>
          </div>
        </div>

        <div className="w-[70%] flex flex-col items-start justify-center mt-40">
          <p className="text-gray-950 text-xl font-semibold uppercase mb-4">
            Let&apos;s work together
          </p>
          <p className="text-gray-950 text-xl mb-2">
            gabrielcastromail@gmail.com
          </p>
          <p className="text-gray-950 text-xl uppercase mb-2">
            +55 74 9 8859 1670
          </p>
          <div className="flex flex-row gap-5 items-center justify-start text-zinc-700">
            <a
              href="/"
              className="hover:cursor-pointer hover:opacity-80 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="/"
              className="hover:cursor-pointer hover:opacity-80 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="/"
              className="hover:cursor-pointer hover:opacity-80 text-4xl"
            >
              <FaBehance />
            </a>
          </div>
        </div>
        <div className="w-[80%] flex justify-end items-end -mt-10">
          <span className="flex items-center gap-3 text-end text-gray-950 text-xl mb-2">
            Scroll down
            <AiOutlineArrowDown className="font-extralight" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
