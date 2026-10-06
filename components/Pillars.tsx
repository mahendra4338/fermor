import { pillars } from "@/data/content";
import Reveal from "@/components/Reveal";

function UnderstandVisual() {
  const rows = [
    { label: "Income", width: "100%", color: "bg-ink" },
    { label: "Spending", width: "62%", color: "bg-sun" },
    { label: "Saved", width: "38%", color: "bg-brand" },
  ];
  return (
    <div className="space-y-3" aria-hidden>
      {rows.map((r) => (
        <div key={r.label}>
          <p className="mb-1 text-xs text-slate">{r.label}</p>
          <div className="h-2 rounded-full bg-line"><div className={`h-2 rounded-full ${r.color}`} style={{ width: r.width }} /></div>
        </div>
      ))}
    </div>
  );
}

function ActVisual() {
  return (
    <div className="rounded-xl border border-line bg-white p-4" aria-hidden>
      <p className="text-xs text-slate">Your next step</p>
      <p className="mt-1 font-display font-semibold">Build a 3-month safety buffer</p>
      <p className="mt-1 text-sm text-slate">Set aside ₹6,000 a month before you start investing.</p>
      <span className="mt-3 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Start this step</span>
    </div>
  );
}

function GrowVisual() {
  return (
    <svg viewBox="0 0 240 90" className="h-auto w-full" aria-hidden>
      <path d="M0 80 L40 72 L80 66 L120 52 L160 38 L200 22 L240 8" fill="none" stroke="#0B6B5D" strokeWidth="3" strokeLinecap="round" />
      <path d="M0 80 L240 80" stroke="#DAE0E6" strokeWidth="2" />
      <circle cx="240" cy="8" r="5" fill="#F2B544" />
    </svg>
  );
}

const visuals = [UnderstandVisual, ActVisual, GrowVisual];

export default function Pillars() {
  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">Money feels confusing because the pieces live in different places.</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {pillars.map((p, i) => {
            const Visual = visuals[i];
            return (
              <Reveal key={p.name} className="grid items-center gap-6 py-8 md:grid-cols-[180px_1fr_280px] md:gap-10">
                <h3 className="font-display text-2xl font-semibold text-brand">{p.name}</h3>
                <p className="max-w-md text-slate">{p.text}</p>
                <Visual />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
