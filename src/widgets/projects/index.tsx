import { useState } from "react";

import ProjectCard from "@/shared/ui/project-card";
import { FilterTabs } from "@/shared/ui/filter-tabs";
import { EmptyProjectCard } from "@/shared/ui/empty-project-card";

import { projects } from "@/data/projects";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export default function Projects() {
  const { i18n, t } =
    useAppTranslation();

  const currentLanguage =
    i18n.language.startsWith("pt")
      ? "pt"
      : "en";

  const currentProjects =
    projects[currentLanguage];

  const filters = [
    {
      label:
        currentLanguage === "pt"
          ? "Todos"
          : "All",
      value: "all",
    },
    {
      label: "Fullstack",
      value: "fullstack",
    },
    {
      label: "Frontend",
      value: "frontend",
    },
    {
      label: "Mobile",
      value: "mobile",
    },
    {
      label: "Backend",
      value: "backend",
    },
  ];

  const [
    activeFilter,
    setActiveFilter,
  ] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? currentProjects
      : currentProjects.filter(
        (project) =>
          project.category.toLowerCase() ===
          activeFilter,
      );

  return (
    <div
      className="
        flex
        justify-center
        items-start

        w-full
        max-w-[1200px]

        gap-8

        mx-auto
        py-10
      "
    >
      <div className="flex flex-col gap-8 w-full">
        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute

            top-[-120px]

            w-[300px]
            h-[300px]

            sm:w-full
            sm:h-[200px]

            bg-glass-blue

            blur-[120px]

            pointer-events-none
            z-0
          "
        />

        {/* HEADER */}
        <div
          className="
            relative
            z-10

            flex
            flex-col

            lg:flex-row
            lg:items-end

            justify-between

            gap-6
          "
        >
          {/* TITLES */}
          <div className="flex flex-col text-white gap-2">
            <span className="text-lg sm:text-2xl text-gray">
              {t(
                "projects.subtitle",
              )}
            </span>

            <span
              className="
                text-primary

                text-4xl
                lg:text-5xl

                font-bold
                leading-tight
              "
            >
              {t(
                "projects.title",
              )}
            </span>
          </div>

          {/* FILTERS */}
          <div
            className="
              w-full

              md:w-auto
              md:self-end

              lg:self-auto
            "
          >
            <FilterTabs
              items={filters}
              active={activeFilter}
              onChange={
                setActiveFilter
              }
            />
          </div>
        </div>

        {/* PROJECTS */}
        <div
          className="
            grid

            grid-cols-1

            sm:grid-cols-2

            xl:grid-cols-3

            gap-12
            lg:gap-6
          "
        >
          {filteredProjects.length >
            0 ? (
            filteredProjects.map(
              (project) => (
                <ProjectCard
                  key={
                    project.slug
                  }
                  slug={
                    project.slug
                  }
                  image={
                    project.image
                  }
                  title={
                    project.title
                  }
                  description={
                    project.description
                  }
                  techs={
                    project.techs
                  }
                  deployUrl={
                    project.deployUrl
                  }
                  repoUrl={
                    project.repoUrl
                  }
                  inDevelopment={
                    project.inDevelopment
                  }
                />
              ),
            )
          ) : (
            <EmptyProjectCard
              category={
                activeFilter
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}