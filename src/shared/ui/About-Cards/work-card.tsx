

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { Code } from "lucide-react";

export function WorkCard() {
  const { t } = useAppTranslation();

  return (
    <Card
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        justify-end

        overflow-hidden

        rounded-[28px]
        border
        border-white/10
        bg-glass-light

        transition-all
        duration-300

        hover:border-primary/30
        hover:shadow-xl
        hover:shadow-primary/10
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(119,210,250,0.15),transparent_70%)]
        "
      />

      {/* BADGE */}
      <div
        className="
          absolute
          left-5
          top-5
          z-20
        "
      >
        <div className="flex items-center gap-1">
          <CircleBadge size="sm">
            <Code
              size={12}
              className="text-primary"
            />
          </CircleBadge>

          <span className="text-sm font-semibold text-white">
            {t("work.card.badge")}
          </span>
        </div>
      </div>

      {/* PERSONA */}
      <div
        className="
          pointer-events-none
          absolute

          inset-x-0
          bottom-[72px]
          top-[52px]

          flex
          items-center
          justify-center
        "
      >
        <img
          src={"/eu_persona.webp"}
          className="
            w-[175px]
            select-none
            object-contain

            drop-shadow-[0_0_40px_rgba(119,210,250,0.25)]

            sm:w-[190px]

            lg:w-[180px]
          "
          alt="Persona"
        />
      </div>

      {/* BOTTOM GLASS CARD */}
      <div
        className="
          relative
          z-20
          mt-auto
          w-full
          p-2
        "
      >
        <Card
          variant="glass-light"
          className="
            border
            border-white/10

            px-3
            py-3

            shadow-2xl
            shadow-primary/10

            backdrop-blur-xl
          "
        >
          <div className="flex flex-col">
            <h3
              className="
                flex
                gap-1

                whitespace-nowrap

                text-[14px]
                font-bold
                leading-tight
                text-white
              "
            >
              <span>
                {t("work.card.title1")}
              </span>

              <span className="text-primary">
                {t("work.card.title2")}
              </span>
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                leading-relaxed
                text-white/60
              "
            >
              {t("work.card.description")}
            </p>
          </div>
        </Card>
      </div>
    </Card>
  );
}