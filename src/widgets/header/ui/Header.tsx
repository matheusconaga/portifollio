import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { MenuItem } from "./MenuItem";

import logo from "@/assets/logo_matheus.webp";

import { ArrowUpRight, Menu, X } from "lucide-react";
import MobileItem from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2

        z-[9999]

        w-full
        px-4

        flex
        justify-center
      "
    >
      <div className="relative w-[850px] hover:w-[1000px] transition-all duration-700 ">
        {/* NAVBAR */}
        <div
          className="
            group

            flex
            items-center
            justify-between

            w-full

            px-5 py-2
            md:px-6 md:py-2
            hover:py-4

            rounded-full

            bg-glass-dark
            hover:bg-glass-dark-on

            backdrop-blur-md
            border border-white/10

            transition-all duration-500
          "
        >
          {/* LOGO */}
          <a href="#home">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={logo}
                fetchPriority="high"
                className="
                  w-11
                  md:w-14
                "
              />

              <span
                className="
                  font-bold
                  text-white

                  text-lg
                  md:text-2xl

                  whitespace-nowrap
                "
              >
                Matheus Lula
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav
            className="
              hidden
              lg:flex

              items-center
              gap-6

              text-white
            "
          >
            <MenuItem href="#home">Início</MenuItem>

            <MenuItem href="#about">Sobre</MenuItem>

            <MenuItem href="#projects">Projetos</MenuItem>

            <MenuItem href="#tech">Tecnologias</MenuItem>

            <MenuItem href="#experience">Experiências</MenuItem>

            <a href="#contact">
              <Button variant="primary">Contato</Button>
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden

              flex
              items-center
              justify-center

              w-11 h-11

              rounded-full

              bg-white/5
              border border-white/10

              text-white

              hover:border-primary/40
              hover:text-primary

              transition-all duration-300
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden

            absolute
            top-[110%]
            left-0

            w-full

            overflow-hidden

            rounded-3xl

            bg-glass-dark
            backdrop-blur-xl

            border border-white/10

            transition-all duration-500

            ${
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <nav
            className="
              flex
              flex-col

              p-4

              text-white
            "
          >
            <MobileItem href="#home" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-row gap-2 items-center">
                <ArrowUpRight
                  className="
                      size-4

                     
                    "
                />
                Início
              </div>
            </MobileItem>

            <MobileItem href="#about" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-row gap-2 items-center">
                <ArrowUpRight
                  className="
                      size-4

                     
                    "
                />
                Sobre
              </div>
            </MobileItem>

            <MobileItem href="#projects" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-row gap-2 items-center">
                <ArrowUpRight
                  className="
                      size-4

                     
                    "
                />
                Projetos
              </div>
            </MobileItem>

            <MobileItem href="#tech" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-row gap-2 items-center">
                <ArrowUpRight
                  className="
                      size-4

                     
                    "
                />
                Tecnologias
              </div>
            </MobileItem>

            <MobileItem href="#experience" onClick={() => setMenuOpen(false)}>
              <div className="flex flex-row gap-2 items-center">
                <ArrowUpRight
                  className="
                      size-4

                     
                    "
                />
                Experiências
              </div>
            </MobileItem>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3"
            >
              <Button variant="primary" className="w-full">
                Contato
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
