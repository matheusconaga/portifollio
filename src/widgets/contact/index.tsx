import { Button } from "@/shared/ui/button";

import { Card } from "@/shared/ui/Card/card";

import { CircleBadge } from "@/shared/ui/circle-badge";

import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/text-area";

import { Mail, MapPin, Smartphone, Send } from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="
    relative

    w-full
    mx-auto
rounded-2xl
    overflow-hidden
  "
    >
      <div
        className="
      absolute
      

      top-[-120px]
      left-[-120px]

      w-[400px]
      h-[400px]

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

      bottom-[-80px]
right-[-80px]

w-[260px]
h-[260px]

sm:w-[420px]
sm:h-[420px]

blur-[100px]

      rounded-full

      bg-cyan-400/10

      pointer-events-none
      z-0
    "
      />
      {/* MAIN CARD */}
      <Card
        className="
          relative

          overflow-hidden

          bg-glass-light

          border border-white/10
        "
      >
        <div
          className="
            flex flex-col
            xl:flex-row

            items-stretch

            gap-8
            xl:gap-10

            p-2
            py-6
            sm:py-2
sm:p-4
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex flex-col
              justify-between

              w-full
              xl:w-[50%]

              gap-8

              p-2
              sm:p-4
              xl:p-6
            "
          >
            {/* TEXT */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <h1
                  className="
                    font-bold

                    leading-tight

                    text-3xl
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-6xl
                  "
                >
                  Vamos construir algo{" "}
                  <span className="text-primary">incrível?</span>
                </h1>
              </div>

              <p
                className="
                  text-gray

                  text-sm
                  sm:text-base
                  md:text-xl

                  leading-relaxed
                "
              >
                Disponível para oportunidades remotas e projetos freelancer.
                Entre em contato para discutirmos como posso ajudar sua ideia a
                ganhar vida.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <Mail size={16} className="text-primary" />
                </CircleBadge>

                <span
                  className="
                    text-gray

                    text-sm
                    sm:text-base

                    break-all
                  "
                >
                  matheusphillip170@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <Smartphone size={16} className="text-primary" />
                </CircleBadge>

                <span
                  className="
                    text-gray

                    text-sm
                    sm:text-base
                  "
                >
                  +55 (86) 98145-1876
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <MapPin size={16} className="text-primary" />
                </CircleBadge>

                <span
                  className="
                    text-gray
                    text-sm
                    sm:text-base
                  "
                >
                  Parnaíba • PI
                </span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4">
              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://github.com/matheusconaga" target="_blank">
                  <FaGithub size={20} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://linkedin.com/in/matheusconaga" target="_blank">
                  <FaLinkedin size={20} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://wa.me/5586981451876" target="_blank">
                  <FaWhatsapp size={20} className="text-primary" />
                </a>
              </CircleBadge>
            </div>
          </div>

          {/* FORM CARD */}
          <div
            className="
    w-full
    xl:w-[40%]

    flex
    items-center
    justify-center
  "
          >
            <Card
              className="
    w-full
    xl:max-w-[620px]

    bg-glass-light

    border border-white/10

    backdrop-blur-2xl

    p-4
    sm:p-6

    flex flex-col
    gap-4

    hover:border-primary/20
    hover:shadow-xl
    hover:shadow-primary/10

    duration-300
  "
            >
              <div
                className="
                  grid

                  grid-cols-1
                  md:grid-cols-2

                  gap-4
                "
              >
                <Input label="Nome" placeholder="Insira seu nome" />

                <Input label="Email" placeholder="Insira seu email" />
              </div>

              <Input
                label="Assunto"
                placeholder="Insira o assunto da mensagem (ex: Projeto, Parceria, etc...)"
              />

              <Textarea
                label="Mensagem"
                placeholder="Escreva sua mensagem..."
              />

              <div
                className="
                  flex flex-col

                  gap-4

                  mt-2
                "
              >
                <Button
                  variant="primary-xl"
                  leftIcon={<Send size={20} />}
                  className="w-full"
                >
                  Enviar Email
                </Button>

                <Button
                  variant="outline-xl"
                  leftIcon={<FaWhatsapp size={20} />}
                  className="w-full"
                >
                  Enviar WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
