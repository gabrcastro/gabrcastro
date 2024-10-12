interface IMenu {
  link: string;
  label: string;
}

interface ICounters {
  amount: string;
  label: string;
}

interface IFlow {
  index: string;
  label: string;
  describe: string;
}

interface IProjects {
  url: string;
  title: string;
  thumb: string;
  image: string;
  light?: boolean;
}
interface IRecomendations {
  title: string;
  link: string;
}

interface IWhatIDo {
  index: string;
  description: string;
}

export class Constants {
  static readonly MENU: IMenu[] = [
    { link: "#home", label: "home" },
    { link: "#workflow", label: "workflow" },
    { link: "#portfolio", label: "portfolio" },
    { link: "#recommended", label: "recomendações" },
  ];

  static readonly WHATIDO: IWhatIDo[] = [
    { index: "01", description: "Web Development" },
    { index: "02", description: "Mobile Development" },
    { index: "03", description: "UX/UI Design" },
    { index: "04", description: "Social Media" },
  ];

  static readonly SOCIAL: IMenu[] = [
    {
      link: "https://www.linkedin.com/in/gabrielsouzacastro/",
      label: "linkedin",
    },
    { link: "https://github.com/gabrcastro", label: "github" },
    { link: "https://www.behance.net/gabrielsouzac9", label: "behance" },
    { link: "https://dribbble.com/gabrcastro", label: "dribbble" },
  ];

  static readonly COUNTERS: ICounters[] = [
    { amount: "+3", label: "experiência" },
    { amount: "+10", label: "projetos" },
  ];

  static readonly DEV_PROJECTS: IProjects[] = [
    {
      url: "/0",
      title: "UI",
      thumb: "/images/projects/medchek.png",
      image: "/images/projects/site/medchek.site.png",
      light: true,
    },
    {
      url: "/1",
      title: "Website",
      thumb: "/images/projects/mopox.png",
      image: "/images/projects/site/mopox.site.png",
    },
    {
      url: "/11",
      title: "Website",
      thumb: "/images/projects/ecowaves.png",
      image: "/images/projects/site/ecowaves.site.png",
      light: true,
    },
    {
      url: "/111",
      title: "Website",
      thumb: "/images/projects/lms.png",
      image: "/images/projects/site/lms.site.png",
      light: true,
    },
    {
      url: "/1111",
      title: "Website",
      thumb: "/images/projects/rick.png",
      image: "/images/projects/site/rick.site.png",
    },
  ];

  static readonly IMG_UXUI =
    'Photo by <a href="https://unsplash.com/@alvarordesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alvaro Reyes</a> on <a href="https://unsplash.com/photos/macbook-pro-beside-apple-magic-mouse-zvmZiw3vdsQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  static readonly IMG_DEV =
    'Photo by <a href="https://unsplash.com/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-desk-yGD2A_3Qbu4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

  static readonly RECOMEND_LINKS: IRecomendations[] = [
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

  static readonly GREETINGS = "I'm programmer";
  static readonly SUB_GREETINGS =
    "A freelancer UX/UI designer and FullStack Developer. Based in Brazil.";

  static readonly FIRSTNAME = "gabriel";
  static readonly LASTNAME = "castro";
  static readonly PROFILE = "perfil";
  static readonly WORKFLOW = "fluxo de trabalho";
  static readonly PORTFOLIO = "portfolio";
  static readonly ALL = "todos";
  static readonly CLICK_HERE = "click aqui";
  static readonly PROGRAMATION = "programação";
  static readonly UX_UI = "design de interfaces";
  static readonly RECOMENDATIONS = "recomendações";
  static readonly BOOKS = "livros";
}
