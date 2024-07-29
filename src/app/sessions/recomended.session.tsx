import { RecomendationsType } from "@/domain/model/models";
import Image from "next/image";

export function Recomended() {
  const recomendations: RecomendationsType[] = [
    {
      title:
        "Código Limpo: Habilidades práticas do Agile Software – Robert Cecil",
      link: "https://amzn.to/4dlC6rJ",
    },
    {
      title:
        "O Programador Pragmático: De Aprendiz a Mestre — Dave Thomas e Andy Hunt",
      link: "https://amzn.to/4calt17",
    },
    {
      title: "Não me faça pensar — Steve Krug",
      link: "https://amzn.to/3SrfkXz",
    },
    {
      title:
        "Use a Cabeça!: Padrões de Projeto — Eric Freeman e Elisabeth Freeman com Kathy Sierra e Bert Bates",
      link: "https://amzn.to/46oFNuy",
    },
    {
      title: "Pai Rico, Pai Pobre, de Robert Kiyosaki",
      link: "https://amzn.to/4c3Kz1K",
    },
    {
      title: "O Poder do Hábito, de Charles Duhigg",
      link: "https://amzn.to/3WH27w5",
    },
    {
      title: "Quem pensa enriquece, de Napoleon Hill",
      link: "https://amzn.to/3Wo4suO",
    },
    {
      title: "A arte da guerra",
      link: "https://amzn.to/4dlnDfz",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start mx-4 lg:mx-28 gap-2 lg:gap-10">
      <div className="w-[90%] lg:w-[40%] flex flex-col items-center lg:items-start justify-center py-10 border-r-[0px] lg:border-r-[.5px] border-r-transparent lg:border-r-zinc-200">
        <h1 className="text-zinc-800 text-center lg:text-start text-2xl lg:text-3xl font-bold">
          Recomendações
        </h1>
        <p className="text-zinc-600 text-sm text-center lg:text-start font-light mt-5 mr-5">
          Aqui são algumas das recomendações que tenho como livros, cursos,
          canais. Conteúdo que eu consumo, consumi e acredito que possa servir
          muito bem para você.
        </p>
        <Image
          src={"/images/recomendations.webp"}
          alt=""
          width={1000}
          height={1000}
          className="w-[90%] mt-0 lg:mt-5 hidden lg:block"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center pt-0 lg:pt-10 pb-10 ml-5 w-[90%] lg:w-[40%]">
        <h1 className="text-zinc-800 text-left text-base font-bold">Livros</h1>
        <div className="flex flex-col items-center lg:items-start mt-4">
          {recomendations.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="text-zinc-500 text-sm text-center lg:text-start font-light hover:text-primary underline"
            >
              {item.title}
            </a>
          ))}
        </div>
        <h1 className="text-zinc-800 text-left text-base font-bold mt-5">
          Cursos
        </h1>
      </div>
    </div>
  );
}
