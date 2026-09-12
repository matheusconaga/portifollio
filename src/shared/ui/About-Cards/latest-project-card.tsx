import type { Project } from "@/data/projects";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardTitle } from "@/shared/ui/Card/card-title";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { ArrowRight, Laptop } from "lucide-react";

interface LatestProjectCardProps {
  latestProject: Project;
}

export function LatestProjectCard({ latestProject }: LatestProjectCardProps) {
  const { t } = useAppTranslation();

  return (
    <Card
      className="
        flex
        h-full
        w-full
        flex-col
        overflow-hidden

        rounded-[28px]
        bg-glass-light

        p-6
        lg:p-5
      "
    >
      {/* BADGE */}
      <div
        className="
          mb-4
          flex
          shrink-0
          items-center
          gap-1

          md:mb-3
        "
      >
        <CircleBadge size="sm">
          <Laptop size={12} className="text-primary" />
        </CircleBadge>

        <span className="text-sm font-semibold text-white">
          {t("latestProject.title")}
        </span>
      </div>

      {/* IMAGE */}
      <div
        className="
          relative
          mb-4
          aspect-video
          w-full
          shrink-0
          overflow-hidden

          rounded-xl
          bg-zinc-900

          sm:h-[150px]
          sm:aspect-auto

          md:mb-3
          md:h-[135px]

          lg:h-[110px]
        "
      >
        <img
          src={latestProject.image}
          alt={latestProject.title}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col
        "
      >
        <div className="min-h-0">
          <CardTitle
            className="
              text-sm
              text-white
            "
          >
            {latestProject.title}
          </CardTitle>

          <CardDescription
            className="
              mt-2

              line-clamp-2

              md:mt-1
              md:line-clamp-3

              lg:line-clamp-2
            "
          >
            {latestProject.description}
          </CardDescription>
        </div>

        <a
          href="#projects"
          className="
            mt-auto
            w-full
            shrink-0

            pt-4
            md:pt-3
            lg:pt-2
          "
        >
          <Button variant="primary" className="w-full">
            {t("latestProject.viewProject")}

            <ArrowRight size={18} className="ml-2" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
