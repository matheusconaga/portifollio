import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Laptop,
  Send,
} from "lucide-react";

export function CtaCard() {
  const { t } = useAppTranslation();

  const availableOptions = [
    {
      icon: Handshake,
      label: "cta.availability.freelance",
    },
    {
      icon: BriefcaseBusiness,
      label: "cta.availability.clt",
    },
    {
      icon: Building2,
      label: "cta.availability.pj",
    },
    {
      icon: Laptop,
      label: "cta.availability.remote",
    },
  ];

  return (
    <Card
      className="
        relative
        flex
        h-full
        w-full
        flex-col

        overflow-hidden

        rounded-[28px]
        border
        border-white/10
        bg-glass-light

        p-6
      "
    >
      {/* BADGE */}
      <div className="relative z-20 flex items-center gap-1">
        <CircleBadge size="sm">
          <Send size={12} className="text-primary" />
        </CircleBadge>

        <span className="text-sm font-semibold text-white">
          {t("cta.badge")}
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-20
          flex
          min-h-0
          flex-1
          flex-col
        "
      >
        {/* TITLE + DESCRIPTION */}
        <div className="mt-2">
          <h3
            className="
              text-xl
              font-bold
              leading-tight
              text-white
            "
          >
            {t("cta.title1")}
            <br />

            <span className="text-[#56ccfb]">{t("cta.title2")}</span>
          </h3>

          <p
            className="
              mt-2
              max-w-[190px]
              text-[12px]
              leading-relaxed
              text-white/50
            "
          >
            {t("cta.description")}
          </p>
        </div>

        {/* AVAILABLE */}
        <div className="mt-4">
          <p
            className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-white/70
            "
          >
            {t("cta.available")}
          </p>

          <div
            className="
              flex
              items-start
              gap-2
            "
          >
            {availableOptions.map(({ icon: Icon, label }) => (
              <div
                key={label}
                title={t(label)}
                className="
                    group
                    flex
                    min-w-0
                    flex-col
                    items-center
                    gap-1.5
                  "
              >
                <CircleBadge
                  size="sm"
                  variant="glass"
                  className="
                      bg-glass-blue

                      transition-colors
                      duration-200

                      group-hover:bg-primary/15
                      group-active:bg-primary/15
                    "
                >
                  <Icon size={16} className="text-primary" />
                </CircleBadge>

                <span
                  className="
                      whitespace-nowrap

                      text-[9px]
                      font-medium
                      leading-none

                      text-white/50

                      transition-colors
                      duration-200

                      group-hover:text-white/80
                      group-active:text-white/80
                    "
                >
                  {t(label)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <a
          href="#contact"
          className="
            mt-auto
            w-full
            pt-4
          "
        >
          <Button variant="primary" className="w-full">
            {t("cta.button")}

            <ArrowRight size={18}  />
          </Button>
        </a>
      </div>

      {/* DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-2px]
          top-[15%]
          z-0
          select-none

          opacity-20

          lg:right-[-3px]
          lg:opacity-40
        "
      >
        <img
          src="/chat-dev.webp"
          className="
            w-25
            lg:w-40
          "
          alt=""
          aria-hidden="true"
        />
      </div>
    </Card>
  );
}
