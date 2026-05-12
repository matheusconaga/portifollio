import { Button } from "@/shared/ui/button";
import chat_image from "@/assets/chat-dev.png";
import eu_persona from "@/assets/eu_persona.png";
import { Badge } from "@/shared/ui/badge";

import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardTitle } from "@/shared/ui/Card/card-title";
import { CircleBadge } from "@/shared/ui/circle-badge";
import { projects } from "@/data/projects";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code,
  Code2,
  Laptop,
  Rocket,
  Send,
  Terminal,
} from "lucide-react";

export default function About() {
  const latestProject = projects[0];

  return (
    <section
      className="
        relative

        w-full
        min-h-screen
        items-center
        justify-center
        py-20

        overflow-hidden
      "
    >
     

      <div
        className="
    relative

    flex
    items-center
    justify-between

    

    w-full
  "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col w-[700px] items-start gap-8">
          {/* TITLE */}
          <div
            className="
      flex flex-col

      text-white
      font-bold
      text-5xl

      leading-[1.1]

      
    "
          >
            <span>Transformando ideias em</span>

              <span className="text-primary">código de alto impacto</span>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-[720px]">
            <span
              className="
        text-gray
        text-2xl
        leading-relaxed
      "
            >
              Sou desenvolvedor Fullstack focado em criar produtos digitais
              performáticos, bonitos e escaláveis. Tenho experiência com web,
              mobile, APIs e automação com IA.
            </span>
          </div>

          <div className="relative w-140 h-60 grid grid-cols-2 gap-4 ">
            <Card
              className="flex flex-col w-full h-full gap-2 items-center justify-center hover:border-primary/30
                  hover:shadow-xl hover:shadow-primary/10
                
                  duration-300"
            >
              <CardTitle className="text-primary text-3xl font-bold text-center">
                +2 anos
              </CardTitle>
              <CardDescription className="text-white text-xl text-center">
                Criando soluções digitais
              </CardDescription>
            </Card>
            <Card
              className="flex flex-col w-full h-full gap-2 items-center justify-center hover:border-primary/30
                  hover:shadow-xl hover:shadow-primary/10
                  
                  duration-300"
            >
              <CardTitle className="text-primary text-3xl font-bold text-center">
                +30%
              </CardTitle>
              <CardDescription className="text-white text-xl text-center">
                Engajamento de usuários
              </CardDescription>
            </Card>
            <Card
              className="flex flex-col w-full h-full gap-2 items-center justify-center hover:border-primary/30
                  hover:shadow-xl hover:shadow-primary/10
                  
  
                  duration-300"
            >
              <CardTitle className="text-primary text-3xl font-bold text-center">
                -30%
              </CardTitle>
              <CardDescription className="text-white text-xl text-center">
                Redução de tarefas manuais
              </CardDescription>
            </Card>
            <Card
              className="flex flex-col w-full h-full gap-2 items-center justify-center hover:border-primary/30
                  hover:shadow-xl
                  hover:shadow-primary/10
                  
  
                  duration-300"
            >
              <CardTitle className="text-primary text-3xl font-bold text-center">
                +20-30%
              </CardTitle>
              <CardDescription className="text-white text-xl text-center">
                Engajamento de usuários
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* RIGHT GRID */}

        <div
          className="
    relative

    grid
    grid-cols-[0.95fr_1.2fr]
    grid-rows-[350px_370px]

    gap-4
    p-8
    w-full
    max-w-[760px]
  "
        >
          {/* PROJECT CARD */}
          <Card
            className="
    relative

    overflow-visible

    bg-glass-light

    border border-white/10

    rounded-[28px]

    flex flex-col
    justify-end


    hover:border-primary/30
    hover:shadow-xl
    hover:shadow-primary/10

    transition-all duration-300
  "
          >
            {/* GLOW */}
            <div
              className="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_center,rgba(119,210,250,0.15),transparent_70%)]

      pointer-events-none
    "
            />

            {/* HEADER */}
            <div className="absolute top-5 left-5 z-20">
              <div className="flex items-center gap-3">
                <CircleBadge size="sm">
                  <Code size={18} className="text-primary" />
                </CircleBadge>

                <span className="text-white text-lg font-semibold">
                  Trabalhando nisso
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
      absolute

      inset-0

      flex
      items-center
      justify-center
    "
            >
              <img
                src={eu_persona}
                className="
        w-[210px]

        object-contain
        pointer-events-none
        select-none

        drop-shadow-[0_0_40px_rgba(119,210,250,0.25)]
      "
              />
            </div>

            {/* GLASS INFO CARD */}
            <div
              className="
    absolute
    top-[230px]
    left-1/2
    -translate-x-1/2

    z-20

    w-[90%]
  "
            >
              <Card
                variant="glass-light"
                className="
      py-1
      px-4

      backdrop-blur-xl
      border border-white/10
      shadow-2xl
      shadow-primary/10
    "
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="
          text-lg
          font-bold
          text-white
          leading-tight
        "
                  >
                    Criando soluções
                    <span className="text-primary"> modernas</span>
                  </h3>

                  <p
                    className="
          text-white/60
          text-sm
          leading-relaxed
        "
                  >
                    Interfaces performáticas, modernas e escaláveis focadas em
                    experiência, performance e tecnologia.
                  </p>
                </div>
              </Card>
            </div>
          </Card>

          {/* CODE CARD */}
          <Card
            className="
    relative

    overflow-hidden

    p-6

    bg-glass-light

    border border-white/10

    rounded-[28px]

    flex flex-col

    hover:border-primary/20
    hover:shadow-xl
    hover:shadow-primary/10

    transition-all duration-300
  "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CircleBadge size="sm">
                  <Terminal size={18} className="text-primary" />
                </CircleBadge>

                <span className="text-white text-lg font-semibold">
                  developer.ts
                </span>
              </div>

              {/* TERMINAL DOTS */}
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* GLOW */}
            <div
              className="
      absolute
      -top-10
      -right-10

      w-40
      h-40

      bg-primary/10

      blur-3xl
    "
            />

            {/* CODE */}
            <div
              className="
      relative

      mt-4

      font-mono
      text-[13px]
      leading-7
    "
            >
              <p className="text-blue-400">
                const <span className="text-purple-400">developer</span> = {"{"}
              </p>

              <p className="pl-4 text-white/90">
                name: <span className="text-green-300">'Matheus Lula'</span>,
              </p>

              <p className="pl-4 text-white/90">
                focus: [<span className="text-green-300">'Performance'</span>,{" "}
                <span className="text-green-300">'Scalability'</span>,{" "}
                <span className="text-green-300">'UX'</span>
                ],
              </p>

              <p className="pl-4 text-white/90">
                mission:{" "}
                <span className="text-green-300">
                  'Building future-ready apps'
                </span>
                ,
              </p>

              <p className="pl-4 text-white/90">
                stack: [<span className="text-green-300">'React'</span>,{" "}
                <span className="text-green-300">'TypeScript'</span>,{" "}
                <span className="text-green-300">'Flutter'</span>,{" "}
                <span className="text-green-300">'Python'</span>,{" "}
                <span className="text-green-300">'FastAPI'</span>
                ],
              </p>

              <p className="pl-4 text-white/90">
                passion:{" "}
                <span className="text-green-300">
                  'Transformar ideias em soluções'
                </span>
                ,
              </p>

              <p className="text-blue-400">{"}"};</p>
            </div>
          </Card>

          {/* STACK CARD */}
          <Card
            className="
    flex flex-col
    p-6
    bg-glass-light
    border border-white/10
    rounded-[28px]
  "
          >
            <div className="flex items-center gap-3 mb-4">
              <CircleBadge size="sm">
                <Laptop size={18} className="text-primary" />
              </CircleBadge>

              <span className="text-white text-lg font-semibold">
                Último projeto
              </span>
            </div>

            <div
              className="
      relative
      aspect-video
      rounded-xl
      overflow-hidden
      bg-zinc-900
      mb-4
      border border-white/5
    "
            >
              <img
                src={latestProject.image}
                alt={latestProject.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col flex-1 justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-white">
                  {latestProject.title}
                </CardTitle>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {latestProject.techs.map((tech) => (
                    <Badge key={tech} variant="glass" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <a href="#projects" className="w-full">
                <Button variant="primary" className="w-full">
                  Ver projeto
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
          </Card>

          {/* CTA CARD - O mais complexo */}
          <Card className="relative p-6 bg-glass-light border border-white/10 rounded-[28px] flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <CircleBadge size="sm">
                  <Send size={14} className="text-primary" />
                </CircleBadge>
                <span className="text-white text-lg font-semibold">
                  Vamos criar algo?
                </span>
              </div>
              <Badge variant="glass" className="text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponível
              </Badge>
            </div>

            <div className="z-10">
              <h3 className="text-2xl font-bold text-white leading-tight">
                Vamos criar <br />
                <span className="text-[#56ccfb]">algo juntos?</span>
              </h3>
              <p className="text-white/50 text-sm mt-2 max-w-[180px]">
                Estou disponível para novos desafios e oportunidades incríveis.
              </p>
            </div>

            {/* Seção "Disponível para" da imagem */}
            <div className="mt-4 z-10">
              <p className="text-white/70 text-[10px] font-bold mb-3 uppercase tracking-wider">
                Disponível para:
              </p>
              <div className="flex gap-2">
                {/* Mock de ícones de disponibilidade */}
                {[BriefcaseBusiness, Laptop, Code2, Rocket].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>

            {/* Elemento Decorativo (A janelinha de código da imagem) */}
            <div className="absolute right-[20px] top-[30%] opacity-40 select-none pointer-events-none">
              <img src={chat_image} className="w-40" />
            </div>

            <a href="#contact" className="w-full ">
              <Button variant="primary" className="w-full">
                Entrar em contato <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
