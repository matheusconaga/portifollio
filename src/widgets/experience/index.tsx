import { ExperienceCard } from "@/shared/experience-card";
import { FilterTabs } from "@/shared/ui/filter-tabs";

import { useState } from "react";

export default function Experience() {
  const filters = ["Experiências", "Formação", "Certificações"];

  const experiences = [
    /* =========================
       EXPERIÊNCIAS
    ========================== */

    {
      title: "Desenvolvedor Frontend / Mobile / Fullstack",

      category: "Experiências",

      description:
        "Atuei no desenvolvimento fullstack de aplicações web e mobile, APIs e integrações entre sistemas, com foco em performance, escalabilidade e automação de processos. Também participei de decisões técnicas e melhorias de arquitetura.",

      season: "Ago 2024 - Presente",

      enterprise: "RGM Tecnologia Inteligência e Processos",

      freelancer: false,
    },

    {
      title: "Desenvolvedor Frontend / Fullstack",

      category: "Experiências",

      description:
        "Desenvolvi um sistema web de gestão patrimonial com React, incluindo dashboard administrativo, CRUD completo, integração com APIs e rastreamento por QR Code. Também implementei automações com Excel, reduzindo tarefas manuais em até 40%, além de realizar o deploy em produção.",

      season: "Out 2025 - Dez 2025",

      enterprise: "Centro Espírita Caridade e Fé",

      freelancer: true,
    },

    {
      title: "Desenvolvedor Frontend / Mobile",

      category: "Experiências",

      description:
        "Desenvolvi um aplicativo mobile para estudos do ENEM utilizando Flutter e Dart, com funcionalidades de acesso a videoaulas, resumos e questões de provas anteriores. O app foi projetado para ser leve e intuitivo, visando uma experiência de usuário fluida e eficiente.",

      season: "Mar 2023 - Ago 2024",

      enterprise: "IFPI - Instituto Federal do Piauí",

      freelancer: true,
    },

    /* =========================
       FORMAÇÃO
    ========================== */

    {
      title: "Curso Superior em Tecnologia (CST)",

      subtitle: "Análise e Desenvolvimento de Sistemas",

      category: "Formação",

      description:
        "No curso aprendi fundamentos de programação, engenharia de software, programação web, programação móvel, prototipação, banco de dados, APIs e outras competências essenciais para a formação de desenvolvedor fullstack.",

      season: "Mar 2022 - Fev 2025",

      enterprise: "IFPI - Instituto Federal do Piauí",

      freelancer: false,
    },

    {
      title: "Curso Técnico",
      subtitle: "Administração",

      category: "Formação",

      description:
        "No curso técnico aprendi sobre gestão, finanças, marketing, recursos humanos, logística, empreendedorismo e processos administrativos, desenvolvendo uma visão estratégica de negócios e organização empresarial.",

      season: "Mar 2018 - Abr 2021",

      enterprise: "IFMA - Instituto Federal do Maranhão",

      freelancer: false,
    },

    /* =========================
       CERTIFICAÇÕES
    ========================== */

    {
      title: "Automação com N8N e Agentes de Inteligência Artificial",

      category: "Certificações",

      description:
        "Formação focada em automações inteligentes utilizando N8N, agentes de IA, integrações entre APIs, workflows automatizados e aplicações modernas de inteligência artificial.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "Formação Inteligência Artificial: Do Zero ao Avançado",

      category: "Certificações",

      description:
        "Capacitação completa em fundamentos de IA, machine learning, modelos generativos, aplicações práticas e construção de soluções inteligentes modernas.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "User Experience (UX)",

      category: "Certificações",

      description:
        "Curso voltado para experiência do usuário, design de interfaces, usabilidade, prototipação e construção de produtos digitais focados em acessibilidade e interação.",

      season: "2025",

      enterprise: "FIAP",

      freelancer: false,
    },

    {
      title: "JavaScript e TypeScript",

      category: "Certificações",

      description:
        "Capacitação avançada em JavaScript moderno e TypeScript, incluindo tipagem, orientação a objetos, APIs, assincronismo e aplicações escaláveis.",

      season: "2025",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "React Native",

      category: "Certificações",

      description:
        "Desenvolvimento de aplicações mobile cross-platform utilizando React Native, componentes reutilizáveis, navegação e integração com APIs.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "Flutter",

      category: "Certificações",

      description:
        "Desenvolvimento mobile com Flutter e Dart, criação de interfaces modernas, gerenciamento de estado e construção de aplicações multiplataforma.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Experiências");

  const filteredExperiences = experiences.filter(
    (experience) => experience.category === activeFilter,
  );

  return (
    <div className="w-full max-w-[1200px] mx-auto py-20">
      <div className="flex flex-col gap-20">
        {/* HEADER */}
        <div
          className="
    flex
    flex-col
    lg:flex-row

    lg:items-end
    justify-between

    gap-6
  "
        >
          <div className=" flex flex-col text-white gap-2">
            <span className="text-lg sm:text-2xl text-gray">Jornada</span>
            <span
              className="
    text-primary
    text-4xl
    sm:text-4xl
    lg:text-5xl
    font-bold
    leading-tight
  "
            >
              Trajetória Profissional
            </span>
          </div>

          <FilterTabs
            items={filters}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="relative flex flex-col gap-16 md:gap-30">
          {/* MOBILE LINE */}
          <div
            className="
      absolute

      left-[11px]
      top-0

      h-full
      w-[2px]

      bg-white/10

      md:hidden
    "
          />

          {/* DESKTOP LINE */}
          <div
            className="
      hidden md:block

      absolute
      left-1/2
      top-0
      -translate-x-1/2

      w-[2px]
      h-full

      bg-white/10
    "
          >
            <div
              className="
        absolute
        inset-0

        blur-sm
      "
            />
          </div>

          {filteredExperiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              season={experience.season}
              enterprise={experience.enterprise}
              freelancer={experience.freelancer}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
