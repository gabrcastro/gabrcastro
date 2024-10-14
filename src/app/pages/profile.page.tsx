import { Constants } from "@/utils/constants";
import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

export function ProfilePage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[90%] md:w-[70%] lg:w-[40%] flex flex-col items-center md:items-start text-center md:text-start justify-between p-14"
        >
          <span className="text-zinc-900 text-2xl font-semibold uppercase mb-7">
            ABOUT ME
          </span>
          <span className="text-zinc-900 text-base">
            I am a passionate programmer, focused on creating innovative digital
            solutions for web and mobile development. I enjoy facing new
            challenges and constantly improving my skills to stay up-to-date
            with market trends. My goal is to develop products that positively
            impact people&apos;s lives.
          </span>
          <span className="text-zinc-900 text-base mt-10">
            With +3 years of experience, I specialize in working with web
            development, specifically Typescript, React.js. I have also
            developed mobile solutions using Flutter. Recently I&apos;ve been
            recently gaining experience in Back-End development with C# and
            .NET. I also work in interface design development. From mobile and
            web application interfaces.
          </span>
        </motion.div>

        <motion.div className="w-[80%] md:w-[60%] lg:w-[30%] flex flex-col items-item justify-center p-14 -mt-20 md:mt-32">
          <Image
            src={"/images/profile-pic.svg"}
            alt=""
            width={1080}
            height={1080}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* What I do */}
      <div className="relative w-full overflow-x-auto md:overflow-hidden py-14 px-10 bg-zinc-500/5">
        <motion.div
          className="flex flex-row items-center gap-32"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }} // deslizar a lista para a esquerda
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // animação contínua
        >
          {Constants.WHATIDO.concat(Constants.WHATIDO).map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-center justify-start min-w-[400px]"
            >
              <span
                className="text-gray-950 text-3xl mr-5"
                style={{ fontFamily: lastica.style.fontFamily }}
              >
                {item.index}
              </span>
              <span className="text-gray-950 text-xl uppercase">
                {item.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
