export interface CardDataProps {
  name: string;
  favicon: string;
  tags: string[];
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export const cardData: CardDataProps[] = [
  {
    name: "Todo List",
    favicon: "/images/projects/logos/todolist.ico",
    tags: ["Reactjs", "CSS"],
    imageUrl: ["/images/projects/todoList.png"],
    description: "A simple and effective task management application built with ReactJS and styled with CSS. Perfect for keeping track of your daily tasks and ensuring nothing falls through the cracks",
    sourceCodeHref: "https://github.com/Brainstormex/todo_list",
    liveWebsiteHref: "https://mybasictodolist.vercel.app/",
  },
  {
    name: "MyNotebook",
    favicon: "/images/projects/logos/notebook.ico",
    tags: ["Reactjs", "Javascript", "Bootstrap", "ExpressJS", "MongoDB"],
    imageUrl: [
      "/images/projects/gradientGenerator.png",
      "/images/projects/gradientGeneratorBlank.png",
    ],
    description: "A comprehensive note-taking app leveraging a modern tech stack including ReactJS, ExpressJS, and MongoDB. This project combines powerful backend capabilities with a sleek frontend, making it easy to manage and organize your notes effectively.",
    sourceCodeHref: "https://github.com/Brainstormex/mynotebook",
    liveWebsiteHref: "",
  },
  {
    name: "Gradient Generator",
    favicon: "/images/projects/Logos/gradient.ico",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: ["/images/projects/gradientGenerator.png"],
    description: "A user-friendly web tool designed to create and customize CSS gradients with ease. Built using HTML, Javascript, and CSS, this project helps you generate beautiful gradient backgrounds effortlessly",
    sourceCodeHref: "https://github.com/Brainstormex/gradient-generator",
    liveWebsiteHref: "https://brainstormex.github.io/gradient-generator/",
  },
];
