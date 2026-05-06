import logo from "@/assets/logo_matheus.webp"
import { Badge } from "@/shared/ui/badge"
import react_logo from "@/assets/tecs/react.png"
import flutter_logo from "@/assets/tecs/flutter.png"
import fastapi_logo from "@/assets/tecs/fastapi.svg"
import { Button } from "@/shared/ui/button"
import { Download, MoveRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="h-screen flex justify-center">

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
            <span className="font-bold text-white text-3xl ">olá, eu sou o</span>
            <span className="font-bold text-primary text-6xl ">Matheus Lula</span>
            <span className="font-bold text-white text-3xl w-130">Fullstack developer Web & Mobile</span>
            <div className="flex items-center gap-2">
              <Badge variant="tag" imageSrc={react_logo}>React</Badge>
              <Badge variant="tag" imageSrc={flutter_logo}>Flutter</Badge>
              <Badge variant="tag" imageSrc={fastapi_logo}>FastAPI</Badge>
            </div>
          </div>


        </div>
        <span className="text-gray text-xl">Desenvolvedor Fullstack especializado em Web, Mobile, APIs e IA.</span>
        <span className="text-gray text-xl ">APIs e IA. Crio produtos rápidos, escaláveis e com foco</span>
        <span className="text-gray text-xl ">em experiência do usuário.</span>
        <div className="flex flex-row gap-4 mt-4">
          <Button variant="primary-xl" rightIcon= {<MoveRight size={25}/>}>Ver Projetos</Button>
          <Button variant="outline-xl" rightIcon= {<Download size={25}/>}>Currículo</Button>
        </div>

      </div>

      <div>

        <div className="flex items-center gap-2 cursor-pointer bg-gray">
          <img src={logo} className="w-100" />
        </div>

      </div>
    </div>
  )
}