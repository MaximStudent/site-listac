import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/services/", label: "Services" },
  { href: "/realisations/", label: "Réalisations" },
  { href: "/zone-intervention/", label: "Zone d'intervention" },
  { href: "/contact/", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="mx-auto flex items-center justify-between max-w-[var(--container-max)] px-[var(--page-padding)] h-16">
        <Link href="/" aria-label="LISTAC — retour à l'accueil" className="flex items-center">
          <Image
            src="/images/logo-listac.png"
            alt="LISTAC fils, by Gabriel Mengal — électricien"
            width={1132}
            height={371}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] font-medium transition-colors"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            aria-label={`Appeler ${BUSINESS.brandName} au ${BUSINESS.phoneDisplay}`}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--color-primary)] hover:opacity-90 px-4 font-medium text-[var(--color-on-primary)] transition-opacity"
            style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
          >
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </nav>
        <a
          href={`tel:${BUSINESS.phone}`}
          aria-label={`Appeler ${BUSINESS.brandName} au ${BUSINESS.phoneDisplay}`}
          className="lg:hidden inline-flex items-center gap-2 font-medium text-[var(--color-primary)]"
        >
          <Phone size={20} strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">{BUSINESS.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
