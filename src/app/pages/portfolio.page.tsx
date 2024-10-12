"use client";

import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export function PortolioPage(props: { font: NextFont }) {
  const lastica = props.font;

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      id="portfolio"
      className="w-full h-fullflex flex-col items-start bg-zinc-500/10"
    >
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col p-14"
      >
        <span className="text-zinc-900 text-3xl font-semibold uppercase mb-7">
          LATEST PROJECTS
        </span>

        <ul className="w-full flex gap-10 items-center justify-start text-zinc-900 text-lg uppercase my-5">
          <li className="hover:font-bold hover:cursor-pointer font-bold">
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

      <div className="w-full flex flex-row flex-wrap items-start justify-between gap-10 p-10 ">
        {Constants.DEV_PROJECTS.map((item) => (
          <div
            key={item.url}
            className="w-[30%] min-h-[300px] rounded-3xl  hover:cursor-pointer hover:brightness-75 relative bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${item.thumb})` }}
            onMouseEnter={() => setHoveredItem(item.url)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === item.url && (
              <div
                className={`absolute bottom-0 left-0 ${
                  item.light ? "text-zinc-950" : "text-white"
                } text-xl ml-5 mb-5 font-medium z-20`}
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
                <AlertDialogContent className="w-full min-w-[1080px] max-h-[700px] overflow-auto bg-zinc-900 border-none">
                  <AlertDialogHeader className="w-full flex items-end justify-end">
                    <AlertDialogCancel className="w-min text-xl text-white font-medium bg-transparent">
                      Fechar
                    </AlertDialogCancel>
                  </AlertDialogHeader>
                  <Image
                    src={item.image}
                    alt=""
                    width={1080}
                    height={1080}
                    className="w-full h-full"
                  />
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
