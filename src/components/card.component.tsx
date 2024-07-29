import React from "react";
import { ViewButton } from "./view_button.component";

interface CardProps {
  children: React.ReactNode;
  url: string;
  title: string;
  subtitle: string;
  description: string;
}

export function CardComponent({
  children,
  url,
  title,
  subtitle,
  description,
}: CardProps) {
  return (
    <div className="flex flex-col w-min border-[.5px] border-zinc-300 p-2">
      <div className="w-fit min-w-80 min-h-[22rem] h-min flex flex-col items-start justify-start">
        {children}
        <div className="relative flex flex-col items-start justify-start w-full px-2 mt-3">
          <div className="flex flex-row items-start text-zinc-700 justify-between w-full">
            <span className="text-base font-bold ">{title}</span>

            <ViewButton link={url} />
          </div>
          <span className="text-sm font-light">{subtitle}</span>
          <span className="text-sm font-light mt-3 text-zinc-600">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
