"use client";

import { useMobile } from "@/app/hooks/use_mobile";
import { useMenuStore } from "@/app/state/menu.store";
import { urls } from "@/utils/urls";
import clsx from "clsx";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FooterSocial } from "./footer_social.component";

type HeaderLi = {
  title: string;
  route: string;
};

export function Header() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const { isOpen, setIsOpen } = useMenuStore((state) => state);
  const links: HeaderLi[] = [
    { title: "Home", route: urls.HOME },
    { title: "Projetos", route: urls.PROJECTS },
    { title: "Recomendações", route: urls.RECOMENDATIONS },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={clsx(
        isMobile ? "justify-between" : "justify-center",
        "relative w-full h-full flex item-center"
      )}
    >
      {isOpen ? (
        <div className="fixed z-[999] h-full w-full bg-zinc-50 overflow-y-hidden">
          <div
            className={clsx(
              "flex flex-col items-center justify-around w-screen h-full gap-20"
            )}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <a
                href="/"
                className="block md:absolute left-0 top-0 ml-6 mt-6 mb-4 md:mb-4"
              >
                <Image
                  src={"logo.svg"}
                  alt="Gabriel Castro Logo"
                  width={150}
                  height={100}
                />
              </a>

              <button
                onClick={toggleMenu}
                className="text-zinc-900 focus:outline-none mr-6 mt-4"
              >
                {isOpen ? (
                  <X className="size-6 text-zinc-800" />
                ) : (
                  <MenuIcon className="size-6 text-zinc-800" />
                )}
              </button>
            </div>
            <ul className="w-full h-full p-4 flex flex-col gap-4 items-center justify-center mt-20">
              {links.map((link) => (
                <li
                  key={link.route + link.title}
                  className={clsx(
                    "hover:text-primary text-xs uppercase",
                    link.route === pathname
                      ? "font-bold text-primary"
                      : "text-zinc-900"
                  )}
                >
                  <a href={link.route} onClick={toggleMenu}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mb-10">
              <FooterSocial />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            isMobile ? "justify-between" : "justify-center",
            "relative w-full h-min flex item-center"
          )}
        >
          <a
            href="/"
            className="block md:absolute left-0 top-0 ml-6 mt-6 mb-4 md:mb-4"
          >
            <Image
              src={"logo.svg"}
              alt="Gabriel Castro Logo"
              width={150}
              height={100}
            />
          </a>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-zinc-900 focus:outline-none mr-6 mt-4"
            >
              {isOpen ? (
                <X className="size-6 text-zinc-800" />
              ) : (
                <MenuIcon className="size-6 text-zinc-800" />
              )}
            </button>
          ) : (
            <ul className="gap-7 px-6 py-3 mt-2 rounded-b-3xl min-h-11 hidden md:flex">
              {links.map((link) => (
                <div
                  key={link.route + link.title}
                  className="flex flex-col items-center justify-center"
                >
                  <li
                    className={clsx(
                      "hover:text-primary text-xs uppercase",
                      link.route === pathname
                        ? "font-bold text-primary"
                        : "text-zinc-900"
                    )}
                  >
                    <a href={link.route}>{link.title}</a>
                  </li>
                </div>
              ))}
            </ul>
          )}
          {/* <ul className=" gap-7 px-6 py-3 mt-2 rounded-b-3xl min-h-11 hidden md:flex">
        {links.map((link) => (
          <div
          key={link.route + link.title}
          className="flex flex-col items-center justify-center"
          >
          <li
          className={clsx(
            "hover:text-primary text-xs uppercase",
            link.route === pathname
            ? "font-bold text-primary"
            : "text-zinc-900"
            )}
            >
            <a href={link.route}>{link.title}</a>
            </li>
            </div>
            ))}
            </ul> */}
        </div>
      )}
    </div>
  );
}
