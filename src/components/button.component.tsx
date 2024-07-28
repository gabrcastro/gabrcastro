"use client";

import clsx from "clsx";

interface ButtonProps {
  text: string;
  action: () => void;
  classes?: string;
}

export function Button({ text, action, classes }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={action}
      className={clsx(
        classes,
        "bg-gradient-to-r from-[#1cb5de] to-[#1bcdc2] rounded-full min-w-10 px-7 py-2 flex items-center justify-center hover:brightness-95",
        "hover:text-base text-sm uppercase text-zinc-100 font-medium",
        "transition-all duration-300"
      )}
    >
      {text}
    </button>
  );
}
