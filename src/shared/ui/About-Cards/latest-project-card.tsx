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
    <Card className="flex flex-col h-full p-6 bg-glass-light rounded-[28px]">
      <div className="flex items-center gap-1 mb-4">
        <CircleBadge size="sm">
          <Laptop size={12} className="text-primary" />
        </CircleBadge>

        <span className="text-white text-sm font-semibold">
          {t("latestProject.title")}
        </span>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-4">
        <img
          src={latestProject.image}
          alt={latestProject.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <div>
          <CardTitle className="text-sm text-white">
            {latestProject.title}
          </CardTitle>

          <CardDescription className="line-clamp-2 mt-2">
            {latestProject.description}
          </CardDescription>
        </div>

        <a href="#projects" className="mt-auto">
          <Button variant="primary" className="w-full">
            {t("latestProject.viewProject")}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </a>
      </div>
    </Card>
  );
}