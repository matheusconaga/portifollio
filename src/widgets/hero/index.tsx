import logo from "@/assets/logo_matheus.webp";
import eu from "@/assets/euxl.png";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

import { Download, MoveRight, CodeXml, Mouse } from "lucide-react";

import { Card } from "@/shared/ui/Card/card";
import { CardImage } from "@/shared/ui/Card/card-image";

import styled from "styled-components";

import { SiFastapi, SiFlutter } from "react-icons/si";

import { FaReact } from "react-icons/fa";

import { StackCard } from "@/shared/ui/stack-card";

const techs = [
  { name: "React", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "FastAPI", icon: SiFastapi },
];

export default function Hero() {
  return (
    <div
      className="
        flex flex-col
        justify-center
        items-center

        w-full

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
      right-[-120px]

      w-[360px]
      h-[360px]

      rounded-full

      bg-cyan-400/10

      blur-[140px]

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

    items-start

    text-left

    gap-4

    flex-1

    max-w-[750px]
  "
        >
          {/* STATUS */}
          <Badge
            variant="glass"
            className="
              text-primary

              text-xs md:text-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Disponível para novos projetos
          </Badge>

          {/* BRAND */}
          <div
            className="
              flex

              flex-col
              sm:flex-row

              items-center

              gap-4
            "
          >
            <img
              src={logo}
              className="
                w-28
                sm:w-32
                lg:w-40
              "
            />

            <div
              className="
                flex flex-col
text-left
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
                olá, eu sou o
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

                 
                  justify-start

                  gap-2
                "
              >
                {techs.map((tech, index) => (
                  <StackCard key={index} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              flex flex-col

              gap-1
text-left
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
              Desenvolvedor Fullstack especializado em Web, Mobile, APIs e IA.
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
              Crio produtos rápidos, escaláveis e com foco em experiência do
              usuário.
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
                Ver Projetos
              </Button>
            </a>

            <Button
              variant="outline-xl"
              rightIcon={<Download size={22} />}
              className="w-full sm:w-auto"
            >
              Currículo
            </Button>
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
              "
            >
              <CardImage
                src={eu}
                alt="Foto minha"
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
                    Soluções Fullstack
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
      <div className="hidden md:flex">
        <MouseDiv>
          <MouseIcon size={28} />
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
