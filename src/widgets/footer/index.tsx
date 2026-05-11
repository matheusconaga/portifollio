import logo from "@/assets/logo_matheus.webp";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/Card/card";

import { StackCard } from "@/shared/ui/stack-card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import {
  ArrowUpRight,
  Clock,
  Heart,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { SiFastapi, SiFlutter, SiReact } from "react-icons/si";

export default function Footer() {
  const techs = [
    { name: "React", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "FastAPI", icon: SiFastapi },
  ];

  return (
    <footer
      className="
        relative
        w-full
        mt-32
        overflow-hidden
        border-t border-white/10
        bg-glass-dark-on
        
      "
    >
      {/* BG EFFECT */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(119,210,250,0.12),transparent_40%)]

          pointer-events-none
        "
      />

      <div
        className="
          relative

          max-w-[1400px]

          mx-auto

          px-6
          py-12
        
          flex flex-col
          gap-16
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-[1.6fr_1fr_1fr_1fr]
            gap-16
         
          "
        >
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* STATUS */}
            <Badge
              variant="glass"
              className="
                w-fit

                px-4
                py-2

                text-primary

                border border-primary/20
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex

                    h-full
                    w-full

                    rounded-full

                    bg-primary

                    opacity-75
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex

                    h-2.5
                    w-2.5

                    rounded-full

                    bg-primary
                  "
                />
              </span>
              Disponível para novos projetos
            </Badge>

            {/* BRAND */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                className="
                  w-20
                "
              />

              <div className="flex flex-col">
                <span
                  className="
                    text-3xl
                    font-bold
                    text-primary
                  "
                >
                  Matheus Lula
                </span>

                <span
                  className="
                    text-white/70
                    text-lg
                    font-medium
                  "
                >
                  Fullstack Developer Web & Mobile
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/60
                leading-relaxed
              "
            >
              Desenvolvendo experiências digitais modernas, performáticas e
              escaláveis com foco em interface, automação e tecnologia.
            </p>

            {/* STACKS */}
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => (
                <StackCard
                  key={index}
                  variant="sm"
                  icon={tech.icon}
                  name={tech.name}
                />
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="
                  w-2
                  h-2

                  rounded-full
                  bg-primary

           
                "
              />

              <span
                className="
                  text-primary
                  text-2xl
                  font-bold
                "
              >
                Navegação
              </span>
            </div>

            <div className="flex flex-col gap-4 text-lg items-left">
              {[
                "home",
                "about",
                "projects",
                "tech",
                "experience",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="
                    group

                    flex items-center gap-2

                    text-white/60

                    transition-all duration-300

                    hover:text-primary
                    hover:translate-x-1
                  "
                >
                  <ArrowUpRight
                    className="
                      size-4

                      opacity-0

                      -translate-x-2

                      transition-all duration-300

                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />

                  <span className="capitalize">
                    {item === "tech"
                      ? "Tech Stacks"
                      : item === "experience"
                        ? "Experiência"
                        : item === "home"
                          ? "Início"
                          : item === "about"
                            ? "Sobre"
                            : item === "projects"
                              ? "Projetos"
                              : item === "contact"
                                ? "Contato"
                                : item}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-6 ">
            <div className="flex items-center gap-3">
              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-primary
                  
                "
              />

              <span
                className="
                  text-primary
                  text-2xl
                  font-bold
                "
              >
                Contato
              </span>
            </div>

            <div className="flex flex-col gap-2 ">
              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Mail size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">E-mail</span>
                  <span className="text-gray text-sm">matheusphillip170@gmail.com</span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Smartphone size={16} className="text-white" />
                </CircleBadge>

                <div className="flex flex-col">
                  <span className="text-white">Whatsapp</span>
                  <span className="text-gray text-sm">+55 (86) 98145-1876</span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <MapPin size={16} className="text-white" />
                </CircleBadge>

                <div className="flex flex-col">
                  <span className="text-white">Localização</span>
                  <span className="text-gray text-sm">Parnaíba • PI</span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Clock size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">Disponibilidade</span>
                  <span className="text-gray text-sm">Seg - Sex: 9h às 18h</span>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA + SOCIAL */}
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-4">
              <span
                className="
                  text-primary
                  text-2xl
                  font-bold
                "
              >
                Vamos criar algo incrível?
              </span>

              <p
                className="
                  text-white/60
                  leading-relaxed
                "
              >
                Disponível para freelas, oportunidades remotas e projetos
                digitais modernos.
              </p>

              <a href="#contact">
                <Button variant="primary-xl" className="w-fit">
                Entrar em contato
              </Button>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/matheusconaga" target="_blank">
                <CircleBadge clickable size="lg">
                  <FaGithub size={22} className="text-primary" />
                </CircleBadge>
              </a>

              <a href="https://linkedin.com/in/matheusconaga" target="_blank">
                <CircleBadge clickable size="lg">
                  <FaLinkedin size={22} className="text-primary" />
                </CircleBadge>
              </a>


              <a href="https://wa.me/5586981451876" target="_blank">
                <CircleBadge clickable size="lg">
                  <FaWhatsapp size={22} className="text-primary" />
                </CircleBadge>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <Card
          className="
            px-6
            py-5

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            bg-glass-light

            border border-white/10
          "
        >
          <span className="text-white/50 text-sm">
            © 2026 Matheus Lula. Todos os direitos reservados.
          </span>

          <div
            className="
              flex items-center gap-2

              text-white/50
              text-sm
            "
          >
            Desenvolvido com
            <Heart size={14} className="text-primary fill-primary" />
            usando React, TypeScript, Tailwind e muito café.
          </div>
        </Card>
      </div>
    </footer>
  );
}
