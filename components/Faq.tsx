"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button id={`faq-q-${i}`} aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-lg font-semibold">
                {f.q}
                <Plus className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
              <p className="max-w-2xl pb-5 text-slate">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
