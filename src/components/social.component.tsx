"use client";

import { useMobile } from "@/hooks/use_mobile";
import { urls } from "@/utils/urls";
import clsx from "clsx";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

type SocialLi = {
  icon: React.ReactNode;
  link: string;
};

export function Social() {
  const links: SocialLi[] = [
    {
      icon: <FaLinkedin className="text-zinc-800 size-6 hover:text-primary" />,
      link: urls.LINKEDIN,
    },
    {
      icon: <FaGithub className="text-zinc-800 size-6 hover:text-primary" />,
      link: urls.GTIHUB,
    },
    {
      icon: <FaYoutube className="text-zinc-800 size-6 hover:text-primary" />,
      link: urls.YOUTUBE,
    },
    {
      icon: (
        <FaSquareXTwitter className="text-zinc-800 size-6 hover:text-primary" />
      ),
      link: urls.X,
    },
  ];

  const isMobile = useMobile();
  console.log(isMobile);
  return (
    <ul
      className={clsx(
        "flex-row w-min h-min flex item-center justify-center gap-5"
      )}
    >
      {links.map((link) => (
        <li key={link.link + link.icon}>
          <a href={link.link} target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
