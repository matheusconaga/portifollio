import logo from "@/assets/logo_matheus.webp";
import eu from "@/assets/euxl.webp";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

import { Download, MoveRight, CodeXml, Mouse } from "lucide-react";

import { Card } from "@/shared/ui/Card/card";
import { CardImage } from "@/shared/ui/Card/card-image";

import styled from "styled-components";

import { SiFastapi, SiFlutter } from "react-icons/si";

import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

import { StackCard } from "@/shared/ui/stack-card";
import { CircleBadge } from "@/shared/ui/circle-badge";
import { useTranslation } from "react-i18next";

const techs = [
  { name: "React", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "FastAPI", icon: SiFastapi },
];

export default function Hero() {

    const { t } = useTranslation();

  return (
    <div
      className="
    relative

    flex flex-col
    justify-between
    items-center

    w-full

    min-h-screen

    pt-15
    sm:pt-32
    md:pt-24
    xl:pt-30

    pb-20
    md:pb-12

    gap-16 md:gap-20
  "
    >
      <div
        className="
      absolute

      top-[-120px]
      left-[-120px]

      w-[320px]
      h-[320px]

      rounded-full

      bg-primary/20

      blur-[120px]

      pointer-events-none
      z-0
    "
      />
      <div
        className="
      absolute

      bottom-[-140px]

      w-[300px]
      h-[300px]
      sm:w-[100%]
      sm:h-[200px]


      bg-glass-blue

      blur-[120px]

      pointer-events-none
      z-0
    "
      />
      <div
        className="
          flex

          flex-col
          xl:flex-row

          items-center
          justify-between

          gap-12 lg:gap-16 xl:gap-20

          w-full
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
    flex flex-col

    items-center
    xl:items-start

    text-center
    xl:text-left

    gap-4

    flex-1

    max-w-[750px]
  "
        >
          {/* STATUS */}
          <Badge
            variant="glass"
            className="
    self-start

    text-primary

    text-xs md:text-sm
  "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t("hero.badge")}
          </Badge>

          {/* BRAND */}
          <div
            className="
    flex

    flex-col
    sm:flex-row

    items-center

    text-center
    sm:text-left

    gap-4
  "
          >
            <img
              src={logo}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              alt="Logo Matheus Lula"
              className="
             w-28
                sm:w-32
                lg:w-40
                "
            />

            <div
              className="
    flex flex-col

    items-center
    sm:items-start

    gap-2
  "
            >
              <span
                className="
                  font-semibold
                  text-white
                  

                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                {t("hero.apresentation")}
              </span>

              <span
                className="
                  font-bold
                  text-primary

                  leading-none

                  text-4xl
                  sm:text-5xl
                  lg:text-5xl
                  xl:text-5xl
                "
              >
                Matheus Lula
              </span>

              <span
                className="
                  font-semibold
                  text-white

                  text-lg
                  sm:text-xl
                  lg:text-2xl

                  max-w-[600px]
                "
              >
                Fullstack developer Web & Mobile
              </span>

              {/* STACKS */}
              <div
                className="
    flex
    flex-wrap

    justify-center
    sm:justify-start

    gap-2
  "
              >
                {techs.map((tech, index) => (
                  <StackCard
                    variant="hero"
                    key={index}
                    icon={tech.icon}
                    name={tech.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
    flex flex-col

    text-left

    gap-1

    max-w-[700px]
  "
          >
            <span
              className="
                text-gray

                text-base
                sm:text-lg
                lg:text-xl
                

                leading-relaxed
              "
            >
              {t("hero.description1")}
            </span>

            <span
              className="
                text-gray

                text-base
                sm:text-lg
                lg:text-xl

                leading-relaxed
              "
            >
              {t("hero.description2")}
            </span>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex

              flex-col
              sm:flex-row

              w-full
              sm:w-auto

              gap-4

              mt-4
            "
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                variant="primary-xl"
                rightIcon={<MoveRight size={22} />}
                className="w-full sm:w-auto"
              >
                {t("hero.button1")}
              </Button>
            </a>

            <a
              href="/Matheus_Lula_Fullstack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline-xl"
                rightIcon={<Download size={22} />}
                className="w-full sm:w-auto"
              >
                {t("hero.button2")}
              </Button>
            </a>
          </div>
          <div
            className=" flex

              flex-row
              justify-center
              w-full
              sm:w-auto

              gap-4

              mt-4
              "
          >
            <a
              href="https://www.linkedin.com/in/matheusconaga"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <CircleBadge size="lg" variant="glass" clickable>
                <FaLinkedin size={22} className="text-primary" />
              </CircleBadge>
            </a>
            <a
              href="https://github.com/matheusconaga"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <CircleBadge size="lg" variant="glass" clickable>
                <FaGithub size={22} className="text-primary" />
              </CircleBadge>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative

            flex
            justify-center

            w-full
            xl:w-auto
          "
        >
          <div
            className="
              relative

              w-[260px]
              h-[260px]

              sm:w-[320px]
              sm:h-[320px]

              lg:w-[380px]
              lg:h-[380px]

             xl:w-[380px]
             xl:h-[380px]
            "
          >
            {/* IMAGE CARD */}
            <Card
              className="
    w-full
    h-full

    rounded-[28px]
    overflow-hidden

    contain-layout
    contain-paint
  "
            >
              <CardImage
                src={eu}
                alt="Foto minha"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                fit="contain"
                position="bottom-right"
              />
            </Card>

            {/* FLOATING BADGE */}
            <div
              className="
                absolute

                bottom-2
                right-2

                sm:right-4

                hover:scale-[1.02]

                transition-transform duration-300
              "
            >
              <Badge
                variant="glass"
                className="
                  flex items-center gap-2

                  px-3 py-2

                  shadow-lg
                  shadow-black/20
                "
              >
                <Badge variant="glass" className="p-2">
                  <CodeXml size={15} />
                </Badge>

                <span className="flex flex-col leading-tight">
                  <span className="text-white text-xs sm:text-sm">
                    {t("hero.badgeImage")}
                  </span>

                  <span className="text-white/60 text-[10px] sm:text-xs">
                    Web • Mobile • IA
                  </span>
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* MOUSE */}
      <div
        className="
    hidden md:flex
    absolute
    left-1/2
    -translate-x-1/2

    bottom-10
    md:bottom-12
    lg:bottom-14
    xl:bottom-14

    z-20
  "
      >
        <MouseDiv>
          <MouseIcon size={30} />
        </MouseDiv>
      </div>
    </div>
  );
}

const MouseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MouseIcon = styled(Mouse)`
  color: var(--color-primary);

  animation: bounce 2s infinite ease-in-out;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(10px);
      opacity: 0.7;
    }

    100% {
      transform: translateY(0);
    }
  }
`;
