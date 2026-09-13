import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Card } from "@/shared/ui/Card/card";

import { CardDescription } from "@/shared/ui/Card/card-description";

import { CardTitle } from "@/shared/ui/Card/card-title";

import { WorkCard } from "@/shared/ui/About-Cards/work-card";

import { CodeCard } from "@/shared/ui/About-Cards/code-card";

import { CtaCard } from "@/shared/ui/About-Cards/cta-card";

import { AnalyticsLiveCard } from "@/shared/ui/About-Cards/analytics-live-card";

export default function About() {
  const { t } = useAppTranslation();

  const carouselRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const interval = setInterval(() => {
      const firstCard = container.firstElementChild as HTMLElement | null;

      if (!firstCard) {
        return;
      }

      const styles = window.getComputedStyle(container);

      const gap = parseFloat(styles.columnGap || styles.gap || "0");

      const cardWidth = firstCard.offsetWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;

      const next =
        container.scrollLeft + cardWidth >= maxScroll - 8
          ? 0
          : container.scrollLeft + cardWidth;

      container.scrollTo({
        left: next,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="
        relative

        flex
        w-full
        flex-col

        items-center
        justify-start

        gap-6
        py-10

        md:gap-8

        xl:min-h-screen
        xl:flex-row
        xl:items-center
        xl:justify-between
        xl:gap-8
        xl:py-0
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          top-[-120px]
          z-0

          h-[300px]
          w-[300px]

          bg-glass-dark/50
          blur-[120px]

          sm:h-[150px]
          sm:w-full
        "
      />

      {/* LEFT SIDE */}
      <div
        className="
          flex
          w-full
          flex-col
          items-start
          gap-8

          lg:w-[700px]
        "
      >
        {/* TITLE */}
        <div
          className="
            flex
            max-w-full
            flex-col

            text-[32px]
            font-bold
            leading-[1.1]
            text-white

            md:text-[44px]

            lg:max-w-[650px]
          "
        >
          <span>{t("about.title1")}</span>

          <span className="whitespace-normal md:whitespace-nowrap">
            {t("about.title2")}{" "}
            <span className="text-primary">{t("about.title3")}</span>
          </span>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-full lg:max-w-[700px]">
          <span
            className="
              text-base
              leading-relaxed
              text-gray

              md:text-lg
            "
          >
            {t("about.description")}
          </span>
        </div>

        {/* STATS CARDS */}
        <div
          className="
            relative

            grid
            w-full
            grid-cols-2
            gap-2

            place-items-stretch

            sm:gap-4

            md:max-w-[720px]
            md:self-center

            xl:max-w-[480px]
            xl:self-start
          "
        >
          <Card
            className="
              flex
              min-h-[110px]
              flex-col

              items-center
              justify-center

              p-4
              sm:p-6
            "
          >
            <CardTitle className="text-center text-2xl font-bold text-primary">
              {t("about.card1.title")}
            </CardTitle>

            <CardDescription className="text-center text-sm text-white md:text-base">
              {t("about.card1.description")}
            </CardDescription>
          </Card>

          <Card
            className="
              flex
              min-h-[110px]
              flex-col

              items-center
              justify-center

              p-4

              transition-all
              duration-300

              sm:p-6

              hover:border-primary/30
              hover:shadow-xl
              hover:shadow-primary/10
            "
          >
            <CardTitle className="text-center text-2xl font-bold text-primary">
              {t("about.card2.title")}
            </CardTitle>

            <CardDescription className="text-center text-sm text-white md:text-base">
              {t("about.card2.description")}
            </CardDescription>
          </Card>

          <Card
            className="
              flex
              min-h-[110px]
              flex-col

              items-center
              justify-center

              p-4

              transition-all
              duration-300

              sm:p-6

              hover:border-primary/30
              hover:shadow-xl
              hover:shadow-primary/10
            "
          >
            <CardTitle className="text-center text-2xl font-bold text-primary">
              {t("about.card3.title")}
            </CardTitle>

            <CardDescription className="text-center text-sm text-white md:text-base">
              {t("about.card3.description")}
            </CardDescription>
          </Card>

          <Card
            className="
              flex
              min-h-[110px]
              flex-col

              items-center
              justify-center

              p-4

              transition-all
              duration-300

              sm:p-6

              hover:border-primary/30
              hover:shadow-xl
              hover:shadow-primary/10
            "
          >
            <CardTitle className="text-center text-2xl font-bold text-primary">
              {t("about.card4.title")}
            </CardTitle>

            <CardDescription className="text-center text-sm text-white md:text-base">
              {t("about.card4.description")}
            </CardDescription>
          </Card>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:max-w-[760px]">
        {/* MOBILE CAROUSEL */}
        <motion.div
          ref={carouselRef}
          onTouchStart={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => {
              setIsPaused(false);
            }, 3000);
          }}
          onMouseLeave={() => setIsPaused(false)}
          className="
            flex
            items-stretch
            gap-4

            overflow-x-auto

            snap-x
            snap-mandatory

            pb-2

            scrollbar-hide

            lg:hidden
          "
        >
          {/* WORK */}
          <motion.div
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              h-[390px]

              basis-[88%]
              sm:basis-[65%]
              md:basis-[52%]

              max-w-[430px]
              shrink-0
              snap-center
            "
          >
            <WorkCard />
          </motion.div>

          {/* CODE */}
          <motion.div
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              h-[390px]

              basis-[88%]
              sm:basis-[65%]
              md:basis-[52%]

              max-w-[430px]
              shrink-0
              snap-center
            "
          >
            <CodeCard />
          </motion.div>

          {/* ANALYTICS */}
          <motion.div
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              h-[390px]

              basis-[88%]
              sm:basis-[65%]
              md:basis-[52%]

              max-w-[430px]
              shrink-0
              snap-center
            "
          >
            <AnalyticsLiveCard />
          </motion.div>

          {/* CTA */}
          <motion.div
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              h-[390px]

              basis-[88%]
              sm:basis-[65%]
              md:basis-[52%]

              max-w-[430px]
              shrink-0
              snap-center
            "
          >
            <CtaCard />
          </motion.div>
        </motion.div>

        {/* DESKTOP GRID */}
        <div
          className="
            hidden
            w-full

            grid-cols-[0.86fr_1.2fr]
            grid-rows-[300px_320px]

            gap-4

            lg:grid
          "
        >
          <WorkCard />

          <CodeCard />

          <AnalyticsLiveCard />

          <CtaCard />
        </div>
      </div>
    </div>
  );
}
