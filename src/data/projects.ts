// src/data/projects.ts

import gestao from "@/assets/projects/gestao.png"
import println from "@/assets/projects/println.png"
import port from "@/assets/projects/cine.png"

export const projects = [
  {
    image: port,

    title: "Portifólio Profissional",

    description: `
      Portfólio moderno e responsivo para destacar
      projetos e habilidades profissionais.
    `,

    techs: [
      "React",
      "Tailwind",
      "Styled-Components",
    ],

    category: "Frontend",

    deployUrl:
      "https://portifoliomatheuslula.onrender.com/",

    repoUrl:
      "https://github.com/matheusconaga/portifollio",
  },

  {
    image: gestao,

    title: "Projeto de Gestão",

    description: `
      Sistema web de gestão patrimonial.
    `,

    techs: [
      "React",
      "FastAPI",
      "PostgreSQL",
    ],

    category: "Frontend",

    deployUrl:
      "https://projeto-patrimoniario.onrender.com/",

    repoUrl:
      "https://github.com/matheusconaga/projeto_patrimoniario",
  },

  {
    image: println,

    title: "PrintLn",

    description: `
      Rede social mobile fullstack.
    `,

    techs: [
      "Flutter",
      "Firebase",
      "FastAPI",
    ],

    category: "Mobile",

    deployUrl:
      "https://println-social.vercel.app/",

    repoUrl:
      "https://github.com/matheusconaga/projeto-println",
  },
]