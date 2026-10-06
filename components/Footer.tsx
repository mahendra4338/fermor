import Link from "next/link";
import { Logo } from "@/components/Navbar";
import { footerGroups } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-slate">Finance that is simple, clear and easy to use.</p>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="font-display font-semibold">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              {group.links.map((link) => (
                <li key={link.label}><Link href={link.href} className="hover:text-ink">{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-xs text-slate">
        © 2026 Fermor. Projections shown are illustrations and not investment advice. Investments carry risk, including loss of capital.
      </p>
    </footer>
  );
}
