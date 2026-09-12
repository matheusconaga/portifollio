import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getServerStatus,
  type ServerStatus,
  type ServiceStatus,
} from "../api/server-status";

import {
  logout,
} from "../../analytics/auth";

interface ServerDashboardProps {
  onLogout: () => void;
}

interface BeforeInstallPromptEvent
  extends Event {
  prompt: () => Promise<void>;

  userChoice: Promise<{
    outcome:
      | "accepted"
      | "dismissed";
    platform: string;
  }>;
}

type MetricType =
  | "resource"
  | "battery";

const REFRESH_INTERVAL = 15_000;

/* =========================
   FORMATTERS
========================= */

function formatBytes(
  bytes: number,
): string {
  if (
    !Number.isFinite(bytes) ||
    bytes <= 0
  ) {
    return "0 B";
  }

  const units = [
    "B",
    "KB",
    "MB",
    "GB",
    "TB",
  ];

  let value = bytes;
  let unitIndex = 0;

  while (
    value >= 1024 &&
    unitIndex <
      units.length - 1
  ) {
    value /= 1024;
    unitIndex++;
  }

  return `${value.toFixed(
    value >= 10 ? 0 : 1,
  )} ${units[unitIndex]}`;
}

function formatUptime(
  totalSeconds: number,
): string {
  if (
    !Number.isFinite(
      totalSeconds,
    ) ||
    totalSeconds < 0
  ) {
    return "0m";
  }

  const days = Math.floor(
    totalSeconds / 86400,
  );

  const hours = Math.floor(
    (totalSeconds % 86400) /
      3600,
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) /
      60,
  );

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  }

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
}

function formatTimestamp(
  isoDate: string,
): string {
  try {
    return new Date(
      isoDate,
    ).toLocaleString(
      "pt-BR",
      {
        dateStyle: "short",
        timeStyle: "medium",
      },
    );
  } catch {
    return isoDate;
  }
}

/* =========================
   COLORS / STATUS
========================= */

function getMetricTone(
  value: number,
  type: MetricType = "resource",
): string {
  if (type === "battery") {
    if (value <= 20) {
      return "bg-red-400";
    }

    if (value <= 40) {
      return "bg-amber-400";
    }

    return "bg-emerald-400";
  }

  if (value >= 85) {
    return "bg-red-400";
  }

  if (value >= 65) {
    return "bg-amber-400";
  }

  return "bg-emerald-400";
}

function getMetricTextTone(
  value: number,
  type: MetricType = "resource",
): string {
  if (type === "battery") {
    if (value <= 20) {
      return "text-red-300";
    }

    if (value <= 40) {
      return "text-amber-300";
    }

    return "text-emerald-300";
  }

  if (value >= 85) {
    return "text-red-300";
  }

  if (value >= 65) {
    return "text-amber-300";
  }

  return "text-emerald-300";
}

function getStatusClasses(
  status: "online" | "offline",
): string {
  return status === "online"
    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
    : "border-red-400/20 bg-red-400/10 text-red-300";
}

function cx(
  ...classes: Array<
    | string
    | false
    | null
    | undefined
  >
): string {
  return classes
    .filter(Boolean)
    .join(" ");
}

/* =========================
   ICONS
========================= */

function CpuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2"
      />

      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />

      <path d="M10 10h4v4h-4z" />
    </svg>
  );
}

function MemoryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="10"
        rx="2"
      />

      <path d="M7 7V5M11 7V5M15 7V5M17 19v-2M13 19v-2M9 19v-2M5 19v-2" />

      <path d="M7 12h10" />
    </svg>
  );
}

function DiskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse
        cx="12"
        cy="6"
        rx="7"
        ry="3"
      />

      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />

      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="2"
        y="7"
        width="18"
        height="10"
        rx="2"
      />

      <path d="M22 10v4" />

      <path d="M5 10h8v4H5z" />
    </svg>
  );
}

function UptimeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
      />

      <path d="M12 8v5l3 2" />
      <path d="M12 3v2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2.5"
      />

      <path d="M11 18h2" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4" />

      <path d="M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4" />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />

      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18a4 4 0 1 1 .6-8A6 6 0 0 1 18 8a4 4 0 1 1 0 8Z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
      />

      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />

      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="6"
        cy="6"
        r="2"
      />

      <circle
        cx="18"
        cy="6"
        r="2"
      />

      <circle
        cx="12"
        cy="18"
        r="2"
      />

      <path d="M8 6h8M7 8l4 8M17 8l-4 8" />
    </svg>
  );
}

/* =========================
   UI
========================= */

function IconWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-200 backdrop-blur-xl">
      {children}
    </div>
  );
}

function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cx(
        "rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:p-5",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  title,
  description,
  right,
}: {
  title: string;
  description?: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-zinc-500">
            {description}
          </p>
        )}
      </div>

      {right}
    </div>
  );
}

function MetricBar({
  label,
  value,
  subtitle,
  type = "resource",
}: {
  label: string;
  value: number;
  subtitle?: string;
  type?: MetricType;
}) {
  const safeValue =
    Math.max(
      0,
      Math.min(100, value),
    );

  return (
    <div>
      <div className="mb-2.5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-200">
            {label}
          </p>

          {subtitle && (
            <p className="mt-0.5 text-xs text-zinc-500">
              {subtitle}
            </p>
          )}
        </div>

        <span
          className={cx(
            "text-sm font-semibold tabular-nums",
            getMetricTextTone(
              safeValue,
              type,
            ),
          )}
        >
          {safeValue.toFixed(1)}%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className={cx(
            "h-full rounded-full transition-[width] duration-500",
            getMetricTone(
              safeValue,
              type,
            ),
          )}
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
}

function OverviewCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <IconWrapper>
          {icon}
        </IconWrapper>

        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
          {title}
        </span>
      </div>

      <p className="mt-5 truncate text-2xl font-semibold tracking-tight text-white tabular-nums sm:text-[1.7rem]">
        {value}
      </p>

      {subtitle && (
        <p className="mt-1 truncate text-xs text-zinc-500 sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ServiceCard({
  name,
  service,
  icon,
}: {
  name: string;
  service: ServiceStatus;
  icon: ReactNode;
}) {
  const isOnline =
    service.status === "online";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <IconWrapper>
            {icon}
          </IconWrapper>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-100">
              {name}
            </p>

            <p className="mt-0.5 text-xs text-zinc-500">
              {isOnline
                ? "Operacional"
                : "Indisponível"}
            </p>
          </div>
        </div>

        <span
          className={cx(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",
            getStatusClasses(
              service.status,
            ),
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />

          {service.status}
        </span>
      </div>

      <div className="mt-5 border-t border-white/[0.07] pt-4">
        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
          Latência
        </p>

        <p className="mt-1 text-base font-medium text-zinc-200 tabular-nums">
          {service.latency !== null
            ? `${service.latency} ms`
            : "--"}
        </p>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-3.5 last:border-b-0">
      <span className="text-sm text-zinc-500">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-zinc-200">
        {value}
      </span>
    </div>
  );
}

/* =========================
   DASHBOARD
========================= */

export default function ServerDashboard({
  onLogout,
}: ServerDashboardProps) {
  const [
    status,
    setStatus,
  ] =
    useState<ServerStatus | null>(
      null,
    );

  const [
    error,
    setError,
  ] =
    useState<string | null>(
      null,
    );

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    isRefreshing,
    setIsRefreshing,
  ] = useState(false);

  const [
    installPrompt,
    setInstallPrompt,
  ] =
    useState<BeforeInstallPromptEvent | null>(
      null,
    );

  const [
    isInstalled,
    setIsInstalled,
  ] = useState(false);

  async function loadStatus(
    showRefreshing = false,
  ) {
    try {
      if (showRefreshing) {
        setIsRefreshing(true);
      }

      const data =
        await getServerStatus();

      setStatus(data);
      setError(null);
    } catch (error) {
      console.error(
        "Failed to load server status:",
        error,
      );

      setError(
        "Não foi possível carregar o status do servidor.",
      );
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }

  useEffect(() => {
    let active = true;

    async function initialLoad() {
      try {
        const data =
          await getServerStatus();

        if (!active) {
          return;
        }

        setStatus(data);
        setError(null);
      } catch (error) {
        if (!active) {
          return;
        }

        console.error(
          "Failed to load server status:",
          error,
        );

        setError(
          "Não foi possível carregar o status do servidor.",
        );
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void initialLoad();

    const interval =
      window.setInterval(
        () => {
          if (active) {
            void loadStatus();
          }
        },
        REFRESH_INTERVAL,
      );

    return () => {
      active = false;

      window.clearInterval(
        interval,
      );
    };
  }, []);

  useEffect(() => {
    const navigatorWithStandalone =
      navigator as Navigator & {
        standalone?: boolean;
      };

    const standalone =
      window.matchMedia(
        "(display-mode: standalone)",
      ).matches ||
      navigatorWithStandalone.standalone ===
        true;

    setIsInstalled(standalone);

    const handleBeforeInstallPrompt =
      (event: Event) => {
        event.preventDefault();

        setInstallPrompt(
          event as BeforeInstallPromptEvent,
        );
      };

    const handleAppInstalled =
      () => {
        setIsInstalled(true);
        setInstallPrompt(null);
      };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt,
    );

    window.addEventListener(
      "appinstalled",
      handleAppInstalled,
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );

      window.removeEventListener(
        "appinstalled",
        handleAppInstalled,
      );
    };
  }, []);

  const batteryLabel =
    useMemo(() => {
      if (!status?.system.battery) {
        return "Indisponível";
      }

      return `${status.system.battery.percentage}%`;
    }, [status]);

  async function handleInstall() {
    if (!installPrompt) {
      return;
    }

    await installPrompt.prompt();

    await installPrompt.userChoice;

    setInstallPrompt(null);
  }

  async function handleLogout() {
    try {
      await logout();
    } finally {
      onLogout();
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 py-5 text-white">
        <div className="mx-auto max-w-7xl">
          <Panel>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-sm text-zinc-400">
                Carregando servidor...
              </span>
            </div>
          </Panel>
        </div>
      </main>
    );
  }

  if (!status || error) {
    return (
      <main className="min-h-screen bg-background px-4 py-5 text-white">
        <div className="mx-auto max-w-3xl">
          <Panel className="border-red-400/20">
            <h1 className="text-xl font-semibold">
              Mini Server
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              {error ??
                "Servidor indisponível."}
            </p>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition hover:bg-white/[0.08]"
            >
              <LogoutIcon />
              Sair
            </button>
          </Panel>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-6 sm:py-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5">
          {/* HEADER */}

          <Panel className="p-4 sm:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Mini Server
                      </h1>

                      <span
                        className={cx(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",
                          getStatusClasses(
                            status.device
                              .status,
                          ),
                        )}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />

                        Live
                      </span>
                    </div>

                    <p className="mt-0.5 text-sm text-zinc-500">
                      {status.device.name}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-600">
                  Atualizado em{" "}
                  {formatTimestamp(
                    status.timestamp,
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {!isInstalled &&
                  installPrompt && (
                    <button
                      type="button"
                      onClick={
                        handleInstall
                      }
                      className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/15 sm:col-span-1"
                    >
                      <InstallIcon />
                      Instalar app
                    </button>
                  )}

                <button
                  type="button"
                  onClick={() =>
                    void loadStatus(
                      true,
                    )
                  }
                  disabled={
                    isRefreshing
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-zinc-200 transition hover:bg-white/[0.08] disabled:opacity-50"
                >
                  <RefreshIcon />

                  <span>
                    {isRefreshing
                      ? "Atualizando"
                      : "Atualizar"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={
                    handleLogout
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400 transition hover:bg-white/[0.07] hover:text-white"
                >
                  <LogoutIcon />
                  Sair
                </button>
              </div>
            </div>
          </Panel>

          {/* OVERVIEW */}

          <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            <OverviewCard
              icon={<CpuIcon />}
              title="CPU"
              value={`${status.system.cpu.usage.toFixed(
                1,
              )}%`}
              subtitle={`${status.system.cpu.cores} cores`}
            />

            <OverviewCard
              icon={<MemoryIcon />}
              title="RAM"
              value={`${status.system.memory.percentage.toFixed(
                1,
              )}%`}
              subtitle={`${formatBytes(
                status.system.memory
                  .used,
              )} usados`}
            />

            <OverviewCard
              icon={<DiskIcon />}
              title="Disco"
              value={`${status.system.disk.percentage.toFixed(
                1,
              )}%`}
              subtitle={`${formatBytes(
                status.system.disk.free,
              )} livres`}
            />

            <OverviewCard
              icon={<UptimeIcon />}
              title="Uptime"
              value={formatUptime(
                status.system.uptime,
              )}
              subtitle="Sem reiniciar"
            />
          </section>

          {/* SERVICES */}

          <Panel>
            <SectionHeader
              title="Serviços"
              description="Disponibilidade e latência em tempo real."
              right={
                <span className="hidden text-xs text-zinc-600 sm:block">
                  Atualização automática •
                  15s
                </span>
              }
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <ServiceCard
                name="Analytics API"
                service={
                  status.services
                    .analytics
                }
                icon={
                  <ActivityIcon />
                }
              />

              <ServiceCard
                name="n8n"
                service={
                  status.services.n8n
                }
                icon={
                  <WorkflowIcon />
                }
              />

              <ServiceCard
                name="Neon"
                service={
                  status.services.neon
                }
                icon={
                  <DatabaseIcon />
                }
              />

              <ServiceCard
                name="Cloudflare"
                service={
                  status.services
                    .cloudflare
                }
                icon={
                  <CloudIcon />
                }
              />
            </div>
          </Panel>

          {/* SYSTEM + DEVICE */}

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
            <Panel>
              <SectionHeader
                title="Recursos"
                description="Consumo atual do dispositivo."
              />

              <div className="space-y-6">
                <MetricBar
                  label="Processador"
                  value={
                    status.system.cpu
                      .usage
                  }
                  subtitle={`${status.system.cpu.cores} cores`}
                />

                <MetricBar
                  label="Memória"
                  value={
                    status.system.memory
                      .percentage
                  }
                  subtitle={`${formatBytes(
                    status.system.memory
                      .used,
                  )} de ${formatBytes(
                    status.system.memory
                      .total,
                  )}`}
                />

                <MetricBar
                  label="Armazenamento"
                  value={
                    status.system.disk
                      .percentage
                  }
                  subtitle={`${formatBytes(
                    status.system.disk
                      .used,
                  )} de ${formatBytes(
                    status.system.disk
                      .total,
                  )}`}
                />

                {status.system
                  .battery && (
                  <MetricBar
                    label="Bateria"
                    value={
                      status.system
                        .battery
                        .percentage
                    }
                    type="battery"
                    subtitle={`${status.system.battery.status} • ${status.system.battery.plugged}`}
                  />
                )}
              </div>
            </Panel>

            <Panel>
              <SectionHeader
                title="Dispositivo"
                description="Galaxy S21 FE"
              />

              <div className="mb-4 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                <IconWrapper>
                  <BatteryIcon />
                </IconWrapper>

                <div className="min-w-0">
                  <p className="text-xs text-zinc-500">
                    Bateria
                  </p>

                  <p
                    className={cx(
                      "mt-0.5 text-xl font-semibold tabular-nums",
                      status.system
                        .battery
                        ? getMetricTextTone(
                            status
                              .system
                              .battery
                              .percentage,
                            "battery",
                          )
                        : "text-zinc-200",
                    )}
                  >
                    {batteryLabel}
                  </p>
                </div>
              </div>

              <div>
                <DetailRow
                  label="Status"
                  value={
                    status.system
                      .battery
                      ?.status ??
                    "--"
                  }
                />

                <DetailRow
                  label="Energia"
                  value={
                    status.system
                      .battery
                      ?.plugged ??
                    "--"
                  }
                />

                <DetailRow
                  label="Temperatura"
                  value={
                    status.system
                      .battery
                      ?.temperature !==
                    null
                      ? `${status.system.battery?.temperature}°C`
                      : "--"
                  }
                />

                <DetailRow
                  label="Saúde"
                  value={
                    status.system
                      .battery?.health ??
                    "--"
                  }
                />

                <DetailRow
                  label="RAM livre"
                  value={formatBytes(
                    status.system
                      .memory.free,
                  )}
                />

                <DetailRow
                  label="Disco livre"
                  value={formatBytes(
                    status.system.disk
                      .free,
                  )}
                />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </main>
  );
}