import { CardComponent } from "@/components/card.component";
import { ViewButton } from "@/components/view_button.component";
import { ProjectsType } from "@/domain/model/models";
import { projectUrls } from "@/utils/urls";
import Image from "next/image";

export function ProjectsSession() {
  const projects: ProjectsType[] = [
    {
      image: "/images/projects/mopox.png",
      link: projectUrls.MOPOX,
      title: "Mopox",
      subtitle: "Pomodoro & Tarefas",
      description:
        "A ideia do Mopox é ser uma aplicação simples para ajudar a manter o foco em atividades específicas.",
    },
    {
      image: "/images/projects/planner.png",
      link: projectUrls.PLANNER,
      title: "Plann.er",
      subtitle: "Planejador de viagens",
      description: "Planner é uma plataforma para planejamento de viagens.",
    },
  ];

  return (
    <div className="w-screen flex items-center justify-center border-y-[.5px] border-y-zinc-200 ">
      {/* projects */}
      <div
        className={
          "flex flex-col items-center justify-center pt-7 h-full w-full mx-4 md:mx-16 border-x-[.5px] border-x-zinc-200 "
        }
      >
        <h1 className="text-zinc-800 text-left text-2xl md:text-3xl font-bold">
          Projects
        </h1>

        <p className="w-[80%] sm:w-[60%] text-sm text-center mt-5">
          Aqui estão alguns dos meus projetos em desenvolvimento e também
          concluídos. Coloco aqui não apenas projetos web, como também
          aplicativos ou outros que considero importante.
        </p>

        <div className="flex flex-row flex-wrap items-start justify-center  mt-10 mb-0 md:mb-32 px-0 md:px-32 gap-4 w-full h-full overflow-y-auto">
          {projects.map((project) => (
            <div key={project.link} className="md:py-0 last:mb-5">
              <CardComponent
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                url={project.link}
              >
                <Image
                  src={project.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </CardComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
