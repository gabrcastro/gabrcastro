import { LinkButton } from "@/components/link_button.component";
import { TechsType } from "@/domain/model/models";
import { useMobile } from "@/hooks/use_mobile";
import { useMenuStore } from "@/state/menu.store";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import { FaAws, FaCss3, FaGitAlt, FaHtml5 } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import {
  RiFlutterFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiFirebase, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export function HomeSession() {
  const isMobile = useMobile();
  const { setIsOpen } = useMenuStore((state) => state);

  const techs: TechsType[] = [
    {
      svg: <SiTypescript className="text-zinc-600 size-5" />,
      text: "Typescript",
    },
    {
      svg: <RiNextjsFill className="text-zinc-600 size-5" />,
      text: "Next.js",
    },
    {
      svg: <RiReactjsFill className="text-zinc-600 size-5" />,
      text: "React.js",
    },
    {
      svg: <SiRedux className="text-zinc-600 size-5" />,
      text: "Redux",
    },
    {
      svg: <RiTailwindCssFill className="text-zinc-600 size-5" />,
      text: "Tailwind CSS",
    },

    {
      svg: <FaHtml5 className="text-zinc-600 size-5" />,
      text: "HTML",
    },

    {
      svg: <FaCss3 className="text-zinc-600 size-5" />,
      text: "CSS",
    },

    {
      svg: <FaGitAlt className="text-zinc-600 size-5" />,
      text: "Git",
    },

    {
      svg: <RiFlutterFill className="text-zinc-600 size-5" />,
      text: "Flutter",
    },

    {
      svg: <SiFirebase className="text-zinc-600 size-5" />,
      text: "Firebase",
    },

    {
      svg: <FaAws className="text-zinc-600 size-5" />,
      text: "AWS",
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, setIsOpen]);

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="w-full border-x-[.5px] border-x-zinc-200 mx-16">
        <div
          className={
            "flex flex-col items-center justify-start lg:items-start h-full mx-20"
          }
        >
          <div className="relative w-full flex flex-col items-center justify-between md:flex-row">
            <div className={"ml-0 mt-20"}>
              <h1 className="text-zinc-700 text-xs md:text-lg font-light ml-1 mb-2">
                Olá, eu sou
              </h1>
              <h1 className="text-zinc-700 text-3xl md:text-4xl lg:text-5xl font-bold">
                Gabriel Castro
              </h1>

              <p
                className={
                  "mt-4 text-zinc-700 text-sm font-light text-start ml-1"
                }
              >
                Sou um Engenheiro de Software, especializado{" "}
                {!isMobile && <br className="block xl:hidden" />}
                em Front-End
                {!isMobile && <br className="hidden xl:block" />} com mais de 3+
                de experiência.
              </p>

              <LinkButton
                url={"https://www.linkedin.com/in/gabrielsouzacastro/"}
                text="Entre em contato"
                classes="mt-5"
              />
            </div>

            <div className={"relative mt-10 ml-24 md:-ml-56 "}>
              <div className="z-50 absolute left-0 bottom-0 mb-14 -ml-24 rounded-none px-5 py-3 bg-white flex items-center gap-2 shadow-xl">
                <span
                  className={clsx(
                    "bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text text-xl md:text-3xl font-bold"
                  )}
                >
                  3+
                </span>
                <span className="text-zinc-800 text-xs md:text-base font-light">
                  Experiência
                </span>
              </div>

              <Image
                src={"/images/gabrcastro_light.png"}
                alt="Person"
                width={1000}
                height={1000}
                className="w-52 lg:w-80"
              />
            </div>
          </div>

          <div className=" w-[80%] lg:w-[70%] mb-20 mt-32">
            <span className="flex flex-row gap-3 text-sm text-zinc-700 font-light">
              Eu tenho experiência com as seguintes tecnologias
              <FiArrowDownRight className="text-zinc-700 size-5" />
            </span>

            <div className="flex flex-wrap justify-between md:justify-start gap-3 mt-7 md:mt-5">
              {techs.map((tech) => (
                <div
                  key={tech.text + 1}
                  className={clsx(
                    "flex flex-row gap-2 text-zinc-800 text-sm font-light items-center justify-center"
                  )}
                >
                  {tech.svg}
                  {tech.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
