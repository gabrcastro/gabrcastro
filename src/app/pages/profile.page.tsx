import * as motion from "framer-motion/client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

export function ProfilePage(props: { font: NextFont }) {
  const lastica = props.font;
  return (
    <div className="w-full h-full flex flex-row gap-5">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[40%] flex flex-col items-start justify-between p-14"
      >
        <span className="text-zinc-900 text-3xl font-semibold uppercase mb-7">
          ABOUT ME
        </span>
        <span className="text-zinc-900 text-lg font-semibold">
          I am a passionate programmer, focused on creating innovative digital
          solutions for web and mobile development. I enjoy facing new
          challenges and constantly improving my skills to stay up-to-date with
          market trends. My goal is to develop products that positively impact
          people&apos;s lives.
        </span>
        <Image
          src={"/images/arrows.svg"}
          alt=""
          width={1080}
          height={500}
          className="mt-32 ml-32 w-[40%] h-[40%]"
        />
      </motion.div>

      <motion.div className="w-[40%] flex flex-col items-item justify-center p-14">
        <Image
          src={"/images/profile-pic.svg"}
          alt=""
          width={1080}
          height={1080}
          className="w-full"
        />
      </motion.div>

      <motion.div className="w-[40%] flex flex-col gap-10 items-start justify-end p-14">
        <span className="text-zinc-900 text-lg font-semibold">
          {/* Com +3 anos de experiência, me especializei em trabalhar com
          desenvolvimento web, especificamente Typescript, React.js. Também já
          desenvolvi soluções mobile utilizando Flutter. Recentemente estou
          adquirindo experiência no desenvolvimento Back-End com C# e .NET. */}
          With +3 years of experience, I specialize in working with web
          development, specifically Typescript, React.js. I have also developed
          mobile solutions using Flutter. Recently I&apos;ve been recently
          gaining experience in Back-End development with C# and .NET.
        </span>

        <span className="text-zinc-900 text-lg font-semibold">
          {/* Também atuo no desenvolvimento de design de interfaces. Desde
          interfaces de aplicações móveis como também web. */}
          I also work in interface design development. From mobile and web
          application interfaces.
        </span>
      </motion.div>
    </div>
  );
}
