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
    <div className="w-full flex flex-flow items-start justify-start mx-28 gap-10">
      <div className=" w-[40%] flex flex-col items-start justify-center py-10 border-r-[.5px] border-r-zinc-300">
        <h1 className="text-zinc-800 text-left text-2xl md:text-3xl font-bold">
          Recomendações
        </h1>
        <p className="text-zinc-600 text-sm font-light mt-5">
          Aqui são algumas das recomendações que tenho como livros, cursos,
          canais. Conteúdo que eu consumo, consumi e acredito que possa servir
          muito bem para você.
        </p>
        <Image
          src={"/images/recomendations.webp"}
          alt=""
          width={1000}
          height={1000}
          className="w-[90%] mt-5"
        />
      </div>

      <div className="flex flex-col items-start justify-center py-10 ml-5 w-[40%]">
        <h1 className="text-zinc-800 text-left text-base font-bold">Livros</h1>
        <div className="flex flex-col mt-4">
          {recomendations.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="text-zinc-500 text-sm font-light hover:text-primary underline"
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
