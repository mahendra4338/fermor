import { testimonials } from "@/data/proof";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section aria-labelledby="stories-title" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <h2 id="stories-title" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">What early users say</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.name}>
            <figure className="border-l-2 border-brand pl-5">
              <blockquote className="text-lg">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm text-slate">
                <span className="font-semibold text-ink">{t.name}</span>, {t.role}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
