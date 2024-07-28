"use client";

import { urls } from "@/utils/urls";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderLi = {
  title: string;
  route: string;
};

interface HeaderProps {
  router: string;
}

export function Header() {
  const pathname = usePathname();

  const links: HeaderLi[] = [
    { title: "Home", route: urls.HOME },
    { title: "Projetos", route: urls.PROJECTS },
    { title: "Recomendações", route: urls.RECOMENDATIONS },
  ];

  return (
    <div className="relative w-full h-min flex item-center justify-start md:justify-center ">
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

      <ul className=" gap-7 px-6 py-3 mt-2 rounded-b-3xl min-h-11 hidden md:flex">
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
    </div>
  );
}
