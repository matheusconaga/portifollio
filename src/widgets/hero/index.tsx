import logo from "@/assets/logo_matheus.webp"
import { Badge } from "@/shared/ui/badge"
import eu from "@/assets/euxl.png"
import { Button } from "@/shared/ui/button"
import { Download, MoveRight, CodeXml, Mouse } from "lucide-react"
import { Card } from "@/shared/ui/Card/card"
import { CardImage } from "@/shared/ui/Card/card-image"
import styled from "styled-components"
import { SiFastapi, SiFlutter } from "react-icons/si"
import { FaReact } from "react-icons/fa"

const techs = [
  { name: "React", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "FastAPI", icon: SiFastapi },
]

export default function Hero() {


  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto ">

      <div className="flex justify-center items-center gap-20">

        <div className="flex flex-col items-start gap-2 fd w-180">
          <Badge variant="glass" className="text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponível para novos projetos
          </Badge>

          {/* LOGO + APRESENTACAO + CARD_STACKS */}
          <div className="flex items-center w-100 gap-2 cursor-pointer">
            <img src={logo} className="w-50" />
            <div className=" flex flex-col gap-2 p-4 rounded-lg">
              <span className="font-semibold text-white text-3xl ">olá, eu sou o</span>
              <span className="font-bold text-primary text-6xl ">Matheus Lula</span>
              <span className="font-semibold text-white text-3xl w-130">Fullstack developer Web & Mobile</span>
              <div className="flex items-center gap-2">
                {techs.map((tech, index) => {
                  const Icon = tech.icon

                  return (
                    <Card
                      key={index}
                      variant="glass-blue"
                      className="
                  group
                  flex items-center gap-3
                  px-5 py-3
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
              </div>
            </div>


          </div>
          <span className="text-gray text-xl">Desenvolvedor Fullstack especializado em Web, Mobile, APIs e IA.</span>
          <span className="text-gray text-xl ">APIs e IA. Crio produtos rápidos, escaláveis e com foco</span>
          <span className="text-gray text-xl ">em experiência do usuário.</span>
          <div className="flex flex-row gap-4 mt-4">
            <Button variant="primary-xl" rightIcon={<MoveRight size={25} />}>Ver Projetos</Button>
            <Button variant="outline-xl" rightIcon={<Download size={25} />}>Currículo</Button>
          </div>

        </div>

        <div>

          <div className="relative w-90 h-90">

            <Card className="w-full h-full rounded-lg overflow-hidden">
              <CardImage
                src={eu}
                alt="Foto minha"
                fit="contain"
                position="bottom-right"
              />
            </Card>

            {/* 👇 Badge flutuando */}
            <div className="absolute top-80 right-2 hover:scale-[1.01] hover:border-white/20">
              <Badge variant="glass" className="flex items-center gap-2 px-3 py-2 shadow-lg shadow-black/20">

                <Badge variant="glass" className="p-2">
                  <CodeXml size={16} />
                </Badge>

                <span className="flex flex-col leading-tight">
                  <span className="text-white text-sm">
                    Soluções Fullstack
                  </span>
                  <span className="text-white/60 text-xs">
                    Web & Mobile & IA
                  </span>
                </span>

              </Badge>
            </div>

          </div>

        </div>

      </div>

      <MouseDiv>
        <MouseIcon size={30} />
      </MouseDiv>

    </div>

  )
}

const MouseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;

  @media (max-width: 480px) {
    display: none;
  }
`;


const MouseIcon = styled(Mouse)`
    color: var(--color-primary);
    animation: bounce 2s infinite ease-in-out;

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(10px); opacity: 0.7; }
        100% { transform: translateY(0); }
    }
`;