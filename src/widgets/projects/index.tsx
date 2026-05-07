import ProjectCard from "@/shared/ui/project-card";
import gestao from "@/assets/projects/gestao.png"
import println from "@/assets/projects/println.png"
import port from "@/assets/projects/cine.png"
import { FilterTabs } from "@/shared/ui/filter-tabs";
import { useState } from "react";
import { EmptyProjectCard } from "@/shared/ui/empty-project-card"


export default function Projects() {

    const filters = [
        "Todos",
        "Frontend",
        "Mobile",
        "Backend",
    ]

    const projects = [
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
      Plataforma completa de gerenciamento empresarial
      com dashboard analítico e autenticação segura.
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
      Rede social moderna focada em experiência mobile
      e integração com serviços em nuvem.
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

    const [activeFilter, setActiveFilter] = useState("Todos")

    const filteredProjects =
        activeFilter === "Todos"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeFilter
            )

    return (
        <div className="flex justify-center items-center w-full max-w-[1200px] align-start gap-8 mx-auto py-10">

            <div className="flex flex-col gap-8 w-full">
                <div className="flex items-end justify-between">
                    <div className=" flex flex-col text-white gap-2">
                        <span className="text-2xl text-gray">Projetos</span>
                        <span className="text-primary text-5xl font-bold ">Trabalhos em Destaque</span>
                    </div>

                    <FilterTabs
                        items={filters}
                        active={activeFilter}
                        onChange={setActiveFilter}
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.title}

                                image={project.image}
                                title={project.title}
                                description={project.description}
                                techs={project.techs}

                                deployUrl={project.deployUrl}
                                repoUrl={project.repoUrl}
                            />
                        ))
                    ) : (
                        <EmptyProjectCard
                            category={activeFilter}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}   