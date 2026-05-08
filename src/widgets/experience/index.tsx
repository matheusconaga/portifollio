import { ExperienceCard } from "@/shared/experience-card"
import { FilterTabs } from "@/shared/ui/filter-tabs"

import { useState } from "react"

export default function Experience() {
    const filters = [
        "Experiências",
        "Formação",
        "Certificações",
    ]

    const experiences = [
        {
            title: "Desenvolvedor Frontend / Mobile / Fullstack",

            category: "Experiências",

            description:
                "Atuei no desenvolvimento fullstack de aplicações web e mobile, APIs e integrações entre sistemas, com foco em performance, escalabilidade e automação de processos. Também participei de decisões técnicas e melhorias de arquitetura.",

            season: "Ago 2024 - Presente",

            enterprise:
                "RGM Tecnologia Inteligência e Processos",

            freelancer: false,
        },

        {
            title: "Desenvolvedor Frontend / Fullstack",

            category: "Experiências",

            description:
                "Desenvolvi um sistema web de gestão patrimonial com React, incluindo dashboard administrativo, CRUD completo, integração com APIs e rastreamento por QR Code. Também implementei automações com Excel, reduzindo tarefas manuais em até 40%, além de realizar o deploy em produção.",

            season: "Out 2025 - Dez 2025",

            enterprise:
                "Centro Espírita Caridade e Fé",

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
        }
    ]

    const [activeFilter, setActiveFilter] =
        useState("Experiências")

    const filteredExperiences =
        activeFilter === "Experiências"
            ? experiences
            : experiences.filter(
                (experience) =>
                    experience.category === activeFilter
            )

    return (
        <div className="w-full max-w-[1200px] mx-auto py-20">
            <div className="flex flex-col gap-20">
                {/* HEADER */}
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl text-gray">
                            Jornada
                        </span>

                        <span className="text-primary text-5xl font-bold">
                            Trajetória Profissional
                        </span>
                    </div>

                    <FilterTabs
                        items={filters}
                        active={activeFilter}
                        onChange={setActiveFilter}
                    />
                </div>

                {/* TIMELINE */}
                <div className="relative flex flex-col gap-24">
                    {/* LINHA CENTRAL */}
                    <div
                        className="
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

                bg-primary/40
                blur-sm
              "
                        />
                    </div>

                    {filteredExperiences.map(
                        (experience, index) => (
                            <ExperienceCard
                                key={index}
                                title={experience.title}
                                description={
                                    experience.description
                                }
                                season={experience.season}
                                enterprise={
                                    experience.enterprise
                                }
                                freelancer={
                                    experience.freelancer
                                }
                                side={
                                    index % 2 === 0
                                        ? "left"
                                        : "right"
                                }
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}