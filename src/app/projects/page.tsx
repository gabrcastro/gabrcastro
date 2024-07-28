import { CardComponent } from "@/components/card.component";
import { ViewButton } from "@/components/view_button.component";
import { projectUrls, urls } from "@/utils/urls";
import Image from "next/image";

interface ProjectsType {
  image: string;
  link: string;
}

export default function Projects() {
  const projects: ProjectsType[] = [
    { image: "/images/projects/mopox.png", link: projectUrls.MOPOX },
    { image: "/images/projects/planner.png", link: projectUrls.PLANNER },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 w-full h-full">
      <h1 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-3xl md:text-4xl font-bold">
        Projects
      </h1>

      <div className="flex flex-row flex-wrap items-start justify-center  mt-10 mb-0 md:mb-32 px-0 md:px-32 gap-4 w-full h-full overflow-y-auto">
        {projects.map((project) => (
          <div key={project.link} className="py-2 md:py-0 last:mb-32">
            <CardComponent>
              <Image
                src={project.image}
                alt=""
                width={1000}
                height={1000}
                className="rounded-2xl w-[90%] md:w-full"
              />

              <div className="absolute bottom-0 right-0 mb-4 mr-8">
                <ViewButton link={project.link} />
              </div>
            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
}
