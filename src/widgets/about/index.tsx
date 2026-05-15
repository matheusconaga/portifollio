import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardTitle } from "@/shared/ui/Card/card-title";

import { projects } from "@/data/projects";

import { WorkCard } from "@/shared/ui/About-Cards/work-card";
import { CodeCard } from "@/shared/ui/About-Cards/code-card";
import { CtaCard } from "@/shared/ui/About-Cards/cta-card";
import { LatestProjectCard } from "@/shared/ui/About-Cards/latest-project-card";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);

  const latestProject = projects?.[0] ?? {
    image: "",
    title: "Projeto em breve",
    description: "",
    techs: [],
    category: "",
    deployUrl: "",
    repoUrl: "",
  };

  useEffect(() => {
    if (isPaused) return;

    const container = carouselRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      const cardWidth = container.clientWidth * 0.88 + 16;

      const maxScroll = container.scrollWidth - container.clientWidth;

      const next =
        container.scrollLeft + cardWidth >= maxScroll
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
    flex-col
    lg:flex-row
    items-center
    justify-between
    min-h-screen
    w-full
    gap-12
    lg:gap-8
    py-10
    lg:py-0
  "
    >
      <div
        className="
      absolute

      top-[-120px]

      w-[300px]
      h-[300px]
      sm:w-[100%]
      sm:h-[150px]


      bg-glass-dark/50

      blur-[120px]

      pointer-events-none
      z-0
    "
      />
      {/* LEFT SIDE */}
      <div className="flex flex-col w-full lg:w-[700px] items-start gap-8">
        {/* TITLE */}
        <div
          className="
    flex flex-col
    text-white
    font-bold
    text-[32px]
    md:text-[44px]
    leading-[1.1]
    max-w-full
    lg:max-w-[650px]
  "
        >
          <span>Transformando ideias</span>
          <span className="whitespace-normal md:whitespace-nowrap">
            em <span className="text-primary">código de alto impacto</span>
          </span>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-full lg:max-w-[700px]">
          <span
            className="
        text-gray
        text-base
        md:text-lg
        leading-relaxed
      "
          >
            Sou desenvolvedor Fullstack focado em criar produtos digitais
            performáticos, bonitos e escaláveis. Tenho experiência com web,
            mobile, APIs e automação com IA.
          </span>
        </div>

        {/* STATS CARDS */}
        <div className="relative w-full lg:w-[480px] lg:h-55 h-55 grid grid-cols-2 gap-2 sm:gap-4">
          <Card
            className="flex flex-col p-6 items-center justify-center"
          >
            <CardTitle className="text-primary text-2xl font-bold text-center">
              +2 anos
            </CardTitle>
            <CardDescription className="text-white text-sm md:text-base text-center">
              Criando soluções digitais
            </CardDescription>
          </Card>
          <Card
            className="flex flex-col p-6 items-center justify-center hover:border-primary/30
                  hover:shadow-xl hover:shadow-primary/10
                  duration-300"
          >
            <CardTitle className="text-primary text-2xl font-bold text-center">
              +30%
            </CardTitle>
            <CardDescription className="text-white text-sm md:text-base text-center">
              Engajamento de usuários
            </CardDescription>
          </Card>
          <Card
            className="flex flex-col p-6 items-center justify-center hover:border-primary/30
                  hover:shadow-xl hover:shadow-primary/10
                  duration-300"
          >
            <CardTitle className="text-primary text-2xl font-bold text-center">
              -30%
            </CardTitle>
            <CardDescription className="text-white text-sm md:text-base text-center">
              Redução de tarefas manuais
            </CardDescription>
          </Card>
          <Card
            className="flex flex-col p-6 items-center justify-center hover:border-primary/30
                  hover:shadow-xl
                  hover:shadow-primary/10
                  duration-300"
          >
            <CardTitle className="text-primary text-2xl font-bold text-center">
              +20-30%
            </CardTitle>
            <CardDescription className="text-white text-sm md:text-base text-center">
              Engajamento de usuários
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
            setTimeout(() => setIsPaused(false), 3000);
          }}
          onMouseLeave={() => setIsPaused(false)}
          className="
      flex
      lg:hidden
      gap-4
      overflow-x-auto
      snap-x
      snap-mandatory
      scrollbar-hide
      pb-2
    "
        >
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="min-w-[88%] h-[350px] snap-center flex"
          >
            <WorkCard />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.98 }}
            className="min-w-[88%] h-[350px] snap-center"
          >
            <CodeCard />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.98 }}
            className="min-w-[88%] h-[350px] snap-center"
          >
            {latestProject && (
              <LatestProjectCard latestProject={latestProject} />
            )}
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.98 }}
            className="min-w-[88%] h-[350px] snap-center"
          >
            <CtaCard />
          </motion.div>
        </motion.div>

        {/* DESKTOP GRID */}
        <div
          className="
      hidden
      lg:grid
      grid-cols-[0.86fr_1.2fr]
      grid-rows-[300px_320px]
      gap-4
      w-full
    "
        >
          <WorkCard />

          <CodeCard />

          {latestProject && <LatestProjectCard latestProject={latestProject} />}

          <CtaCard />
        </div>
      </div>
    </div>
  );
}
