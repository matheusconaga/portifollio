import { CircleBadge } from "@/shared/ui/circle-badge";
import { SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

export function FloatingContacts() {
  return (
    <div
      className="
        fixed
        bottom-6
        right-3
        z-[9999]

        flex flex-col
        gap-4
      "
    >
      <a href="mailto:matheusphillip170@gmail.com" className="group relative">
        <CircleBadge
        size="lg"
          variant="glass"
          clickable
        >
          <Mail size={22} className="text-primary"/>
        </CircleBadge>

        <div
          className="
            absolute
            right-16
            top-1/2
            -translate-y-1/2

            opacity-0
            translate-x-3

            group-hover:opacity-100
            group-hover:translate-x-0

            transition-all duration-300

            whitespace-nowrap

            bg-[#080322]/95
            backdrop-blur-xl

            border border-white/10

            px-4 py-2
            rounded-full

            text-sm text-white
            font-medium

            pointer-events-none
          "
        >
          Me envie um e-mail
        </div>
      </a>

      <a
        href="https://wa.me/5586981451876"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <CircleBadge
        size="lg"
          variant="glass"
          clickable
        >
          <SiWhatsapp size={22} className="text-primary"/>
        </CircleBadge>

        <div
          className="
            absolute
            right-16
            top-1/2
            -translate-y-1/2

            opacity-0
            translate-x-3

            group-hover:opacity-100
            group-hover:translate-x-0

            transition-all duration-300

            whitespace-nowrap

            bg-[#080322]/95
            backdrop-blur-xl

            border border-white/10

            px-4 py-2
            rounded-full

            text-sm text-white
            font-medium

            pointer-events-none
          "
        >
          Fale comigo no WhatsApp
        </div>
      </a>
    </div>
  );
}
