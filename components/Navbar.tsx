"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";

export function Logo() {
  return (
    <Link href="/#top" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">F</span>
      Fermor
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          {navLinks.map((l) => (
            <li key={l.href}><Link className="hover:text-ink" href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link href="/#join" className="hidden h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-deep sm:inline-flex">Join the waitlist</Link>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-white px-5 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}><Link onClick={() => setOpen(false)} className="flex h-12 items-center font-medium" href={l.href}>{l.label}</Link></li>
          ))}
          <li><Link onClick={() => setOpen(false)} href="/#join" className="mt-2 flex h-12 items-center justify-center rounded-full bg-ink font-semibold text-white">Join the waitlist</Link></li>
        </ul>
      )}
    </header>
  );
}
