import chat_image from "@/assets/chat-dev.webp";

import { Button } from "@/shared/ui/button";

import { Card } from "@/shared/ui/Card/card";

import { CircleBadge } from "@/shared/ui/circle-badge";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Laptop,
  Rocket,
  Send,
} from "lucide-react";

export function CtaCard() {
  return (
    <Card className="relative p-6 bg-glass-light border border-white/10 rounded-[28px] flex flex-col justify-between overflow-hidden h-full">
      <div className="flex items-center gap-1">
        <CircleBadge size="sm">
          <Send size={12} className="text-primary" />
        </CircleBadge>

        <span className="text-white text-sm font-semibold">
          Vamos criar algo?
        </span>
      </div>

      <div className="z-10 mt-4">
        <h3 className="text-xl font-bold text-white leading-tight">
          Vamos criar <br />

          <span className="text-[#56ccfb]">algo juntos?</span>
        </h3>

        <p className="text-white/50 text-[12px] mt-2 max-w-[180px]">
          Estou disponível para novos desafios e oportunidades.
        </p>
      </div>

      <div className="z-10 my-4">
        <p className="text-white/70 text-[10px] font-bold mb-3 uppercase tracking-wider">
          Disponível para:
        </p>

        <div className="flex gap-2">
          {[BriefcaseBusiness, Laptop, Code2, Rocket].map(
            (Icon, i) => (
              <CircleBadge key={i} size="sm" variant="glass" className="bg-glass-blue">
                 <Icon size={16} className="text-primary"/>
              </CircleBadge>
            )
          )}
        </div>
      </div>

      <div className="absolute right-[-2px] lg:right-[-3px] top-[15%] opacity-20 lg:opacity-40 select-none pointer-events-none">
        <img
          src={chat_image}
          className="w-25 lg:w-40"
          alt="chat decoration"
        />
      </div>

      <a href="#contact" className="w-full mt-auto">
        <Button variant="primary" className="w-full">
          Entrar em contato

          <ArrowRight size={18} className="ml-2" />
        </Button>
      </a>
    </Card>
  );
}