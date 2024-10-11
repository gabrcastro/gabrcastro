"use client";

import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

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

export function PortolioPage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div id="portfolio" className="w-full h-fullflex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col p-14"
      >
        <span className="text-zinc-900 text-3xl font-semibold uppercase mb-7">
          PROJECTS
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
            className="w-[30%] border-2 border-zinc-500/25 hover:cursor-pointer hover:brightness-50 relative"
          >
            <Image
              src={item.thumb}
              alt={item.title}
              width={1080}
              height={1080}
              className="w-full min-h-[290px] max-h-[290px] bg-cover bg-no-repeat bg-center"
            />

            <div className="absolute bottom-0 left-0 text-white text-3xl ml-5 mb-5 font-medium">
              {item.title}
            </div>

            <AlertDialog>
              <AlertDialogTrigger className="text-white text-4xl">
                VIEW
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
          </div>
        ))}
      </div>
    </div>
  );
}
