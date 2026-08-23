import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { Terminal } from "lucide-react";

export function CodeCard() {
  const { t } = useAppTranslation();

  return (
    <Card
      className="
        relative
        flex
        h-full
        w-full
        flex-col

        overflow-hidden

        rounded-[28px]
        border
        border-white/10
        bg-glass-light

        p-6

        transition-all
        duration-300

        hover:border-primary/20
        hover:shadow-xl
        hover:shadow-primary/10
      "
    >
      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <CircleBadge size="sm">
            <Terminal size={12} className="text-primary" />
          </CircleBadge>

          <span className="text-sm font-semibold text-white">developer.ts</span>
        </div>

        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/80" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <div className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-40
          w-40
          bg-primary/10
          blur-3xl
        "
      />

      {/* CODE */}
      <div
        className="
          relative
          z-10

          flex
          min-h-0
          flex-1
          flex-col
          justify-center

          font-mono
          text-[10px]
          leading-6
        "
      >
        <p className="text-blue-400">
          const <span className="text-purple-400">developer</span> = {"{"}
        </p>

        <p className="pl-4 text-white/90">
          name: <span className="text-green-300">'Matheus'</span>,
        </p>

        <p className="pl-4 text-white/90">
          stack: [<span className="text-green-300">'React'</span>,{" "}
          <span className="text-green-300">'TypeScript'</span>,{" "}
          <span className="text-green-300">'Flutter'</span>,{" "}
          <span className="text-green-300">'Python'</span>,{" "}
          <span className="text-green-300">'FastAPI'</span>
          ],
        </p>

        <p className="pl-4 text-white/90">
          focus: [<span className="text-green-300">'Performance'</span>,{" "}
          <span className="text-green-300">'Scalability'</span>,{" "}
          <span className="text-green-300">'UX'</span>
          ],
        </p>

        <p className="pl-4 text-white/90">
          mission: <span className="text-green-300">'Build scalable apps'</span>
          ,
        </p>

        <p className="pl-4 text-white/90">
          passion:{" "}
          <span className="text-green-300">'{t("code.card.passion")}'</span>,
        </p>

        <p className="text-blue-400">{"}"};</p>
      </div>
    </Card>
  );
}
