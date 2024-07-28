import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ViewButtonProps {
  link: string;
}

export function ViewButton({ link }: ViewButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="px-3 py-2 rounded-lg bg-zinc-200 opacity-30 flex items-center justify-between gap-2 hover:opacity-100 transition-all duration-300"
    >
      <span className="text-zinc-800 text-xs font-normal">Visualizar</span>
      <ArrowUpRight className="text-zinc-800 size-4" />
    </Link>
  );
}
