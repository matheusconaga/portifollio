import { useCallback, useEffect, useState } from "react";

import {
  Activity,
  Eye,
  MousePointerClick,
  RefreshCw,
  Users,
  WifiOff,
} from "lucide-react";

import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

import { Card } from "@/shared/ui/Card/card";

import { CircleBadge } from "@/shared/ui/circle-badge";

interface PublicAnalyticsStats {
  period: string;

  overview: {
    visitors: number;
    sessions: number;
    pageViews: number;
    projectViews: number;
  };

  interactions: {
    total: number;
    githubClicks: number;
    demoClicks: number;
    linkedinClicks: number;
    whatsappClicks: number;
    emailClicks: number;
    resumeDownloads: number;
  };
}

const API_URL = import.meta.env.VITE_ANALYTICS_API_URL;

export function AnalyticsLiveCard() {
  const { t } = useAppTranslation();

  const [stats, setStats] = useState<PublicAnalyticsStats | null>(null);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const loadAnalytics = useCallback(async (manualRefresh = false) => {
    try {
      if (manualRefresh) {
        setRefreshing(true);
      }

      setError(false);

      const response = await fetch(
        `${API_URL}/api/public/analytics/stats?period=7d`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to load public analytics");
      }

      const data = (await response.json()) as PublicAnalyticsStats;

      setStats(data);
    } catch (error) {
      console.error("Failed to load public analytics:", error);

      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadAnalytics();

    const interval = window.setInterval(() => {
      void loadAnalytics();
    }, 60_000);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadAnalytics]);

  const metrics = stats
    ? [
        {
          icon: Users,
          value: stats.overview.visitors,
          label: t("analyticsLive.visitors"),
        },
        {
          icon: Activity,
          value: stats.overview.sessions,
          label: t("analyticsLive.sessions"),
        },
        {
          icon: Eye,
          value: stats.overview.pageViews,
          label: t("analyticsLive.pageViews"),
        },
        {
          icon: MousePointerClick,
          value: stats.interactions.total,
          label: t("analyticsLive.interactions"),
        },
      ]
    : [];

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
        bg-glass-light

        p-5
        sm:p-6
        lg:p-5
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          gap-3
        "
      >
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2
          "
        >
          <CircleBadge
            size="sm"
            variant="glass"
            className="
              shrink-0
              bg-glass-blue
            "
          >
            <Activity size={12} className="text-primary" />
          </CircleBadge>

          <span
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            {t("analyticsLive.title")}
          </span>
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
          "
        >
          {!error && (
            <div
              className="
                flex
                items-center
                gap-1.5
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex

                    h-full
                    w-full

                    rounded-full

                    bg-green-400

                    opacity-75

                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex

                    h-2
                    w-2

                    rounded-full

                    bg-primary
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white/40
                "
              >
                Live
              </span>
            </div>
          )}

          {/* REFRESH */}
          <button
            type="button"
            onClick={() => {
              void loadAnalytics(true);
            }}
            disabled={refreshing}
            title={t("analyticsLive.refresh")}
            aria-label={t("analyticsLive.refresh")}
            className="
              flex
              h-7
              w-7

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              text-white/40

              transition-colors
              duration-200

              hover:bg-white/[0.06]
              hover:text-primary

              active:bg-white/[0.08]

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* INTRO */}
      <div className="mt-3 shrink-0">
        <h3
          className="
            text-lg
            font-bold
            leading-tight
            text-white

            sm:text-xl
          "
        >
          {t("analyticsLive.heading")}
        </h3>

        <p
          className="
            mt-1

            text-[11px]
            leading-snug
            text-white/50

            sm:text-[12px]
          "
        >
          {t("analyticsLive.period")}
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <div
          className="
            mt-4

            grid
            min-h-0
            flex-1

            grid-cols-2
            grid-rows-2

            gap-2
          "
        >
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="
                  rounded-xl

                  border
                  border-white/5

                  bg-white/[0.03]
                "
            />
          ))}
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div
          className="
              mt-4

              flex
              min-h-0
              flex-1
              flex-col

              items-center
              justify-center

              rounded-xl

              border
              border-white/5

              bg-white/[0.03]

              px-4
              py-4

              text-center
            "
        >
          <WifiOff
            size={20}
            className="
                mb-2
                text-white/40
              "
          />

          <p
            className="
                text-xs
                font-medium
                leading-relaxed
                text-white/60
              "
          >
            {t("analyticsLive.error")}
          </p>

          <button
            type="button"
            onClick={() => {
              void loadAnalytics(true);
            }}
            disabled={refreshing}
            className="
                mt-3

                inline-flex
                items-center
                justify-center
                gap-1.5

                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                px-3
                py-1.5

                text-[10px]
                font-semibold
                text-white/60

                transition-colors
                duration-200

                hover:bg-white/[0.07]
                hover:text-primary

                disabled:opacity-50
              "
          >
            <RefreshCw size={11} className={refreshing ? "animate-spin" : ""} />

            {t("analyticsLive.retry")}
          </button>
        </div>
      )}

      {/* METRICS */}
      {!loading && !error && stats && (
        <div
          className="
              mt-2

              grid
              min-h-0
              flex-1

              grid-cols-2
              grid-rows-2

              gap-2
            "
        >
          {metrics.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="
                    flex
                    min-h-0
                    min-w-0
                    flex-col
                    justify-center

                    rounded-xl

                    border
                    border-white/5

                    bg-white/[0.03]

                    px-3
                    py-2.5
                  "
            >
              {/* VALUE + ICON */}
              <div
                className="
                      flex
                      items-center
                      justify-between
                      gap-2
                    "
              >
                <p
                  className="
                        text-xl
                        font-bold
                        leading-none
                        text-white
                      "
                >
                  {value}
                </p>

                <div
                  className="
                        flex
                        h-7
                        w-7
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-glass-blue
                      "
                >
                  <Icon size={13} className="text-primary" />
                </div>
              </div>

              {/* LABEL */}
              <p
                className="
                      mt-2
                      w-full

                      text-[10px]
                      font-semibold
                      leading-tight
                      text-white/50

                      sm:text-[11px]
                    "
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* STATUS */}
      {!loading && !error && stats && (
        <div
          className="
              flex
              shrink-0
              items-center
              gap-1.5

              pt-2
            "
        >
          <span
            className="
                h-1.5
                w-1.5
                shrink-0

                rounded-full
                bg-emerald-400
              "
          />

          <span
            className="
                text-[9px]
                leading-tight
                text-white/40
              "
          >
            {refreshing ? t("analyticsLive.updating") : t("analyticsLive.live")}
          </span>
        </div>
      )}
    </Card>
  );
}