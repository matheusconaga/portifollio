import type {
  DeviceAnalyticsItem,
} from "../api";

interface AnalyticsListProps {
  title: string;
  description: string;
  items: DeviceAnalyticsItem[];
}

function AnalyticsList({
  title,
  description,
  items,
}: AnalyticsListProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-medium">
          {title}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {description}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-sm text-zinc-600">
            Nenhum dado registrado neste período.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-zinc-200">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-600">
                    {item.visitors}{" "}
                    {item.visitors === 1
                      ? "visitante"
                      : "visitantes"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-zinc-200">
                    {item.sessions}{" "}
                    {item.sessions === 1
                      ? "sessão"
                      : "sessões"}
                  </p>

                  <p className="text-xs text-zinc-600">
                    {item.percentage.toFixed(1)}%
                  </p>
                </div>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-white/60 transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      item.percentage,
                      100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface DevicesAnalyticsCardProps {
  devices: DeviceAnalyticsItem[];
  browsers: DeviceAnalyticsItem[];
}

export default function DevicesAnalyticsCard({
  devices,
  browsers,
}: DevicesAnalyticsCardProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <AnalyticsList
        title="Dispositivos"
        description="Tipos de dispositivo utilizados para acessar o portfólio."
        items={devices}
      />

      <AnalyticsList
        title="Navegadores"
        description="Navegadores utilizados durante as sessões."
        items={browsers}
      />
    </div>
  );
}