import { Button } from "@/shared/ui/button"
import { MenuItem } from "./MenuItem"
import logo from "@/assets/logo_matheus.webp"

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">

      <div
        className="
          group
          flex items-center justify-between 

          w-[850px] hover:w-[1000px]
          px-6 py-3 hover:px-8 hover:py-4
          
          rounded-full

          bg-glass-dark
          backdrop-blur-md
          border border-white/10

          transition-all duration-900
        "
      >
        {/* Logo */}
        <a href="#home">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} className="w-15" />
            <span className="font-bold text-white text-2xl">Matheus Lula</span>
          </div>
        </a>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-white">
          <MenuItem href="#home">
            Início
          </MenuItem>
          <MenuItem href="#about">
            Sobre
          </MenuItem>
          <MenuItem href="#projects">
            Projetos
          </MenuItem>

          <MenuItem href="#tech">
            Tecnologias
          </MenuItem>

          <MenuItem href="#resume">
            Currículo
          </MenuItem>

          <a href="#contact">
            <Button variant="primary">
              Contato
            </Button>
          </a>
        </nav>

      </div>

    </header>
  )
}