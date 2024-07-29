import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ViewButtonProps {
  link: string;
}

export function ViewButton({ link }: ViewButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="px-3 py-2 bg-zinc-50 hover:bg-zinc-300 border-[.3px] border-zinc-300 opacity-100 flex items-center justify-between gap-2 transition-all duration-300"
    >
      <span className="text-zinc-800 text-xs font-normal">Visualizar</span>
      <FiArrowUpRight className="text-zinc-800 size-4" />
    </Link>
  );
}
