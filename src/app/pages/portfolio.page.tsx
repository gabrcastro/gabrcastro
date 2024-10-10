import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

export function PortolioPage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div className="w-full h-fullflex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h1 className="text-white font-medium text-5xl uppercase text-center mt-10">
          {Constants.PORTFOLIO}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex py-5"
      >
        <ul className="w-full flex gap-10 items-center justify-center text-white/70 text-2xl uppercase my-10">
          <li className="hover:font-bold hover:cursor-pointer">
            {Constants.ALL}
          </li>
          <li className="hover:font-bold hover:cursor-pointer">
            {Constants.PROGRAMATION}
          </li>
          <li className="hover:font-bold hover:cursor-pointer">
            {Constants.UX_UI}
          </li>
        </ul>
      </motion.div>

      <div className="w-full flex flex-row flex-wrap items-start justify-between gap-10 p-10 border-[2px] border-zinc-400/10 bg-zinc-100/5">
        {Constants.DEV_PROJECTS.map((item) => (
          <div
            key={item.url}
            className="w-[48%] h-max border-2 border-zinc-500/25 hover:cursor-pointer hover:brightness-50 relative"
          >
            <Image src={item.thumb} alt="" width={1080} height={1080} />

            <div className="absolute bottom-0 left-0 text-white text-3xl ml-5 mb-5 font-medium">
              {item.title}
            </div>

            <button
              type="button"
              className="absolute bottom-0 right-0 text-white text-2xl mr-5 mb-5 font-medium bg-zinc-700 rounded-md p-2 border-[1px] border-zinc-500/50"
            >
              VIEW
            </button>
          </div>
        ))}
      </div>

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
    </div>
  );
}
