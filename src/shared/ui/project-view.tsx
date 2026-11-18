
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

import { Eye } from "lucide-react";

import { Card } from "@/shared/ui/Card/card";
import { CardImage } from "@/shared/ui/Card/card-image";
import { CardContent } from "@/shared/ui/Card/card-content";
import { CardTitle } from "@/shared/ui/Card/card-title";
import { CardBadges } from "@/shared/ui/Card/card-badges";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardFooter } from "@/shared/ui/Card/card-footer";

interface ProjectViewProps {
    project: Project;
    onViewDetails: (project: Project) => void;
}

export default function ProjectView({
    project,
    onViewDetails,
}: ProjectViewProps) {
    const { t } = useTranslation();

    const {
        image,
        title,
        description,
        techs,
    } = project;

    const handleOpenDetails = useCallback(() => {
        onViewDetails(project);
    }, [onViewDetails, project]);

    return (
        <Card
            variant="glass-light"
            className="
                group flex flex-col w-full overflow-hidden
                hover:-translate-y-1 hover:border-primary/20
                duration-300
            "
        >
            <div className="relative overflow-hidden">
                <CardImage
                    src={image}
                    alt={title}
                    className="
                        h-[190px] sm:h-[220px] lg:h-[240px]
                        w-full object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                    "
                />
            </div>

            <CardContent
                className="
                    flex flex-col items-center gap-4
                    p-4 sm:p-5 text-justify flex-1
                "
            >
                <CardTitle
                    className="
                        text-xl sm:text-2xl
                        text-center leading-tight
                    "
                >
                    {title}
                </CardTitle>

                <CardBadges className="justify-center">
                    {techs.slice(0, 3).map((tech) => (
                        <Badge
                            key={tech}
                            variant="glass"
                            className="text-primary"
                        >
                            {tech}
                        </Badge>
                    ))}
                </CardBadges>

                <CardDescription
                    className="
                        text-sm sm:text-base
                        leading-relaxed text-gray
                        line-clamp-3
                    "
                >
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter
                className="
                    flex justify-center
                    px-6 pb-6 pt-0
                "
            >
                <Button
                    variant="primary"
                    leftIcon={<Eye size={18} />}
                    className="w-full"
                    onClick={handleOpenDetails}
                >
                    {t("project.seeDetails")}
                </Button>
            </CardFooter>
        </Card>
    );
}
