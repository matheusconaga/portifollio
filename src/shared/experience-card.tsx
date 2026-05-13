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
    <div
      className="
        relative

        grid

        grid-cols-1
        md:grid-cols-[1fr_80px_1fr]

        gap-6
        md:gap-0

        w-full
      "
    >
      {/* CARD */}
      <div
        className={cn(
          `
    relative
    w-full
    pl-6
    md:pl-0

    order-2
  `,
          isLeft ? "md:col-start-1 md:order-1" : "md:col-start-3 md:order-3",
        )}
      >
        {/* BADGE */}
        {freelancer && (
          <div
            className="
              absolute

              -bottom-9
              right-0
              md:-right-4

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
              <Badge
                variant="glass"
                className="
                  p-2

                  bg-glass-light
                "
              >
                <SiFreelancer size={18} className="text-primary" />
              </Badge>

              <span className="flex flex-col leading-tight">
                <span className="text-white text-xs sm:text-sm font-semibold">
                  Freelancer
                </span>

                <span className="text-white/60 text-[10px] sm:text-xs">
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

            p-5
            sm:p-6
            lg:p-8

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
                text-lg
                sm:text-xl

                font-bold
                text-primary

                leading-tight
              "
            >
              {title}
            </CardTitle>

            {subtitle && (
              <span
                className="
                  text-base
                  sm:text-lg

                  font-semibold

                  leading-tight
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

              text-sm
              sm:text-base
            "
          >
            {description}
          </CardDescription>
        </Card>
      </div>

      {/* TIMELINE CENTER */}
      <div
        className="
  absolute
  left-0
  top-6
  flex items-center justify-center
  w-6

  order-3

  md:relative
  md:top-0
  md:left-0
  md:col-start-2
  md:order-2
  md:w-auto
  md:h-full
"
      >
        {/* DESKTOP LINE */}
        <div
          className="
            hidden md:block

            absolute

            w-[2px]
            h-[calc(100%+6rem)]

            bg-gradient-to-b
            from-white/5
            via-white/10
            to-white/5
          "
        />

        <div className="relative flex items-center justify-center">
          <div
            className="
              absolute

              w-6 h-6

              rounded-full

              bg-primary/30

              blur-md

              animate-pulse
            "
          />

          <div
            className="
              z-10

              w-4 h-4

              rounded-full

              bg-primary

              border-4 border-[#0a0a0a]
            "
          />
        </div>
      </div>

      {/* INFO */}
      <div
        className={cn(
          `
    flex flex-col gap-1

    sm:mt-4
    md:mt-0

    pl-10
    md:pl-0

    text-left
    md:self-center

    order-1
  `,
          freelancer ? "mt-5" : "mt-0",
          isLeft
            ? "md:col-start-3 md:order-3 md:pl-8"
            : "md:col-start-1 md:order-1 md:text-right md:pr-8",
        )}
      >
        <span
          className="
            text-primary

            text-lg
            sm:text-xl

            font-bold
          "
        >
          {season}
        </span>

        <span
          className="
            text-gray

            text-sm
            sm:text-lg

            font-semibold
          "
        >
          {enterprise}
        </span>
      </div>
    </div>
  );
}
