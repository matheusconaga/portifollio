import {
  Activity,
  Clock3,
  Gauge,
  Timer,
  Zap,
} from "lucide-react";

import type {
  EngagementAnalyticsResponse,
} from "../api";

interface EngagementAnalyticsCardProps {
  data: EngagementAnalyticsResponse;
}

export default function EngagementAnalyticsCard({
  data,
}: EngagementAnalyticsCardProps) {
  const {
    totalSessions,
    averageDuration,
    longestDuration,
    engagedSessions,
    quickSessions,
    engagementRate,
    distribution,
  } = data;

  return (
    <section
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      {/* HEADER */}
      <div
        className="
          mb-6
          flex
          flex-col
          gap-2
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Activity
              className="
                h-5
                w-5
                text-zinc-300
              "
            />

            <h2
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Engajamento
            </h2>
          </div>

          <p
            className="
              mt-1
              text-sm
              text-zinc-500
            "
          >
            Tempo de permanência e qualidade
            das sessões
          </p>
        </div>

        <div
          className="
            text-sm
            text-zinc-500
          "
        >
          {totalSessions}{" "}
          {totalSessions === 1
            ? "sessão"
            : "sessões"}
        </div>
      </div>

      {/* MÉTRICAS */}
      <div
        className="
          grid
          gap-3
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {/* DURAÇÃO MÉDIA */}
        <MetricItem
          icon={
            <Clock3 className="h-4 w-4" />
          }
          title="Duração média"
          value={averageDuration}
          description="Tempo médio por sessão"
        />

        {/* TAXA DE ENGAJAMENTO */}
        <MetricItem
          icon={
            <Gauge className="h-4 w-4" />
          }
          title="Taxa de engajamento"
          value={`${engagementRate.toLocaleString(
            "pt-BR",
            {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
          )}%`}
          description="Sessões com 30s ou mais"
        />

        {/* SESSÕES ENGAJADAS */}
        <MetricItem
          icon={
            <Activity className="h-4 w-4" />
          }
          title="Sessões engajadas"
          value={engagedSessions.toLocaleString(
            "pt-BR",
          )}
          description="Permanência mínima de 30s"
        />

        {/* SESSÕES RÁPIDAS */}
        <MetricItem
          icon={
            <Zap className="h-4 w-4" />
          }
          title="Sessões rápidas"
          value={quickSessions.toLocaleString(
            "pt-BR",
          )}
          description="Menos de 30 segundos"
        />
      </div>

      {/* DISTRIBUIÇÃO */}
      <div
        className="
          mt-7
          border-t
          border-white/10
          pt-6
        "
      >
        <div
          className="
            mb-5
            flex
            flex-col
            gap-1
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <h3
              className="
                text-sm
                font-medium
                text-zinc-200
              "
            >
              Distribuição por duração
            </h3>

            <p
              className="
                mt-1
                text-xs
                text-zinc-500
              "
            >
              Quantidade de sessões em cada
              faixa de permanência
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-zinc-500
            "
          >
            <Timer className="h-4 w-4" />

            <span>
              Maior sessão:{" "}
              <strong
                className="
                  font-medium
                  text-zinc-300
                "
              >
                {longestDuration}
              </strong>
            </span>
          </div>
        </div>

        <div
          className="
            space-y-4
          "
        >
          {distribution.map(
            (item) => (
              <div
                key={item.key}
              >
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        min-w-[82px]
                        text-sm
                        text-zinc-300
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        text-xs
                        text-zinc-600
                      "
                    >
                      {item.sessions}{" "}
                      {item.sessions === 1
                        ? "sessão"
                        : "sessões"}
                    </span>
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-zinc-300
                    "
                  >
                    {item.percentage.toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      },
                    )}
                    %
                  </span>
                </div>

                <div
                  className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-white/70
                      transition-all
                      duration-500
                    "
                    style={{
                      width: `${
                        item.percentage
                      }%`,
                    }}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ===============================
   SMALL METRIC
================================ */

interface MetricItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

function MetricItem({
  icon,
  title,
  value,
  description,
}: MetricItemProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-4
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          gap-2
          text-zinc-500
        "
      >
        {icon}

        <span
          className="
            text-xs
            font-medium
          "
        >
          {title}
        </span>
      </div>

      <div
        className="
          text-2xl
          font-semibold
          tracking-tight
          text-white
        "
      >
        {value}
      </div>

      <p
        className="
          mt-1
          text-xs
          text-zinc-600
        "
      >
        {description}
      </p>
    </div>
  );
}