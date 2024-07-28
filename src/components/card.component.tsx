import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export function CardComponent({ children }: CardProps) {
  return (
    <div className="flex flex-col rounded-xl w-min">
      <div className="relative rounded-2xl w-96 h-min flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
