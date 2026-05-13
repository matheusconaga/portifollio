import { motion, useAnimationFrame } from "framer-motion";
import { FaReact, FaDocker, FaPython, FaFigma } from "react-icons/fa";

import {
  SiTypescript,
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
} from "react-icons/si";

import { useEffect, useRef, useState } from "react";
import { StackCard } from "@/shared/ui/stack-card";

const techs = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Flutter", icon: SiFlutter },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "Python", icon: FaPython },
  { name: "Figma", icon: FaFigma },
];

export function TechBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [x, setX] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isVisible || isHovered) return;

    setX((prev) => {
      const next = prev - delta * 0.03;

      if (next <= -2000) {
        return 0;
      }

      return next;
    });
  });

  return (
    <section
      ref={containerRef}
      className="
    relative

    overflow-hidden

    py-10
    sm:py-12
    lg:py-14
  "
    >
      {/* BACKGROUND BASE */}
      <div
        className="
      absolute
      inset-0

      bg-glass-blue

      pointer-events-none
    "
      />

      {/* LEFT GLOW */}
      <div
        className="
      absolute

      -left-24
      sm:-left-32

      top-1/2
      -translate-y-1/2

      w-[220px]
      h-[220px]

      sm:w-[320px]
      sm:h-[320px]

      rounded-full

     bg-primary/30

      blur-[80px]
      sm:blur-[120px]

      pointer-events-none
    "
      />

      {/* RIGHT GLOW */}
      <div
        className="
      absolute

      -right-24
      sm:-right-32

      top-1/2
      -translate-y-1/2

      w-[220px]
      h-[220px]

      sm:w-[320px]
      sm:h-[320px]

      rounded-full

      bg-primary/30

      blur-[80px]
      sm:blur-[120px]

      pointer-events-none
    "
      />

      <div
        className="
    pointer-events-none

    absolute
    left-0
    top-0

    z-10

    h-full

    w-16
    sm:w-28
    lg:w-48

    bg-gradient-to-r
    from-[rgba(21,19,81,0.95)]
    via-[rgba(21,19,81,0.75)]
    to-transparent
  "
      />

      {/* RIGHT FADE */}
      <div
        className="
    pointer-events-none

    absolute
    right-0
    top-0

    z-10

    h-full

    w-16
    sm:w-28
    lg:w-48

    bg-gradient-to-l
    from-[rgba(21,19,81,0.95)]
    via-[rgba(21,19,81,0.75)]
    to-transparent
  "
      />

      <motion.div
        style={{ x }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="
      relative
      z-20

      flex
      w-max

      gap-4
      sm:gap-6

      whitespace-nowrap
    "
      >
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <StackCard
            variant="lg"
            key={index}
            icon={tech.icon}
            name={tech.name}
          />
        ))}
      </motion.div>
    </section>
  );
}
