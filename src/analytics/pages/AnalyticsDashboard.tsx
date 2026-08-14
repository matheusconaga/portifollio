import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getFunnel,
  getProjects,
  getStats,
  getTimeline,
  getVisitors,
  getReferrers,
  getDevices,
  getHours,
  getEngagement,
  type AnalyticsFunnel,
  type AnalyticsPeriod,
  type AnalyticsStats,
  type AnalyticsTimelineResponse,
  type ProjectsAnalyticsResponse,
  type VisitorAnalytics,
  type TrafficSourcesResponse,
  type DeviceAnalyticsResponse,
  type HourAnalyticsResponse,
  type EngagementAnalyticsResponse,
} from "../api";

import FunnelCard from "../components/FunnelCard";
import ProjectsTable from "../components/ProjectsTable";
import PeriodSelector from "../components/PeriodSelector";
import TimelineChart from "../components/TimelineChart";
import TrafficSourcesCard from "../components/TrafficSourcesCard";
import DevicesAnalyticsCard from "../components/DevicesAnalyticsCard";
import AccessHoursChart from "../components/AccessHoursChart";
import EngagementAnalyticsCard from "../components/EngagementAnalyticsCard";

import { logout } from "../auth";

interface AnalyticsDashboardProps {
  onLogout: () => void;
}

type TimelineMetric =
  | "visitors"
  | "sessions"
  | "pageViews"
  | "projectViews";

interface MetricCardProps {
  label: string;
  value: number | string;
  description?: string;
  comparison?: number | null;
}

function MetricCard({
  label,
  value,
  description,
  comparison,
}: MetricCardProps) {
  const hasComparison =
    comparison !== null &&
    comparison !== undefined;

  const isPositive =
    hasComparison &&
    comparison > 0;

  const isNegative =
    hasComparison &&
    comparison < 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm text-zinc-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-semibold tracking-tight">
        {value}
      </p>

      {hasComparison && (
        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <span
            className={[
              "font-medium",
              isPositive
                ? "text-emerald-400"
                : isNegative
                  ? "text-red-400"
                  : "text-zinc-400",
            ].join(" ")}
          >
            {isPositive
              ? "↑"
              : isNegative
                ? "↓"
                : "→"}{" "}
            {Math.abs(comparison).toFixed(1)}%
          </span>

          <span className="text-zinc-600">
            vs. período anterior
          </span>
        </div>
      )}

      {!hasComparison && (
        <p className="mt-2 text-xs text-zinc-600">
          Sem comparação disponível
        </p>
      )}

      {description && (
        <p className="mt-2 text-xs text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="h-[132px] animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
  );
}

function LoadingLargeCard() {
  return (
    <div className="h-[420px] animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
  );
}

export default function AnalyticsDashboard({
  onLogout,
}: AnalyticsDashboardProps) {
  const [period, setPeriod] =
    useState<AnalyticsPeriod>("7d");

  const [stats, setStats] =
    useState<AnalyticsStats | null>(
      null,
    );

  const [visitors, setVisitors] =
    useState<VisitorAnalytics | null>(
      null,
    );

  const [projects, setProjects] =
    useState<ProjectsAnalyticsResponse | null>(
      null,
    );

  const [funnel, setFunnel] =
    useState<AnalyticsFunnel | null>(
      null,
    );


  const [timeline, setTimeline] =
    useState<AnalyticsTimelineResponse | null>(
      null,
    );

  const [
    deviceAnalytics,
    setDeviceAnalytics,
  ] = useState<DeviceAnalyticsResponse | null>(
    null,
  );

  const [
  engagement,
  setEngagement,
] =
  useState<EngagementAnalyticsResponse | null>(
    null,
  );

  const [
    timelineMetric,
    setTimelineMetric,
  ] = useState<TimelineMetric>(
    "visitors",
  );

  const [
    trafficSources,
    setTrafficSources,
  ] = useState<TrafficSourcesResponse | null>(
    null,
  );

  const [
  hourAnalytics,
  setHourAnalytics,
] = useState<HourAnalyticsResponse | null>(
  null,
);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadDashboard = useCallback(
    async () => {
      setLoading(true);
      setError("");

      try {
        const [
          statsData,
          visitorsData,
          projectsData,
          funnelData,
          timelineData,
          trafficSourcesData,
          deviceAnalyticsData,
          hourAnalyticsData,
          engagementData,
        ] = await Promise.all([
          getStats(period),
          getVisitors(period),
          getProjects(period),
          getFunnel(period),
          getTimeline(period),
          getReferrers(period),
          getDevices(period),
          getHours(period),
          getEngagement(period),
        ]);

        setStats(statsData);
        setVisitors(visitorsData);
        setProjects(projectsData);
        setFunnel(funnelData);
        setTimeline(timelineData);  
        setTrafficSources(trafficSourcesData);
        setDeviceAnalytics(deviceAnalyticsData);
        setHourAnalytics(hourAnalyticsData);
        setEngagement(engagementData);
      } catch (error) {
        if (
          error instanceof Error &&
          error.message ===
            "AUTHENTICATION_REQUIRED"
        ) {
          onLogout();
          return;
        }

        console.error(error);

        setError(
          "Não foi possível carregar os dados.",
        );
      } finally {
        setLoading(false);
      }
    },
    [period, onLogout],
  );

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  async function handleLogout() {
    await logout();
    onLogout();
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              Área privada
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              Analytics do Portfólio
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Acompanhe como seu portfólio
              está sendo utilizado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PeriodSelector
              value={period}
              onChange={setPeriod}
              disabled={loading}
            />

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              Sair
            </button>
          </div>
        </header>

        {/* ERROR */}

        {error && (
          <div className="mt-6 flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
            <p className="text-sm text-red-400">
              {error}
            </p>

            <button
              type="button"
              onClick={loadDashboard}
              className="text-sm text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* MAIN METRICS */}

        <section className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {loading || !stats ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              <>
                <MetricCard
                  label="Visitantes"
                  value={stats.visitors}
                  comparison={
                    stats.comparison
                      ?.visitorsPercentage
                  }
                  description="Visitantes únicos no período"
                />

                <MetricCard
                  label="Sessões"
                  value={stats.sessions}
                  comparison={
                    stats.comparison
                      ?.sessionsPercentage
                  }
                  description="Sessões iniciadas"
                />

                <MetricCard
                  label="Page Views"
                  value={stats.pageViews}
                  comparison={
                    stats.comparison
                      ?.pageViewsPercentage
                  }
                  description="Visualizações de página"
                />

                <MetricCard
                  label="Projetos"
                  value={stats.projectViews}
                  comparison={
                    stats.comparison
                      ?.projectViewsPercentage
                  }
                  description="Visualizações da seção de projetos"
                />
              </>
            )}
          </div>
        </section>

        {/* TIMELINE */}

        <section className="mt-8">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-medium">
                Evolução
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Acompanhe o comportamento do
                portfólio ao longo do tempo.
              </p>
            </div>

            <div className="flex flex-wrap gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
              {[
                {
                  value: "visitors" as const,
                  label: "Visitantes",
                },
                {
                  value: "sessions" as const,
                  label: "Sessões",
                },
                {
                  value: "pageViews" as const,
                  label: "Page Views",
                },
                {
                  value: "projectViews" as const,
                  label: "Projetos",
                },
              ].map((item) => {
                const isActive =
                  timelineMetric ===
                  item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() =>
                      setTimelineMetric(
                        item.value,
                      )
                    }
                    className={[
                      "rounded-lg px-3 py-2 text-sm transition",
                      isActive
                        ? "bg-white text-black"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {loading || !timeline ? (
            <LoadingLargeCard />
          ) : (
            <TimelineChart
              data={timeline.data}
              metric={timelineMetric}
            />
          )}
        </section>


        {/* ACCESS HOURS */}

<section className="mt-6">
  {loading || !hourAnalytics ? (
    <LoadingLargeCard />
  ) : (
    <AccessHoursChart
      hours={
        hourAnalytics.hours
      }
      peakHour={
        hourAnalytics.peakHour
      }
      totalSessions={
        hourAnalytics.totalSessions
      }
    />
  )}
</section>

{/* ENGAGEMENT */}

<section className="mt-6">
  {loading || !engagement ? (
    <LoadingLargeCard />
  ) : (
    <EngagementAnalyticsCard
      data={engagement}
    />
  )}
</section>

{/* TRAFFIC SOURCES */}

<section className="mt-6">
  {loading || !trafficSources ? (
    <LoadingLargeCard />
  ) : (
    <TrafficSourcesCard
      sources={
        trafficSources.sources
      }
      totalSessions={
        trafficSources.totalSessions
      }
    />
  )}
</section>

{/* DEVICES AND BROWSERS */}

<section className="mt-6">
  {loading || !deviceAnalytics ? (
    <div className="grid gap-6 lg:grid-cols-2">
      <LoadingLargeCard />
      <LoadingLargeCard />
    </div>
  ) : (
    <DevicesAnalyticsCard
      devices={
        deviceAnalytics.devices
      }
      browsers={
        deviceAnalytics.browsers
      }
    />
  )}
</section>


        {/* INTERACTIONS */}

        <section className="mt-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium">
              Interações
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Ações realizadas pelos visitantes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {loading || !stats ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              <>
                <MetricCard
                  label="GitHub"
                  value={stats.githubClicks}
                  comparison={stats.comparison?.githubClicksPercentage}
                />

                <MetricCard
                  label="Demo"
                  value={stats.demoClicks}
                  comparison={stats.comparison?.demoClicksPercentage}
                />

                <MetricCard
                  label="LinkedIn"
                  value={stats.linkedinClicks}
                  comparison={stats.comparison?.linkedinClicksPercentage}
                />

                <MetricCard
                  label="WhatsApp"
                  value={stats.whatsappClicks}
                  comparison={stats.comparison?.whatsappClicksPercentage}
                />

                <MetricCard
                  label="E-mail"
                  value={stats.emailClicks}
                  comparison={stats.comparison?.emailClicksPercentage}
                />
              </>
            )}
          </div>
        </section>

        {/* PROJECTS + FUNNEL */}

        <section className="mt-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            {loading || !projects ? (
              <LoadingLargeCard />
            ) : (
              <ProjectsTable
                projects={projects.projects}
              />
            )}

            {loading || !funnel ? (
              <LoadingLargeCard />
            ) : (
              <FunnelCard
                funnel={funnel}
              />
            )}
          </div>
        </section>

        {/* VISITORS */}

        <section className="mt-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium">
              Visitantes
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Comportamento dos visitantes no
              período selecionado.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loading || !visitors ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              <>
                <MetricCard
                  label="Novos visitantes"
                  value={
                    visitors.newVisitors
                  }
                  description="Primeira visita identificada"
                />

                <MetricCard
                  label="Visitantes recorrentes"
                  value={
                    visitors.returningVisitors
                  }
                  description="Visitantes que retornaram"
                />

                <MetricCard
                  label="Sessões por visitante"
                  value={visitors.averageSessionsPerVisitor.toFixed(
                    2,
                  )}
                  description="Média no período"
                />
              </>
            )}
          </div>
        </section>

        {/* FOOTER INFO */}

        <footer className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Período:{" "}
              {period === "today"
                ? "Hoje"
                : period === "7d"
                  ? "Últimos 7 dias"
                  : period === "30d"
                    ? "Últimos 30 dias"
                    : "Todo o período"}
            </span>

            <button
              type="button"
              onClick={loadDashboard}
              disabled={loading}
              className="text-zinc-500 transition hover:text-zinc-300 disabled:opacity-50"
            >
              {loading
                ? "Atualizando..."
                : "Atualizar dados"}
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}