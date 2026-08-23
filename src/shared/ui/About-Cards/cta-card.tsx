import chat_image from "@/assets/chat-dev.webp";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Laptop,
  Rocket,
  Send,
} from "lucide-react";

export function CtaCard() {
  const { t } = useAppTranslation();

  const availableIcons = [BriefcaseBusiness, Laptop, Code2, Rocket];

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
        <div className="mt-4">
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

          <div className="flex gap-2">
            {availableIcons.map((Icon, index) => (
              <CircleBadge
                key={index}
                size="sm"
                variant="glass"
                className="bg-glass-blue"
              >
                <Icon size={16} className="text-primary" />
              </CircleBadge>
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

            <ArrowRight size={18} className="ml-2" />
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
          src={chat_image}
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
