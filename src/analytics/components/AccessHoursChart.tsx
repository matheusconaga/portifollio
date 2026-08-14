import type {
  HourAnalyticsItem,
  PeakHourAnalytics,
} from "../api";

interface AccessHoursChartProps {
  hours: HourAnalyticsItem[];
  peakHour: PeakHourAnalytics | null;
  totalSessions: number;
}

export default function AccessHoursChart({
  hours,
  peakHour,
  totalSessions,
}: AccessHoursChartProps) {
  const maxSessions = Math.max(
    ...hours.map(
      (item) => item.sessions,
    ),
    1,
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-medium">
            Horários de acesso
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Distribuição das sessões ao longo do dia.
          </p>
        </div>

        {peakHour && (
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xs text-zinc-500">
              Horário de pico
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xl font-semibold text-zinc-100">
                {peakHour.label}
              </span>

              <span className="text-xs text-zinc-500">
                {peakHour.sessions}{" "}
                {peakHour.sessions === 1
                  ? "sessão"
                  : "sessões"}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex h-52 items-end gap-1.5">
          {hours.map((item) => {
            const height =
              item.sessions === 0
                ? 2
                : Math.max(
                    (item.sessions /
                      maxSessions) *
                      100,
                    6,
                  );

            const isPeak =
              peakHour?.hour ===
              item.hour;

            return (
              <div
                key={item.hour}
                className="group relative flex h-full flex-1 items-end"
              >
                <div
                  className={[
                    "w-full rounded-t-md transition-all duration-300",
                    isPeak
                      ? "bg-white/80"
                      : "bg-white/20 hover:bg-white/40",
                  ].join(" ")}
                  style={{
                    height: `${height}%`,
                  }}
                />

                <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-xs shadow-xl group-hover:block">
                  <p className="font-medium text-zinc-200">
                    {item.label}
                  </p>

                  <p className="mt-1 text-zinc-500">
                    {item.sessions}{" "}
                    {item.sessions === 1
                      ? "sessão"
                      : "sessões"}
                  </p>

                  <p className="text-zinc-600">
                    {item.visitors}{" "}
                    {item.visitors === 1
                      ? "visitante"
                      : "visitantes"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex justify-between text-[11px] text-zinc-600">
          <span>00h</span>
          <span>04h</span>
          <span>08h</span>
          <span>12h</span>
          <span>16h</span>
          <span>20h</span>
          <span>23h</span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-600">
            Total de sessões analisadas
          </span>

          <span className="font-medium text-zinc-300">
            {totalSessions}
          </span>
        </div>
      </div>
    </div>
  );
}