import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CgDribbble, CgMenuRight } from "react-icons/cg";
import * as texts from "@/utils/texts.json";
import { useTranslations } from "next-intl";

export function HomePage(props: { font: NextFont }) {
  const lastica = props.font;
  const t = useTranslations("home");

  return (
    <div id="home" className="relative w-full h-full flex flex-col">
      {/* <iframe
        className="absolute w-screen h-screen opacity-10"
        src="https://lottie.host/embed/e24daa09-2076-46e5-843e-48c1241bf4ab/tJwxZcaWRb.json"
      ></iframe> */}

      {/* MENU */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-row justify-between items-center p-10"
      >
        <a
          href="/"
          className="text-gray-950 font-semibold text-base md:text-lg"
        >
          {t("logo")}
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger className="-mr-5 text-gray-900 uppercase text-2xl py-1 px-3 hover:opacity-80 hover:cursor-pointer">
            <CgMenuRight />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-14">
            <DropdownMenuItem>{t("en")}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{t("pt")}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* NAME */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="ml-0 w-full flex flex-col items-center justify-center mt-20"
      >
        <div className="w-full md:w-[70%] flex flex-col items-center justify-center">
          <span
            className="w-full text-center md:text-start text-gray-950 text-2xl md:text-3xl lg:text-4xl uppercase"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {t("title")}
          </span>

          <div className="h-[1px] w-[80%] md:w-full  bg-zinc-500 mt-5" />

          <div className="w-[80%] md:w-full flex flex-col items-center md:items-end justify-center mt-4">
            <span className="text-gray-950 text-base text-center md:text-end uppercase">
              {t("subtitle")}
            </span>
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-col items-center md:items-start justify-center mt-20">
          <p className="text-gray-950 text-base md:text-lg font-semibold uppercase mb-4">
            {t("workTitle")}
          </p>
          <p className="text-gray-950 text-base md:text-lg  mb-2">
            gabrielcastromail@gmail.com
          </p>
          <p className="text-gray-950 text-base md:text-lg uppercase mb-2">
            +55 74 9 8859 1670
          </p>
          <div className="flex flex-row gap-5 items-center justify-start text-zinc-700 mt-5 z-10">
            {texts.social.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                className={
                  "hover:cursor-pointer hover:opacity-80 text-2xl block"
                }
              >
                {social.title === "linkedin" ? (
                  <FaLinkedin />
                ) : social.title === "github" ? (
                  <FaGithub />
                ) : social.title === "behance" ? (
                  <FaBehance />
                ) : (
                  <CgDribbble />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="w-[70%] hidden md:flex justify-end items-end -mt-5">
          <span className="flex items-center gap-3 text-end text-gray-950 text-xs md:text-base mb-2">
            {t("scrolldown")}
            <AiOutlineArrowDown className="font-extralight" />
          </span>
        </div>
      </motion.div>

      {/* RESUME */}
      <div className="w-full flex flex-row items-center justify-center md:justify-end mt-24 gap-10 md:gap-20 bg-zinc-500/5 py-14 px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-row items-center justify-start"
        >
          <span
            className="text-gray-950 text-2xl md:text-3xl mr-5"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {t("experience.amount")}
          </span>
          <span className="text-gray-950 text-lg md:text-xl uppercase">
            {t("experience.label")}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-row items-center justify-start"
        >
          <span
            className="text-gray-950 text-2xl md:text-3xl mr-5"
            style={{ fontFamily: lastica.style.fontFamily }}
          >
            {t("projects.amount")}
          </span>
          <span className="text-gray-950 text-lg md:text-xl uppercase">
            {t("projects.label")}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
