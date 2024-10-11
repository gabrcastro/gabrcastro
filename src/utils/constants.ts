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
}
interface IRecomendations {
  title: string;
  link: string;
}

export class Constants {
  static readonly MENU: IMenu[] = [
    { link: "#home", label: "home" },
    { link: "#workflow", label: "workflow" },
    { link: "#portfolio", label: "portfolio" },
    { link: "#recommended", label: "recomendações" },
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
    // { amount: "10+", label: "designs" },
  ];

  static readonly FLOWSUXUI: IFlow[] = [
    {
      index: "01",
      label: "definição",
      describe:
        "Definição de objetivo e escopo do projeto. Entendimento do problema que o novo produto deve resolver. Também será levantado os requisitos do projeto.",
    },
    {
      index: "02",
      label: "pesquisa",
      describe:
        "Após compreender o problema vamos estudar o público alvo e observar como os concorrentes resolvem problemas semelhantes. Tirar insights em cima dos dados levantados.",
    },
    {
      index: "03",
      label: "rascunho",
      describe:
        "Prototipação simples, utilizando papel e caneta para verificar as ideias.",
    },
    {
      index: "04",
      label: "prototipação",
      describe:
        "Converter do protótipo simples para um protótipo já implementando visual e funcionalidades finais.",
    },
    {
      index: "05",
      label: "testes",
      describe:
        "Nesta etapa é compartilhado com o time para capturar feedbacks e ideias que podem ser incluídas no protótipo. Após as novas mudanças, retorna para os testes.",
    },
    {
      index: "06",
      label: "entrega",
      describe: "É entregue todo o projeto finalizado e testado.",
    },
  ];

  static readonly FLOWSDEV: IFlow[] = [
    {
      index: "01",
      label: "requisitos",
      describe:
        "Levantamaneto de requisitos durante uma conversa e com o design de interface.",
    },
    {
      index: "02",
      label: "documentar",
      describe:
        "Desenvolver a documentação da aplicação seguindo os requisitos.",
    },
    {
      index: "03",
      label: "desenvolvimento",
      describe:
        "Inicia o desenvolvimento do produto seguindo seguindo o design da interface e os requisitos levantados.",
    },
    {
      index: "04",
      label: "testes",
      describe:
        "Após o desenvolvimento deve ser realizado os testes com o time para verificar o que precisa ser corrigido ou funcionalidades que não foram identificadas anteriormente.",
    },
    {
      index: "05",
      label: "implantação",
      describe: "Aqui é a finalização, onde é colocado o projeto em produção.",
    },
  ];

  static readonly DEV_PROJECTS: IProjects[] = [
    {
      url: "/",
      title: "Mopox - Pomodoro & Tasks",
      thumb: "/images/projects/mopox.png",
      image: "",
    },
    {
      url: "/1",
      title: "EcoWaves",
      thumb: "/images/projects/ecowaves.png",
      image: "/images/projects/site/ecowaves.site.png",
    },
    {
      url: "/2",
      title: "Planner",
      thumb: "/images/projects/planner.png",
      image: "",
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
