"use client";
import { useMemo, useState } from "react";
import { project, formatINR, formatShort } from "@/lib/finance";

function Slider({ id, label, value, min, max, step, display, onChange }: { id: string; label: string; value: number; min: number; max: number; step: number; display: string; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-slate">{label}</label>
        <output htmlFor={id} className="font-display text-lg font-semibold">{display}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

function Chart({ data }: { data: ReturnType<typeof project> }) {
  const W = 480, H = 170, max = data[data.length - 1].value || 1;
  const x = (i: number) => (i / (data.length - 1)) * W;
  const y = (v: number) => H - (v / max) * (H - 8);
  const line = (key: "value" | "invested") => data.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(p[key]).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of invested amount and projected value over time" className="h-auto w-full">
      <path d={`${line("value")} L${W} ${H} L0 ${H} Z`} fill="#0B6B5D" opacity="0.12" />
      <path d={line("invested")} fill="none" stroke="#F2B544" strokeWidth="3" strokeLinecap="round" />
      <path d={line("value")} fill="none" stroke="#0B6B5D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Planner() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(10);
  const data = useMemo(() => project(monthly, years, rate), [monthly, years, rate]);
  const end = data[data.length - 1];

  return (
    <div id="planner" className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgba(14,27,44,0.35)] sm:p-8">
      <h2 className="font-display text-xl font-semibold">If you set aside money every month</h2>
      <p className="mt-1 text-sm text-slate">Move the sliders and see where it could be.</p>
      <div className="mt-6 space-y-5">
        <Slider id="monthly" label="Per month" value={monthly} min={500} max={100000} step={500} display={formatINR(monthly)} onChange={setMonthly} />
        <Slider id="years" label="For" value={years} min={1} max={30} step={1} display={`${years} ${years === 1 ? "year" : "years"}`} onChange={setYears} />
        <Slider id="rate" label="Yearly growth you assume" value={rate} min={0} max={15} step={0.5} display={`${rate}%`} onChange={setRate} />
      </div>
      <div className="mt-7 border-t border-line pt-6" aria-live="polite">
        <p className="text-sm text-slate">Could grow to about</p>
        <p className="font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">{formatShort(end.value)}</p>
        <p className="mt-1 text-sm text-slate">
          You put in <span className="font-semibold text-ink">{formatShort(end.invested)}</span>. Growth adds{" "}
          <span className="font-semibold text-ink">{formatShort(Math.max(0, end.value - end.invested))}</span>.
        </p>
      </div>
      <div className="mt-5"><Chart data={data} /></div>
      <div className="mt-2 flex gap-5 text-xs text-slate">
        <span className="flex items-center gap-2"><i className="h-1 w-5 rounded bg-brand" />Projected value</span>
        <span className="flex items-center gap-2"><i className="h-1 w-5 rounded bg-sun" />Amount you put in</span>
      </div>
      <p className="mt-4 text-xs text-slate">An illustration, not a promise. Real returns vary and can be lower.</p>
    </div>
  );
}
