import { Card } from "@/shared/ui/Card/card"
import { CardDescription } from "@/shared/ui/Card/card-description"
import { CardTitle } from "@/shared/ui/Card/card-title"

import { Badge } from "@/shared/ui/badge"

import { cn } from "@/lib/utils"

import { SiFreelancer } from "react-icons/si"

interface ExperienceCardProps {
    title: string
    description: string
    season: string
    enterprise: string

    freelancer?: boolean
    side?: "left" | "right"
}

export function ExperienceCard({
    title,
    description,
    season,
    enterprise,
    freelancer = false,
    side = "left",
}: ExperienceCardProps) {
    const isLeft = side === "left"

    return (
        <div className="relative grid grid-cols-[1fr_80px_1fr] items-center w-full">
            {/* CARD SIDE */}
            <div
                className={cn(
                    "relative w-full overflow-visible",

                    isLeft
                        ? "col-start-1"
                        : "col-start-3 "
                )}
            >
                {/* FLOATING BADGE */}
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
                                <SiFreelancer
                                    size={20}
                                    className="text-primary"
                                />
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

                {/* CARD */}
                <Card
                    variant="glass-light"
                    className="
            relative

            overflow-visible

            p-8

            flex flex-col
            gap-5

            bg-glass-light

            border border-white/10

            hover:border-primary/20
            hover:-translate-y-1

            duration-300
          "
                >
                    <CardTitle
                        className="
              text-xl
              font-bold
              text-primary
            "
                    >
                        {title}
                    </CardTitle>

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

            {/* TIMELINE CENTER */}
            <div className="
            relative
    col-start-2

    flex
    items-center
    justify-center

  
    ">
                {/* LINE */}
                <div
                    className="
            absolute
      top-0

      w-[2px]
      h-full

      bg-white/10
          "
                />

                {/* GLOW */}
                <div
                    className="
            absolute

            w-6 h-6

            rounded-full

            bg-primary/30

            blur-md
          "
                />

                {/* DOT */}
                <div
                    className="
            relative
            z-10

            w-4 h-4

            rounded-full

            bg-primary

            border-4 border-background
          "
                />
            </div>

            {/* INFO SIDE */}
            <div
                className={cn(
                    "flex flex-col ",

                    isLeft
                        ? "col-start-3 text-left text-primary"
                        : "col-start-1 text-right "
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
    )
}