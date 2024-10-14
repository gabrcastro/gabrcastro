import { HomePage } from "./pages/home.page";
import { ProfilePage } from "./pages/profile.page";
import { Constants } from "@/utils/constants";
import { PortolioPage } from "./pages/portfolio.page";
import { RecomendationsPage } from "./pages/recomendation.page";
import localFont from "next/font/local";

const lastica = localFont({ src: "../../../public/fonts/lastica.ttf" });

export default function Application() {
  return (
    <main className="overflow-x-hidden overflow-y-auto  bg-center bg-cover bg-no-repeat bg-[url('/backgrounds/bg.png')]">
      {/* HOME PAGE */}
      <HomePage font={lastica} />

      {/*PROFILE*/}
      <ProfilePage font={lastica} />

      <div className="h-20" />

      {/* PORTFOLIO */}
      <PortolioPage font={lastica} />

      {/* RECOMENDATION */}
      <RecomendationsPage font={lastica} />

      {/* RECOMENDATION */}
      <footer className="p-10 w-full bg-zinc-100 flex items-center justify-between">
        <a href="/" className="text-gray-950 font-semibold text-xs md:text-lg">
          I&apos;m Gabriel
        </a>

        <div className="flex items-center justify-between gap-3">
          {/* <ul className="flex flex-row gap-10 text-gray-950 text-xs uppercase ml-20">
            {Constants.MENU.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="hover:opacity-80 hover:cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul> */}

          <ul className="hidden md:flex flex-row gap-10 text-gray-950 text-xs uppercase ml-20">
            {Constants.SOCIAL.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className="hover:opacity-80 hover:cursor-pointer"
                >
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span className="text-gray-950 text-xs ml-20 uppercase">
          Gabriel Castro {new Date().getFullYear().toString()}
        </span>
      </footer>

      {/* <a
        href="#home"
        className="absolute top-0 right-0 mt-10 mr-10 text-zinc-700 text-2xl flex items-center justify-center bg-zinc-50 rounded-full border-[1px] border-zinc-400 p-3"
      >
        <FaArrowUp />
      </a> */}
    </main>
  );
}
