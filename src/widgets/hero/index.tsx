import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

import {
  CodeXml,
  Download,
  Mouse,
  MoveRight,
} from "lucide-react";

import { Card } from "@/shared/ui/Card/card";

import {
  SiFastapi,
  SiFlutter,
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

import { StackCard } from "@/shared/ui/stack-card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { trackEvent } from "@/analytics/analytics";
import { ANALYTICS_EVENTS } from "@/analytics/events";

const LOGO_SRC = "/logo_matheus.webp";
const HERO_IMAGE_SRC = "/euxl.webp";

const techs = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
];

export default function Hero() {
  const { t, i18n } =
    useAppTranslation();

  const currentLang =
    i18n.language.startsWith("pt")
      ? "pt"
      : "en";

  const resumeLink =
    currentLang === "pt"
      ? "/Matheus_Lula_Fullstack_Developer_PT.pdf"
      : "/Matheus_Lula_Fullstack_Developer_EN.pdf";

  return (
    <div
      className="
        relative

        flex
        flex-col
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

        gap-16
        md:gap-20
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute

          top-[-80px]
          left-[-80px]

          sm:top-[-120px]
          sm:left-[-120px]

          w-[240px]
          h-[240px]

          sm:w-[320px]
          sm:h-[320px]

          rounded-full

          bg-primary/20

          blur-[70px]
          sm:blur-[100px]
          lg:blur-[120px]

          pointer-events-none

          z-0
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute

          bottom-[-100px]

          w-[260px]
          h-[180px]

          sm:bottom-[-140px]
          sm:w-full
          sm:h-[200px]

          bg-glass-blue

          blur-[70px]
          sm:blur-[100px]
          lg:blur-[120px]

          pointer-events-none

          z-0
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10

          flex

          flex-col
          xl:flex-row

          items-center
          justify-between

          gap-12
          lg:gap-16
          xl:gap-20

          w-full
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col

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

              text-xs
              md:text-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex

                  h-full
                  w-full

                  rounded-full

                  bg-green-400

                  opacity-75

                  animate-ping
                "
              />

              <span
                className="
                  relative

                  inline-flex

                  h-2
                  w-2

                  rounded-full

                  bg-primary
                "
              />
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
            {/* Logo is small and doesn't need
                to compete with the LCP image */}
            <img
              src={LOGO_SRC}
              alt="Logo Matheus Lula"
              width={180}
              height={180}
              loading="eager"
              decoding="async"
              className="
                w-32
                sm:w-32
                lg:w-45

                h-auto

                shrink-0
              "
            />

            <div
              className="
                flex
                flex-col

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
                {t(
                  "hero.apresentation",
                )}
              </span>

              <h1
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
              </h1>

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
                Fullstack developer Web
                & Mobile
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
                {techs.map(
                  (tech) => (
                    <StackCard
                      variant="hero"
                      key={
                        tech.name
                      }
                      icon={
                        tech.icon
                      }
                      name={
                        tech.name
                      }
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              flex
              flex-col

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
              {t(
                "hero.description1",
              )}
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
              {t(
                "hero.description2",
              )}
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
            <a
              href="#projects"
              className="
                w-full
                sm:w-auto
              "
            >
              <Button
                variant="primary-xl"
                rightIcon={
                  <MoveRight
                    size={22}
                  />
                }
                className="
                  w-full
                  sm:w-auto
                "
              >
                {t(
                  "hero.button1",
                )}
              </Button>
            </a>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
              "
              onClick={() => {
                void trackEvent(
                  ANALYTICS_EVENTS.RESUME_DOWNLOAD,
                  {
                    page:
                      window.location.pathname,
                  },
                );
              }}
            >
              <Button
                variant="outline-xl"
                rightIcon={
                  <Download
                    size={22}
                  />
                }
                className="
                  w-full
                  sm:w-auto
                "
              >
                {t(
                  "hero.button2",
                )}
              </Button>
            </a>
          </div>

          {/* SOCIALS */}
          <div
            className="
              flex

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
              aria-label="LinkedIn"
              className="
                group
                relative
              "
              onClick={() => {
                void trackEvent(
                  ANALYTICS_EVENTS.LINKEDIN_CLICK,
                  {
                    page:
                      window.location.pathname,
                  },
                );
              }}
            >
              <CircleBadge
                size="lg"
                variant="glass"
                clickable
              >
                <FaLinkedin
                  size={22}
                  className="text-primary"
                />
              </CircleBadge>
            </a>

            <a
              href="https://github.com/matheusconaga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                relative
              "
              onClick={() => {
                void trackEvent(
                  ANALYTICS_EVENTS.GITHUB_PROFILE_CLICK,
                  {
                    page:
                      window.location.pathname,
                  },
                );
              }}
            >
              <CircleBadge
                size="lg"
                variant="glass"
                clickable
              >
                <FaGithub
                  size={22}
                  className="text-primary"
                />
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
              {/*
                Native img is intentional here.

                This is a critical above-the-fold
                image and a strong LCP candidate.
              */}
              <img
                src={HERO_IMAGE_SRC}
                alt="Matheus Lula"
                width={380}
                height={380}
                loading="eager"
                fetchPriority="high"
                className="
                  block

                  w-full
                  h-full

                  object-contain
                  object-bottom

                  select-none
                "
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

                transition-transform
                duration-300
              "
            >
              <Badge
                variant="glass"
                className="
                  flex
                  items-center

                  gap-2

                  px-3
                  py-2

                  shadow-lg
                  shadow-black/20
                "
              >
                <Badge
                  variant="glass"
                  className="p-2"
                >
                  <CodeXml
                    size={15}
                  />
                </Badge>

                <span
                  className="
                    flex
                    flex-col

                    leading-tight
                  "
                >
                  <span
                    className="
                      text-white

                      text-xs
                      sm:text-sm
                    "
                  >
                    {t(
                      "hero.badgeImage",
                    )}
                  </span>

                  <span
                    className="
                      text-white/60

                      text-[10px]
                      sm:text-xs
                    "
                  >
                    Web • Mobile • IA
                  </span>
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="
          hidden
          md:flex

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
        <div
          className="
            flex
            flex-col
            items-center
          "
        >
          <Mouse
            size={30}
            className="
              text-primary

              animate-bounce
            "
          />
        </div>
      </div>
    </div>
  );
}