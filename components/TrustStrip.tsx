import { proofPoints } from "@/data/proof";

export default function TrustStrip() {
  return (
    <section aria-label="Fermor at a glance" className="border-y border-line">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 lg:grid-cols-4">
        {proofPoints.map((p) => (
          <div key={p.label}>
            <dt className="sr-only">{p.label}</dt>
            <dd className="font-display text-2xl font-bold sm:text-3xl">{p.value}</dd>
            <dd className="text-sm text-slate">{p.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
