"use client";

import { useEffect, useState } from "react";
import { useMenuStore } from "../state/menu.store";

export function useMobile() {
  const { isOpen, setIsOpen } = useMenuStore((state) => state);
  const [isMobile, setIsMobile] = useState(false);

  const breakpointW = 768;

  useEffect(() => {
    function checkIsMobile() {
      if (window.innerWidth < breakpointW) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.addEventListener("resize", checkIsMobile);
    };
  }, [breakpointW, isOpen, setIsOpen]);

  return isMobile;
}
