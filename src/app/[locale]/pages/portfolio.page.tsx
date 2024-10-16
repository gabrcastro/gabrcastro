"use client";

import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { useScroll, useSpring, useTransform } from "framer-motion";

export function PortolioPage(props: { font: NextFont }) {
  const lastica = props.font;
  const t = useTranslations("portfolio");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    // <div
    //   id="portfolio"
    //   className="w-full h-fullflex flex-col items-start bg-zinc-500/0"
    // >
    //   <motion.div
    //     initial={{ opacity: 0, x: 100, scale: 0 }}
    //     whileInView={{ opacity: 1, x: 0, scale: 1 }}
    //     exit={{ opacity: 0, x: 100, scale: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="w-full flex flex-col p-14 "
    //   >
    //     <span className="w-full text-center md:text-start text-zinc-900 text-2xl font-semibold uppercase mb-7">
    //       {t("title")}
    //     </span>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 10, scale: 0.7 }}
    //     whileInView={{ opacity: 1, y: 0, scale: 1 }}
    //     exit={{ opacity: 0, y: 10, scale: 0.7 }}
    //     transition={{ duration: 0.5 }}
    //     viewport={{ once: true, amount: 0.2 }}
    //     className="w-full flex flex-row flex-wrap items-start justify-between gap-10 pt-5 pb-32 px-10 lg:px-32 "
    //   >
    //     {Constants.DEV_PROJECTS.map((item) => (
    //       <div
    //         key={item.url}
    //         className={`w-full md:w-[44%] lg:w-[30%] min-h-[250px] rounded-3xl  hover:cursor-pointer hover:brightness-75 relative bg-cover bg-no-repeat bg-center`}
    //         style={{ backgroundImage: `url(${item.thumb})` }}
    //         onMouseEnter={() => setHoveredItem(item.url)}
    //         onMouseLeave={() => setHoveredItem(null)}
    //       >
    //         {hoveredItem === item.url && (
    //           <div
    //             className={`absolute bottom-0 left-0 ${
    //               item.light ? "text-zinc-950" : "text-white"
    //             } text-lg ml-5 mb-5 font-medium z-20`}
    //           >
    //             {item.title}
    //           </div>
    //         )}

    //         {/* AlertDialog */}
    //         {hoveredItem === item.url && (
    //           <AlertDialog>
    //             <AlertDialogTrigger className="text-white bg-zinc-900 text-4xl rounded-full p-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    //               <GoArrowUpRight />
    //             </AlertDialogTrigger>
    //             <AlertDialogContent className="p-0 w-[90%] lg:w-full min-w-0 lg:min-w-[1080px] max-h-[700px] overflow-auto bg-zinc-900 border-none">
    //               <AlertDialogHeader className="absolute w-full mt-7 p-5 flex items-end justify-end">
    //                 <AlertDialogCancel className="absolute top-0 right-0 mt-10 mr-5 text-xl text-zinc-950 font-semibold rounded-full bg-white">
    //                   <AiOutlineClose />
    //                 </AlertDialogCancel>
    //               </AlertDialogHeader>
    //               <Image
    //                 src={item.image}
    //                 alt=""
    //                 width={1080}
    //                 height={1080}
    //                 className="w-full h-full"
    //               />
    //             </AlertDialogContent>
    //           </AlertDialog>
    //         )}
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>
    <div
      id="portfolio"
      className="w-full h-full flex flex-col items-start bg-zinc-500/0"
    >
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col p-14 "
      >
        <span className="w-full text-center md:text-start text-zinc-900 text-2xl font-semibold uppercase mb-7">
          {t("title")}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.7 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-row flex-wrap items-start justify-between gap-10 pt-5 pb-32 px-10 lg:px-32 "
      >
        {Constants.DEV_PROJECTS.map((item) => (
          <motion.div
            key={item.url}
            className={`w-full md:w-[44%] lg:w-[30%] min-h-[250px] rounded-3xl relative bg-cover bg-no-repeat bg-center transition-transform duration-300 transform hover:scale-105 hover:brightness-75`}
            style={{ backgroundImage: `url(${item.thumb})` }}
            onMouseEnter={() => setHoveredItem(item.url)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === item.url && (
              <div
                className={`absolute bottom-0 left-0 ${
                  item.light ? "text-zinc-950" : "text-white"
                } text-lg ml-5 mb-5 font-medium z-20`}
              >
                {item.title}
              </div>
            )}

            {/* AlertDialog */}
            {hoveredItem === item.url && (
              <AlertDialog>
                <AlertDialogTrigger className="text-white bg-zinc-900 text-4xl rounded-full p-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <GoArrowUpRight />
                </AlertDialogTrigger>
                <AlertDialogContent className="p-0 w-[90%] lg:w-full min-w-0 lg:min-w-[1080px] max-h-[700px] overflow-auto bg-zinc-900 border-none">
                  <AlertDialogHeader className="absolute w-full mt-7 p-5 flex items-end justify-end">
                    <AlertDialogCancel className="absolute top-0 right-0 mt-10 mr-5 text-xl text-zinc-950 font-semibold rounded-full bg-white z-10">
                      <AiOutlineClose />
                    </AlertDialogCancel>
                  </AlertDialogHeader>
                  <motion.img
                    src={item.image}
                    alt=""
                    width={1080}
                    height={1080}
                    initial={{ scale: 0.9, opacity: 0 }} // começa pequeno e invisível
                    animate={{ scale: 1, opacity: 1 }} // cresce e aparece
                    exit={{ scale: 0.9, opacity: 0 }} // efeito de contração ao sair
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  />
                </AlertDialogContent>
              </AlertDialog>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
