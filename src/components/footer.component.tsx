import { getCurrentYear } from "@/utils/get_current_year";
import { AiOutlineCopyright } from "react-icons/ai";
import { Social } from "./social.component";

export function FooterComponent() {
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center pt-10 pb-5 border-t-[.5px] border-t-zinc-200">
      <Social />
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:justify-between px-28 mt-5">
        <span className="text-zinc-800 text-xs font-light mb-5 md:mb-0 text-center">
          Photo by{" "}
          <a href="https://unsplash.com/@jeshoots?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            JESHOOTS.COM
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/an-open-empty-notebook-on-a-white-desk-next-to-an-iphone-and-a-macbook-pUAM5hPaCRI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </span>

        <div className="flex flex-row items-start gap-2 mb-3">
          <span className="flex flex-row items-center gap-2 text-zinc-800 text-xs font-light">
            <AiOutlineCopyright className="text-zinc-800 size-4 md:size-3" />
            {getCurrentYear()}
          </span>
          <span className="text-zinc-800 text-xs font-light">
            Todos os direitos reservados
          </span>
        </div>
      </div>
    </div>
  );
}
