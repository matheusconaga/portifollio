import eu_persona from "@/assets/eu_persona.webp";

import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { Code } from "lucide-react";

export function WorkCard() {
  return (
    <Card
      className="
        relative
        overflow-hidden
        bg-glass-light
        border border-white/10
        rounded-[28px]
        h-full
        flex flex-col
        justify-end
        hover:border-primary/30
        hover:shadow-xl
        hover:shadow-primary/10
        transition-all duration-300
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,210,250,0.15),transparent_70%)] pointer-events-none" />

      <div className="absolute top-5 left-5 z-20">
        <div className="flex items-center gap-1">
          <CircleBadge size="sm">
            <Code size={12} className="text-primary" />
          </CircleBadge>

          <span className="text-white text-sm font-semibold">
            Trabalhando nisso
          </span>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={eu_persona}
          className="w-[150px] lg:w-[180px] object-contain pointer-events-none select-none drop-shadow-[0_0_40px_rgba(119,210,250,0.25)]"
          alt="Persona"
        />
      </div>

      <div className="relative z-20 w-full p-2 mt-auto">
        <Card
          variant="glass-light"
          className="py-3 px-3 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/10"
        >
          <div className="flex flex-col">
            <h3 className="flex text-[14px] font-bold text-white leading-tight gap-1 whitespace-nowrap">
              <span>Criando soluções</span>

              <span className="text-primary">modernas</span>
            </h3>

            <p className="text-white/60 text-[11px] leading-relaxed mt-1">
              Interfaces performáticas, modernas e escaláveis.
            </p>
          </div>
        </Card>
      </div>
    </Card>
  );
}