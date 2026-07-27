"use client";

import { Phone, FileText } from "lucide-react";
import { BUSINESS } from "@/lib/config";

/**
 * Barre d'action persistante mobile — composant n°1 (doctrine 05).
 * Décision Maxim 27/07 : blanc + bleu dominants, rouge réduit à un filet
 * d'accent 2px. Appeler = bleu plein, Devis = blanc bordé bleu.
 */

function track(event: "call_click" | "quote_click") {
  // TODO CLIENT (Prompt 5) : brancher BUSINESS.n8nWebhookUrl (VPS UE).
  if (BUSINESS.n8nWebhookUrl) {
    navigator.sendBeacon(
      BUSINESS.n8nWebhookUrl,
      JSON.stringify({ event, page: window.location.pathname, ts: Date.now() })
    );
  }
}

export default function ActionBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 lg:hidden bg-[var(--color-surface)]"
      style={{
        height: "calc(var(--action-bar-height) + var(--action-bar-safe))",
        paddingBottom: "var(--action-bar-safe)",
        borderTop: "2px solid var(--color-accent)",
      }}
    >
      <a
        href={`tel:${BUSINESS.phone}`}
        aria-label={`Appeler ${BUSINESS.brandName} au ${BUSINESS.phoneDisplay}`}
        onClick={() => track("call_click")}
        className="flex items-center justify-center gap-2 font-medium text-[var(--color-on-primary)] bg-[var(--color-primary)] transition-opacity active:opacity-90"
        style={{ transitionDuration: "var(--duration-fast)" }}
      >
        <Phone size={20} strokeWidth={2} aria-hidden="true" />
        Appeler
      </a>
      <a
        href="/contact/"
        aria-label="Demander un devis gratuit"
        onClick={() => track("quote_click")}
        className="flex items-center justify-center gap-2 font-medium text-[var(--color-primary)] bg-[var(--color-surface)] transition-colors active:bg-[var(--color-surface-alt)]"
        style={{ transitionDuration: "var(--duration-fast)" }}
      >
        <FileText size={20} strokeWidth={2} aria-hidden="true" />
        Devis gratuit
      </a>
    </nav>
  );
}
