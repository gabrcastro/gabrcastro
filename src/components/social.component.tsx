import { urls } from "@/utils/urls";
import {
  DiscIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

type SocialLi = {
  icon: React.ReactNode;
  link: string;
};

export function Social() {
  const links: SocialLi[] = [
    {
      icon: (
        <LinkedinIcon className="text-zinc-800 size-6 hover:text-primary" />
      ),
      link: urls.LINKEDIN,
    },
    {
      icon: <GithubIcon className="text-zinc-800 size-6 hover:text-primary" />,
      link: urls.GTIHUB,
    },
    {
      icon: <YoutubeIcon className="text-zinc-800 size-6 hover:text-primary" />,
      link: urls.YOUTUBE,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="33px"
          height="30px"
          className="fill-zinc-800 size-6 hover:fill-primary"
        >
          <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
        </svg>
      ),
      link: urls.X,
    },
  ];

  return (
    <ul className="w-min h-min flex  flex-row md:flex-col lg:flex-col item-center justify-center gap-5">
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
