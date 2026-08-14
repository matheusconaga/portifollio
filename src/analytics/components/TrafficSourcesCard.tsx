interface TrafficSource {
  source: string;
  sessions: number;
  visitors: number;
  percentage: number;
}

interface TrafficSourcesCardProps {
  sources: TrafficSource[];
  totalSessions: number;
}

export default function TrafficSourcesCard({
  sources,
  totalSessions,
}: TrafficSourcesCardProps) {
  if (sources.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-medium">
          Origem do tráfego
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          De onde as sessões do
          portfólio estão vindo.
        </p>

        <div className="mt-8 flex h-32 items-center justify-center">
          <p className="text-sm text-zinc-600">
            Nenhum tráfego registrado
            neste período.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      {/* HEADER */}

      <div>
        <h3 className="text-lg font-medium">
          Origem do tráfego
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          De onde as sessões do
          portfólio estão vindo.
        </p>
      </div>

      {/* SOURCES */}

      <div className="mt-6 space-y-5">
        {sources.map(
          (source) => (
            <div
              key={source.source}
            >
              {/* INFO */}

              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-200">
                    {source.source}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {source.visitors}{" "}
                    {source.visitors ===
                    1
                      ? "visitante"
                      : "visitantes"}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium text-zinc-200">
                    {
                      source.sessions
                    }{" "}
                    {source.sessions ===
                    1
                      ? "sessão"
                      : "sessões"}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {source.percentage.toFixed(
                      1,
                    )}
                    % do tráfego
                  </p>
                </div>
              </div>

              {/* PROGRESS BAR */}

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <div
                  className="h-full rounded-full bg-white/70 transition-[width] duration-500"
                  style={{
                    width: `${Math.min(
                      source.percentage,
                      100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          ),
        )}
      </div>

      {/* TOTAL */}

      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm text-zinc-500">
          Total de sessões
        </span>

        <span className="text-lg font-semibold">
          {totalSessions}
        </span>
      </div>
    </div>
  );
}