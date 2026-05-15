import { ExperienceCard } from "@/shared/experience-card";
import { FilterTabs } from "@/shared/ui/filter-tabs";

import { useState } from "react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  const filters = ["Experiências", "Formação", "Certificações"];

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
