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
        overflow-hidden
        h-full
        p-6
        bg-glass-light
        border border-white/10
        rounded-[28px]
        flex flex-col
        hover:border-primary/20
        hover:shadow-xl
        hover:shadow-primary/10
        transition-all duration-300
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <CircleBadge size="sm">
            <Terminal size={12} className="text-primary" />
          </CircleBadge>

          <span className="text-white text-sm font-semibold">developer.ts</span>
        </div>

        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl" />

      <div
        className="
    relative
    mt-4
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
          <span className="text-green-300">
            '{t("code.card.passion")}'
          </span>
          ,
        </p>


        <p className="text-blue-400">{"}"};</p>
      </div>
    </Card>
  );
}
