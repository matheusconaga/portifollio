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
import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export default function Footer() {
  const { t } = useAppTranslation();

  const techs = [
    { name: "React", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "FastAPI", icon: SiFastapi },
  ];

  const navigationItems = [
    { id: "home", key: "footer.nav.home" },
    { id: "about", key: "footer.nav.about" },
    { id: "projects", key: "footer.nav.projects" },
    { id: "tech", key: "footer.nav.tech" },
    { id: "experience", key: "footer.nav.experience" },
    { id: "contact", key: "footer.nav.contact" },
  ];

  return (
    <footer
      className="
        relative
        w-full
        mt-8 md:mt-20
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
          px-4 sm:px-6 lg:px-8
          py-10 md:py-12
          flex flex-col
          gap-12 md:gap-16
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-[1.5fr_1fr_1fr_1fr]
            gap-10 md:gap-14 xl:gap-16
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
              <span className="relative flex h-2.5 w-2.5 mr-2">
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
              {t("hero.badge")}
            </Badge>

            {/* BRAND */}
            <div className="flex items-center gap-3 flex-wrap">
              <img src={logo} className="w-16 md:w-20" alt="Logo Matheus Lula" />

              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  Matheus Lula
                </span>
                <span className="text-white/70 text-sm md:text-lg font-medium">
                  Fullstack Developer Web & Mobile
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              {t("footer.description")}
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
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xl md:text-2xl font-bold">
                {t("footer.nav.title")}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
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
                  <span>{t(item.key)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-2xl font-bold">
                {t("footer.nav.contact")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Mail size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">{t("contact.email")}</span>
                  <span className="text-gray text-sm">
                    matheusphillip170@gmail.com
                  </span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Smartphone size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">{t("contact.phone")}</span>
                  <span className="text-gray text-sm">+55 (86) 98145-1876</span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <MapPin size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">{t("contact.location")}</span>
                  <span className="text-gray text-sm">{t("footer.location")}</span>
                </div>
              </Card>

              <Card className="flex items-center gap-2 bg-glass-light border border-white/10 p-3">
                <CircleBadge size="sm" variant="glass">
                  <Clock size={16} className="text-white" />
                </CircleBadge>
                <div className="flex flex-col">
                  <span className="text-white">{t("footer.contact.availability")}</span>
                  <span className="text-gray text-sm">
                    {t("footer.contact.hours")}
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA + SOCIAL */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-primary text-2xl md:text-3xl font-bold">
                {t("footer.cta.title")}
              </span>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {t("footer.cta.description")}
              </p>

              <a href="#contact">
                <Button variant="primary-xl" className="w-full sm:w-fit">
                  {t("cta.button")}
                </Button>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <a href="https://github.com/matheusconaga" target="_blank" rel="noreferrer">
                <CircleBadge clickable size="md">
                  <FaGithub size={22} className="text-primary" />
                </CircleBadge>
              </a>

              <a href="https://linkedin.com/in/matheusconaga" target="_blank" rel="noreferrer">
                <CircleBadge clickable size="md">
                  <FaLinkedin size={22} className="text-primary" />
                </CircleBadge>
              </a>

              <a href="https://wa.me/5586981451876" target="_blank" rel="noreferrer">
                <CircleBadge clickable size="md">
                  <FaWhatsapp size={22} className="text-primary" />
                </CircleBadge>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <Card
          className="
            px-4 md:px-6
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            text-center md:text-left
            gap-4
            bg-glass-light
            border border-white/10
          "
        >
          <span className="text-white/50 text-sm">
            {t("footer.copyright")}
          </span>

          <div
            className="
              flex items-center 
              sm:gap-2
              gap-1
              text-white/50
              text-sm
              flex-wrap
              justify-center
            "
          >
            {t("footer.builtWith")}
            <Heart size={14} className="text-primary fill-primary mx-1" />
            {t("footer.builtUsing")}
          </div>
        </Card>
      </div>
    </footer>
  );
}