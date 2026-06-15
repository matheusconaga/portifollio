import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { MenuItem } from "./MenuItem";

import logo from "@/assets/logo_matheus.webp";

import { ArrowUpRight, Menu, X } from "lucide-react";

import MobileItem from "./MobileItem";

import {
  importContact,
  importExperience,
  importProjects,
  importTechStacks,
} from "@/shared/ui/Lazy-Loading/lazy-imports";

import { scrollToSection } from "@/shared/utils/scroll-to-section";
import { preloadAndScroll } from "@/shared/utils/preload-and-scroll";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";
import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useAppTranslation();

  const navItems = [
    { id: "home", key: "footer.nav.home", importer: null },
    { id: "about", key: "footer.nav.about", importer: null },
    { id: "projects", key: "footer.nav.projects", importer: importProjects },
    { id: "tech", key: "footer.nav.tech", importer: importTechStacks },
    { id: "experience", key: "footer.nav.experience", importer: importExperience },
  ];

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
      <div className="relative w-[900px] hover:w-[1100px] transition-all duration-700">
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
          <button onClick={() => scrollToSection("home")}>
            <div className="flex items-center cursor-pointer">
              <img
                src={logo}
                fetchPriority="high"
                className="w-11 md:w-14"
                alt="Logo Matheus Lula"
              />
              <span className="font-bold text-white text-lg md:text-2xl whitespace-nowrap">
                Matheus Lula
              </span>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 text-white">
            {navItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={async () => {
                  if (item.importer) {
                    await preloadAndScroll(item.importer, item.id);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                onMouseEnter={item.importer ? item.importer : undefined}
                onTouchStart={item.importer ? item.importer : undefined}
              >
                {t(item.key)}
              </MenuItem>
            ))}

            <div>
              <LanguageSwitcher />
            </div>

            <div onMouseEnter={importContact} onTouchStart={importContact}>
              <Button
                variant="primary"
                onClick={async () => {
                  await preloadAndScroll(importContact, "contact");
                }}
              >
                {t("footer.nav.contact")}
              </Button>
            </div>
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
              active:scale-95
              active:border-primary/40
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
          <nav className="flex flex-col p-4 text-white">
            {navItems.map((item) => (
              <MobileItem
                key={item.id}
                onClick={async () => {
                  if (item.importer) {
                    await preloadAndScroll(item.importer, item.id);
                  } else {
                    scrollToSection(item.id);
                  }
                  setMenuOpen(false);
                }}
              >
                <div className="flex flex-row gap-2 items-center">
                  <ArrowUpRight className="size-4" />
                  {t(item.key)}
                </div>
              </MobileItem>
            ))}

            <div className="mt-2">
              <LanguageSwitcher mobile />
            </div>

            <div
              className="mt-3"
              onClick={async () => {
                await preloadAndScroll(importContact, "contact");
                setMenuOpen(false);
              }}
            >
              <Button variant="primary" className="w-full">
                {t("footer.nav.contact")}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}