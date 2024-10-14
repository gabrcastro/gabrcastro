import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useTranslations } from "next-intl";
import i18n from "@/i18n";

export function RecomendationsPage(props: { font: NextFont }) {
  const lastica = props.font;
  const t = useTranslations("recommendations");
  const t2 = useTranslations("recommendations.books");
  const books = [
    "book1",
    "book2",
    "book3",
    "book4",
    "book5",
    "book6",
    "book7",
    "book8",
  ] as const;
  return (
    <div
      id="portfolio"
      className="w-full h-fullflex flex-col items-start bg-zinc-500/5"
    >
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-start justify-start p-0 md:p-14"
      >
        <span className="text-zinc-900 text-2xl w-full text-center md:text-start font-semibold uppercase mb-7 mt-10 md:mt-5">
          {t("title")}
        </span>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mt-10">
          <div className="flex flex-col w-[90%] lg:w-[50%] items-center lg:items-start justify-start py-10 ml-0 md:ml-10">
            <span className="text-zinc-950 text-xl mb-10 uppercase">
              {t("booksTitle")}
            </span>
            <div className="flex flex-col items-center lg:items-start gap-8">
              {books.map((book, index) => (
                <span
                  key={index}
                  className="hover:opacity-65 uppercase text-center lg:text-start"
                >
                  <a
                    href={t2(`${book}.link`)}
                    rel="noopener noreferrer"
                    className="text-zinc-950 text-sm "
                  >
                    {t2(`${book}.title`)}
                  </a>
                </span>
              ))}
            </div>
          </div>

          <Image
            src={"/images/book.svg"}
            alt=""
            width={1080}
            height={1080}
            className="w-[27%] mt-32 mr-20 hidden lg:flex"
          />
        </div>
      </motion.div>
    </div>
  );
}
