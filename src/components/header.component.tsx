"use client";

import { useMobile } from "@/app/hooks/use_mobile";
import { useMenuStore } from "@/app/state/menu.store";
import { urls } from "@/utils/urls";
import clsx from "clsx";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    // <div className="w-full bg-white block md:fixed">
    <nav className="relative w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition-all duration-300">
      <a href="/" className="absolute left-0 top-0 ml-6 mt-6 mb-4 md:mb-4">
        <Image
          src={"logo.svg"}
          alt="Gabriel Castro Logo"
          width={1000}
          height={1000}
          className="w-32 md:w-40"
        />
      </a>
      {/* <button
          type="button"
          onClick={toggleMenu}
          className="absolute right-0 top-0 inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg mt-2 mr-4"
        >
          <MenuIcon className="size-6 text-zinc-800" />
        </button> */}
      <ul className="w-full h-full pt-16 md:py-4 flex flex-row gap-10 items-center justify-center">
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
    </nav>
    //   <div
    //     className={clsx(
    //       isOpen
    //         ? "scale-y-100 opacity-100 visible"
    //         : "scale-y-0 opacity-0 invisible",
    //       "origin-top transition-transform duration-300 ease-in-out text-center mt-4 md:mt-2 text-zinc-800"
    //     )}
    //   >
    //     <ul className="w-full h-full p-4 flex flex-col md:flex-row gap-4 items-center justify-center">
    //       {links.map((link) => (
    //         <li
    //           key={link.route + link.title}
    //           className={clsx(
    //             "hover:text-primary text-xs uppercase",
    //             link.route === pathname
    //               ? "font-bold text-primary"
    //               : "text-zinc-900"
    //           )}
    //         >
    //           <a href={link.route} onClick={toggleMenu}>
    //             {link.title}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    //   classNameName={clsx(
    //     isMobile ? "justify-between" : "justify-center",
    //     "relative w-full h-full flex item-center"
    //   )}
    // >
    //   {isOpen ? (
    //     <div classNameName="fixed z-[999] h-full w-full bg-zinc-50 overflow-y-hidden">
    //       <div
    //         classNameName={clsx(
    //           "flex flex-col items-center justify-around w-screen h-full gap-20"
    //         )}
    //       >
    //         <div classNameName="flex flex-row justify-between items-center w-full">
    //           <a
    //             href="/"
    //             classNameName="block md:absolute left-0 top-0 ml-6 mt-6 mb-4 md:mb-4"
    //           >
    //             <Image
    //               src={"logo.svg"}
    //               alt="Gabriel Castro Logo"
    //               width={150}
    //               height={100}
    //             />
    //           </a>

    //           <button
    //             onClick={toggleMenu}
    //             classNameName="text-zinc-900 focus:outline-none mr-6 mt-4"
    //           >
    //             {isOpen ? (
    //               <X classNameName="size-6 text-zinc-800" />
    //             ) : (
    //               <MenuIcon classNameName="size-6 text-zinc-800" />
    //             )}
    //           </button>
    //         </div>
    //         <ul classNameName="w-full h-full p-4 flex flex-col gap-4 items-center justify-center mt-20">
    //           {links.map((link) => (
    //             <li
    //               key={link.route + link.title}
    //               classNameName={clsx(
    //                 "hover:text-primary text-xs uppercase",
    //                 link.route === pathname
    //                   ? "font-bold text-primary"
    //                   : "text-zinc-900"
    //               )}
    //             >
    //               <a href={link.route} onClick={toggleMenu}>
    //                 {link.title}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //         <div classNameName="mb-10">
    //           <FooterSocial />
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div
    //       classNameName={clsx(
    //         isMobile ? "justify-between" : "justify-center",
    //         "relative w-full h-min flex item-center"
    //       )}
    //     >
    //       <a
    //         href="/"
    //         classNameName="block md:absolute left-0 top-0 ml-6 mt-6 mb-4 md:mb-4"
    //       >
    //         <Image
    //           src={"logo.svg"}
    //           alt="Gabriel Castro Logo"
    //           width={150}
    //           height={100}
    //         />
    //       </a>

    //       {isMobile ? (
    //         <button
    //           onClick={toggleMenu}
    //           classNameName="text-zinc-900 focus:outline-none mr-6 mt-4"
    //         >
    //           {isOpen ? (
    //             <X classNameName="size-6 text-zinc-800" />
    //           ) : (
    //             <MenuIcon classNameName="size-6 text-zinc-800" />
    //           )}
    //         </button>
    //       ) : (
    //         <ul classNameName="gap-7 px-6 py-3 mt-2 rounded-b-3xl min-h-11 hidden md:flex">
    //           {links.map((link) => (
    //             <div
    //               key={link.route + link.title}
    //               classNameName="flex flex-col items-center justify-center"
    //             >
    //               <li
    //                 classNameName={clsx(
    //                   "hover:text-primary text-xs uppercase",
    //                   link.route === pathname
    //                     ? "font-bold text-primary"
    //                     : "text-zinc-900"
    //                 )}
    //               >
    //                 <a href={link.route}>{link.title}</a>
    //               </li>
    //             </div>
    //           ))}
    //         </ul>
    //       )}
    //       {/* <ul classNameName=" gap-7 px-6 py-3 mt-2 rounded-b-3xl min-h-11 hidden md:flex">
    //     {links.map((link) => (
    //       <div
    //       key={link.route + link.title}
    //       classNameName="flex flex-col items-center justify-center"
    //       >
    //       <li
    //       classNameName={clsx(
    //         "hover:text-primary text-xs uppercase",
    //         link.route === pathname
    //         ? "font-bold text-primary"
    //         : "text-zinc-900"
    //         )}
    //         >
    //         <a href={link.route}>{link.title}</a>
    //         </li>
    //         </div>
    //         ))}
    //         </ul> */}
    //     </div>
    //   )}
    // </div>
  );
}
