import type { AnalyticsFunnel } from "../api";

interface FunnelCardProps {
  funnel: AnalyticsFunnel;
}

interface FunnelStepProps {
  label: string;
  value: number;
  percentage?: number;
  isLast?: boolean;
}

function FunnelStep({
  label,
  value,
  percentage,
  isLast = false,
}: FunnelStepProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-zinc-300">
          {label}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-200">
            {value}
          </span>

          {percentage !== undefined && (
            <span className="min-w-14 text-right text-xs text-zinc-500">
              {percentage.toFixed(1)}%
            </span>
          )}
        </div>
      </div>

      {!isLast && (
        <div className="my-3 ml-1 h-5 border-l border-dashed border-white/10" />
      )}
    </div>
  );
}

export default function FunnelCard({
  funnel,
}: FunnelCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-medium">
          Funil de conversão
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Caminho dos visitantes pelas
          principais interações.
        </p>
      </div>

      <div>
        <FunnelStep
          label="Visitantes"
          value={funnel.visitors}
        />

        <FunnelStep
          label="Visualizações de projetos"
          value={funnel.projectViews}
          percentage={
            funnel.conversion
              .visitorsToProjects
          }
        />

        <FunnelStep
          label="Interações com projetos"
          value={
            funnel.projectInteractions
          }
          percentage={
            funnel.conversion
              .projectsToInteraction
          }
        />

        <FunnelStep
          label="Cliques no GitHub"
          value={funnel.githubClicks}
          percentage={
            funnel.conversion
              .interactionToGithub
          }
        />

        <FunnelStep
          label="Cliques de contato"
          value={funnel.contactClicks}
          percentage={
            funnel.conversion.githubToContact
          }
          isLast
        />
      </div>
    </section>
  );
}