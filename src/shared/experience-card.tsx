import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardTitle } from "@/shared/ui/Card/card-title";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/lib/utils";
import { SiFreelancer } from "react-icons/si";

interface ExperienceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  season: string;
  enterprise: string;
  freelancer?: boolean;
  side?: "left" | "right";
}

export function ExperienceCard({
  title,
  subtitle,
  description,
  season,
  enterprise,
  freelancer = false,
  side = "left",
}: ExperienceCardProps) {
  const isLeft = side === "left";

  return (
    <div className="relative grid grid-cols-[1fr_80px_1fr] items-center w-full">
      <div
        className={cn(
          "relative w-full",
          isLeft ? "col-start-1 order-1" : "col-start-3 order-3",
        )}
      >
        {/* FLOATING BADGE - Ajustado para não quebrar o alinhamento vertical */}
        {freelancer && (
          <div
            className="
              absolute
              -bottom-8
              -right-4
              z-50
              transition-all duration-300
              hover:scale-105
            "
          >
            <Badge
              variant="glass"
              className="
                flex items-center gap-2

                px-3 py-2

                bg-glass-light

                backdrop-blur-xl
              "
            >
              {/* MINI ICON */}
              <Badge
                variant="glass"
                className="
                  p-2

                  bg-glass-light

                  
                "
              >
                <SiFreelancer size={20} className="text-primary" />
              </Badge>

              {/* TEXT */}
              <span className="flex flex-col leading-tight">
                <span className="text-white text-sm font-semibold">
                  Freelancer
                </span>

                <span className="text-white/60 text-xs">
                  Projeto Independente
                </span>
              </span>
            </Badge>
          </div>
        )}

        <Card
          variant="glass-light"
          className="
            relative

            overflow-visible

            p-8

            flex flex-col
            gap-3

            bg-glass-light

            border border-white/10

            hover:border-primary/20
            hover:-translate-y-1

            duration-300
          "
        >
          <div className="flex flex-col gap-2">
            <CardTitle
              className="
      text-xl
      font-bold
      text-primary
      leading-none
    "
            >
              {title}
            </CardTitle>

            {subtitle && (
              <span
                className="
        text-xl
        font-semibold
        leading-none
      "
              >
                {subtitle}
              </span>
            )}
          </div>

          <CardDescription
            className="
              text-gray-300
              leading-relaxed
              text-base
            "
          >
            {description}
          </CardDescription>
        </Card>
      </div>

      <div className="col-start-2 order-2 flex h-full items-center justify-center relative">
        <div className="absolute w-[2px] h-[calc(100%+6rem)] bg-gradient-to-b from-white/5 via-white/10 to-white/5" />

        <div className="relative flex items-center justify-center">
          <div className="absolute w-6 h-6 rounded-full bg-primary/30 blur-md animate-pulse" />
          <div className="z-10 w-4 h-4 rounded-full bg-primary border-4 border-[#0a0a0a]" />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-1",
          isLeft
            ? "col-start-3 order-3 text-left pl-8"
            : "col-start-1 order-1 text-right pr-8",
        )}
      >
        <span
          className="
            text-primary
            text-xl
            font-bold
          "
        >
          {season}
        </span>

        <span
          className="
            text-gray
            text-lg
            font-semibold
          "
        >
          {enterprise}
        </span>
      </div>
    </div>
  );
}
