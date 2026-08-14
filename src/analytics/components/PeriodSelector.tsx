import type { AnalyticsPeriod } from "../api";

interface PeriodSelectorProps {
  value: AnalyticsPeriod;
  onChange: (period: AnalyticsPeriod) => void;
  disabled?: boolean;
}

const periods: {
  value: AnalyticsPeriod;
  label: string;
}[] = [
  {
    value: "today",
    label: "Hoje",
  },
  {
    value: "7d",
    label: "7 dias",
  },
  {
    value: "30d",
    label: "30 dias",
  },
  {
    value: "all",
    label: "Tudo",
  },
];

export default function PeriodSelector({
  value,
  onChange,
  disabled = false,
}: PeriodSelectorProps) {
  return (
    <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
      {periods.map((period) => {
        const isActive =
          period.value === value;

        return (
          <button
            key={period.value}
            type="button"
            disabled={disabled}
            onClick={() =>
              onChange(period.value)
            }
            className={[
              "rounded-lg px-3 py-2 text-sm transition",
              "disabled:cursor-not-allowed disabled:opacity-50",
              isActive
                ? "bg-white text-black"
                : "text-zinc-400 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {period.label}
          </button>
        );
      })}
    </div>
  );
}