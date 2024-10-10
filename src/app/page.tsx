"use client";

import { useEffect } from "react";
import { useMobile } from "../hooks/use_mobile";
import { useMenuStore } from "../state/menu.store";
import { HomeSession } from "./pages/home.page";
import { ProjectsSession } from "./pages/workflow.page";
import { FooterComponent } from "@/components/footer.component";
import { Recomended } from "./pages/recomendation.page";

export default function Home() {
  const isMobile = useMobile();
  const { setIsOpen } = useMenuStore((state) => state);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, setIsOpen]);

  return (
    <div
      className={
        "flex flex-col items-center justify-start lg:items-start w-full h-full overflow-y-auto"
      }
    >
      <HomeSession />

      <ProjectsSession />

      <Recomended />

      <FooterComponent />
    </div>
  );
}
