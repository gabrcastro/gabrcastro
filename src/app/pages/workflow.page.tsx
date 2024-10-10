import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

export function WorkflowPage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div className="w-full h-full p-10 flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h1 className="text-white font-medium text-5xl uppercase text-center mt-10">
          {Constants.WORKFLOW}
        </h1>
      </motion.div>

      <div className="flex flex-row gap-10 w-full items-center relative">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[50%] items-start justify-start px-10 py-10 "
        >
          <div className="flex justify-center items-center h-screen">
            <Image
              src={"/images/dev.jpg"}
              alt="Profile Picture"
              width={1080}
              height={1080}
              className="w-[70%] h-[50%] rounded-full object-cover border-[2px] border-zinc-400"
            />
          </div>
        </motion.div>
        {/* 
        <Image
          src={"/gifs/animation.gif"}
          alt="Profile Picture"
          width={150}
          height={150}
          className="absolute right-0 top-0 mt-20 mr-20"
        /> */}

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[40%] items-start justify-start px-10 py-10"
        >
          <div className="flex flex-col gap-8">
            <span className="text-white text-2xl text-start">
              DESENVOLVIMENTO
            </span>
            {Constants.FLOWSDEV.map((item) => (
              <span key={item.index} className="flex flex-col">
                <div className="flex gap-3">
                  <span
                    className="text-white text-2xl uppercase"
                    style={{ fontFamily: lastica.style.fontFamily }}
                  >
                    {item.index}
                  </span>
                  <span className="text-blue-600 text-2xl uppercase">
                    {item.label}
                  </span>
                </div>
                <span className="text-white text-base text-start">
                  {item.describe}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative flex flex-row gap-10 w-full items-center -mt-56">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[50%] items-start justify-start px-10 py-10 "
        >
          <div className="flex flex-col gap-8">
            <span className="text-white text-2xl text-end">
              DESIGN DE INTERFACES
            </span>
            {Constants.FLOWSUXUI.map((item) => (
              <span key={item.index} className="flex flex-col items-end pl-40">
                <div className="flex gap-3">
                  <span
                    className="text-white text-2xl uppercase"
                    style={{ fontFamily: lastica.style.fontFamily }}
                  >
                    {item.index}
                  </span>
                  <span className="text-blue-600 text-2xl uppercase">
                    {item.label}
                  </span>
                </div>
                <span className="text-white text-base text-end">
                  {item.describe}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[50%] items-start justify-start px-10 py-10 "
        >
          <div className="flex justify-center items-center h-screen">
            <Image
              src={"/images/uxui.jpg"}
              alt="Profile Picture"
              width={1080}
              height={1080}
              className="w-[70%] h-[50%] rounded-full object-cover border-[2px] border-zinc-400"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
