import type {
  AnalyticsTimelinePoint,
} from "../api";

interface TimelineChartProps {
  data: AnalyticsTimelinePoint[];

  metric:
    | "visitors"
    | "sessions"
    | "pageViews"
    | "projectViews";
}

const metricLabels = {
  visitors: "Visitantes",
  sessions: "Sessões",
  pageViews: "Page Views",
  projectViews: "Projetos",
} as const;

function formatDate(
  date: string,
): string {
  const [, month, day] =
    date.split("-");

  return `${day}/${month}`;
}

export default function TimelineChart({
  data,
  metric,
}: TimelineChartProps) {
  const values = data.map(
    (item) => item[metric],
  );

  const maxValue = Math.max(
    ...values,
    1,
  );

  const total = values.reduce(
    (sum, value) => sum + value,
    0,
  );

  /*
   * Evita colocar uma quantidade enorme
   * de datas no eixo X.
   *
   * Para poucos pontos, mostra todos.
   * Para períodos maiores, seleciona alguns.
   */
  const labelStep =
    data.length <= 7
      ? 1
      : data.length <= 14
        ? 2
        : data.length <= 31
          ? 5
          : Math.ceil(
              data.length / 7,
            );

  /*
   * Converte o valor para uma
   * coordenada vertical em porcentagem.
   *
   * 0   = parte inferior
   * 100 = parte superior
   */
  function getY(value: number) {
    if (maxValue === 0) {
      return 100;
    }

    return (
      100 -
      (value / maxValue) * 100
    );
  }

  /*
   * Gera os pontos da linha.
   */
  const points = data.map(
    (item, index) => {
      const x =
        data.length === 1
          ? 50
          : (index /
              (data.length - 1)) *
            100;

      const y = getY(item[metric]);

      return {
        ...item,
        x,
        y,
      };
    },
  );

  /*
   * Cria o caminho SVG da linha.
   */
  const path = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`,
    )
    .join(" ");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {metricLabels[metric]}
          </p>

          <p className="mt-1 text-2xl font-semibold">
            {total}
          </p>
        </div>

        <span className="text-xs text-zinc-600">
          por dia
        </span>
      </div>

      {/* CHART */}
      <div className="h-72">
        <div className="flex h-full gap-4">
          {/* Y AXIS */}
          <div className="flex w-8 flex-col justify-between pb-8 text-right text-xs text-zinc-600">
            <span>{maxValue}</span>

            <span>
              {Math.round(
                maxValue * 0.75,
              )}
            </span>

            <span>
              {Math.round(
                maxValue * 0.5,
              )}
            </span>

            <span>
              {Math.round(
                maxValue * 0.25,
              )}
            </span>

            <span>0</span>
          </div>

          {/* CHART AREA */}
          <div className="relative flex-1">
            {/* GRID */}
            <div className="absolute inset-0 bottom-8 flex flex-col justify-between">
              {Array.from({
                length: 5,
              }).map((_, index) => (
                <div
                  key={index}
                  className="border-t border-white/5"
                />
              ))}
            </div>

            {/* SVG */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 bottom-8 h-[calc(100%-2rem)] w-full overflow-visible"
            >
              {/* AREA UNDER THE LINE */}
              {points.length > 1 && (
                <path
                  d={`${path} L 100 100 L 0 100 Z`}
                  className="fill-white/[0.04]"
                />
              )}

              {/* LINE */}
              {points.length > 0 && (
                <path
                  d={path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  vectorEffect="non-scaling-stroke"
                  className="text-white/70"
                />
              )}
            </svg>

            {/* POINTS + TOOLTIPS */}
            <div className="absolute inset-0 bottom-8">
              {points.map(
                (point) => (
                  <div
                    key={point.date}
                    className="group absolute"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  >
                    {/* TOOLTIP */}
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-xs text-zinc-200 opacity-0 shadow-xl transition group-hover:opacity-100">
                      <div className="font-medium">
                        {formatDate(
                          point.date,
                        )}
                      </div>

                      <div className="mt-0.5 text-zinc-400">
                        {metricLabels[
                          metric
                        ]}:{" "}
                        <span className="text-white">
                          {point[metric]}
                        </span>
                      </div>
                    </div>

                    {/* POINT */}
                    <div
                      className={[
                        "h-2.5 w-2.5 rounded-full border-2 border-zinc-950 bg-white",
                        "opacity-0 transition-all duration-150",
                        "group-hover:scale-125 group-hover:opacity-100",
                      ].join(" ")}
                    />

                    {/* INVISIBLE HIT AREA */}
                    <div className="absolute -inset-3" />
                  </div>
                ),
              )}
            </div>

            {/* X AXIS */}
            <div className="absolute inset-x-0 bottom-0 flex h-6">
              {data.map(
                (item, index) => {
                  const shouldShow =
                    index === 0 ||
                    index ===
                      data.length - 1 ||
                    index % labelStep ===
                      0;

                  return (
                    <span
                      key={item.date}
                      className="absolute -translate-x-1/2 text-xs text-zinc-600"
                      style={{
                        left:
                          data.length === 1
                            ? "50%"
                            : `${(index / (data.length - 1)) * 100}%`,
                      }}
                    >
                      {shouldShow
                        ? formatDate(
                            item.date,
                          )
                        : ""}
                    </span>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}