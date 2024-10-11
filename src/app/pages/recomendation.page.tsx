import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { Constants } from "@/utils/constants";

export function RecomendationsPage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <main
      id="recommended"
      className="w-full h-full py-10 flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/bg2.png')]"
    >
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h1 className="text-white font-medium text-5xl uppercase text-center mt-10">
          {Constants.RECOMENDATIONS}
        </h1>
      </motion.div>

      <div className="flex flex-row items-start justify-around mt-20">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[40%] items-start justify-start px-10 py-10"
        >
          <span
            className="text-white text-2xl mb-10 uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {Constants.BOOKS}
          </span>
          <div className="flex flex-col gap-8">
            {Constants.RECOMEND_LINKS.map((item) => (
              <span key={item.link} className="hover:opacity-65 uppercase">
                <a href={item.link} className="text-white text-base text-start">
                  {item.title}
                </a>
              </span>
            ))}
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[40%] items-start justify-start px-10 py-10"
        >
          <span
            className="text-white text-2xl mb-10 uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            CURSOS
          </span>
          <div className="flex flex-col gap-8">
            {Constants.RECOMEND_LINKS.map((item) => (
              <span key={item.link} className="hover:opacity-65 uppercase">
                <a href={item.link} className="text-white text-base text-start">
                  {item.title}
                </a>
              </span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </main>
  );
}
