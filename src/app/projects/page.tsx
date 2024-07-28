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
      <h1 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-4xl font-bold">
        Projects
      </h1>

      <div className="flex flex-row items-start mt-10 mb-32 px-32 justify-center flex-wrap gap-4 w-full h-full overflow-y-auto">
        {projects.map((project) => (
          <div key={project.link}>
            <CardComponent>
              <Image
                src={project.image}
                alt=""
                width={1000}
                height={1000}
                className="rounded-2xl"
              />

              <div className="absolute bottom-0 right-0 mb-4 mr-4">
                <ViewButton link={project.link} />
              </div>
            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
}
