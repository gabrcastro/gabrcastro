"use client";

import clsx from "clsx";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  url: string;
  classes?: string;
}

export function LinkButton({ text, url, classes }: LinkButtonProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className={clsx(
        classes,
        "bg-gradient-to-r from-primary to-secondary min-w-10 w-full md:w-max ld:w-max px-7 py-2 flex items-center justify-center hover:brightness-95",
        "hover:text-base text-sm uppercase text-zinc-100 font-medium",
        "transition-all duration-300"
      )}
    >
      {text}
    </Link>
  );
}
