import { motion, useAnimationFrame } from "framer-motion"
import {
  FaReact,
  FaDocker,
  FaPython,
  FaFigma,
} from "react-icons/fa"

import {
  SiTypescript,
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
} from "react-icons/si"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/shared/ui/Card/card"


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
]

export function TechBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [x, setX] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useAnimationFrame((_, delta) => {
    if (!isVisible || isHovered) return

    setX((prev) => {
      const next = prev - delta * 0.03

      if (next <= -2000) {
        return 0
      }

      return next
    })
  })

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        py-12
        bg-glass-blue
      "
    >
      {/* Fade esquerda */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0 z-10 h-full w-48

          bg-gradient-to-r
          from-glass-blue/90
          via-glass-dark
          to-transparent
        "
      />

      {/* Fade direita */}
      <div
        className="
          pointer-events-none
          absolute right-0 top-0 z-10 h-full w-48

          bg-gradient-to-l
          from-glass-blue/90
          via-glass-dark
          to-transparent
        "
      />

      <motion.div
        style={{ x }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="
          flex
          w-max
          gap-6
          whitespace-nowrap
        "
      >
        {[...techs, ...techs, ...techs].map((tech, index) => {
          const Icon = tech.icon

          return (
            <Card
              key={index}
              variant="glass-blue"
              className="
                group
                flex items-center gap-3
                px-6 py-3
                rounded-full
                hover:border-primary/30
                hover:shadow-lg hover:shadow-primary/10
                hover:-translate-y-1

                duration-300
              "
            >
              <Icon
                className="
                  text-primary
                  text-2xl
                  transition-all duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />

              <span
                className="
                  text-white/90
                  text-lg
                  font-semibold
                  tracking-wide
                "
              >
                {tech.name}
              </span>
            </Card>
          )
        })}
      </motion.div>
    </section>
  )
}