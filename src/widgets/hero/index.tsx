import logo from "@/assets/logo_matheus.webp"


export default function Hero() {
  return (
    <div className="h-screen flex justify-center">

      <div className="flex flex-col items-start gap-2 fd">
        {/* LOGO + APRESENTACAO + CARD_STACKS */}
        <div className="flex items-center w-100 gap-2 cursor-pointer">
          <img src={logo} className="w-40" />
          <div className=" flex flex-col gap-2">
            <span className="font-bold text-white text-3xl w-200">olá, eu sou o</span>
            <span className="font-bold text-primary text-6xl w-200">Matheus Lula</span>
            <span className="font-bold text-white text-3xl w-200">Fullstack developer Web & Mobile</span>
          </div>

        </div>
        <span className="text-gray text-lg w-200">Desenvolvedor Fullstack especializado em Web, Mobile, APIs e IA. Crio produtos rápidos, escaláveis e com foco em experiência do usuário.</span>

      </div>

      <div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} className="w-80" />
        </div>

      </div>
    </div>
  )
}