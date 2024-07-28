import { getCurrentYear } from "@/utils/get_current_year";
import { CopyrightIcon } from "lucide-react";

export function FooterComponent() {
  return (
    <div className="flex flex-row lg:flex-col gap-2">
      <span className="flex flex-row items-center gap-2 text-zinc-800 text-xs font-light">
        <CopyrightIcon className="text-zinc-800 size-3" />
        Copyright {getCurrentYear()}
      </span>
      <span className="text-zinc-800 text-xs font-light">
        Todos os direitos reservados
      </span>
    </div>
  );
}
