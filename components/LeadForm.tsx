"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/config";

type Status = "idle" | "sending" | "ok" | "error";

const BESOINS = ["Dépannage", "Mise en conformité", "Borne / domotique", "Autre"] as const;

/**
 * Formulaire 3 champs visibles (doctrine 05) : Nom, Téléphone, Besoin.
 * Photo optionnelle (double la qualité du lead), honeypot, validation on-blur,
 * inputmode tel. Envoi vers le webhook n8n (TODO CLIENT) ; en attendant,
 * bascule mailto propre.
 */
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [besoin, setBesoin] = useState<string>("");
  const [phoneError, setPhoneError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot
    const nom = String(data.get("nom") ?? "");
    const tel = String(data.get("tel") ?? "");
    if (!/^[\d+ ./-]{8,}$/.test(tel)) {
      setPhoneError(true);
      return;
    }
    setStatus("sending");
    // TODO CLIENT (Prompt 5) : webhook n8n (VPS UE) — accusé de réception < 60 s.
    if (BUSINESS.n8nWebhookUrl) {
      try {
        const res = await fetch(BUSINESS.n8nWebhookUrl, { method: "POST", body: data });
        setStatus(res.ok ? "ok" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const subject = encodeURIComponent(`Demande de devis — ${nom}`);
      const body = encodeURIComponent(`Nom : ${nom}\nTéléphone : ${tel}\nBesoin : ${besoin || "non précisé"}`);
      window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
      setStatus("ok");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[var(--radius)] bg-[var(--color-success-bg)] p-[var(--card-padding)] text-[var(--color-on-success)]">
        <p className="font-medium m-0">Demande envoyée.</p>
        <p className="m-0 mt-1 text-sm">
          Nous vous rappelons au plus tard le prochain jour ouvrable ({BUSINESS.openingHours.days},{" "}
          {BUSINESS.openingHours.hours}). Urgent ? Appelez le{" "}
          <a href={`tel:${BUSINESS.phone}`} className="underline">{BUSINESS.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4">
        <div>
          <label htmlFor="nom" className="block font-medium mb-1">Votre nom</label>
          <input
            id="nom" name="nom" type="text" required autoComplete="name"
            className="w-full rounded-[var(--radius)] border border-[var(--color-border)] px-3 focus:border-[var(--color-primary)] outline-none"
            style={{ height: "var(--touch-target)" }}
          />
        </div>
        <div>
          <label htmlFor="tel" className="block font-medium mb-1">Votre téléphone</label>
          <input
            id="tel" name="tel" type="tel" inputMode="tel" required autoComplete="tel"
            aria-invalid={phoneError} aria-describedby={phoneError ? "tel-err" : undefined}
            onBlur={(e) => setPhoneError(e.target.value !== "" && !/^[\d+ ./-]{8,}$/.test(e.target.value))}
            className="w-full rounded-[var(--radius)] border border-[var(--color-border)] px-3 focus:border-[var(--color-primary)] outline-none"
            style={{ height: "var(--touch-target)" }}
          />
          {phoneError && (
            <p id="tel-err" className="mt-1 text-sm m-0" style={{ color: "var(--color-error)" }}>
              Ce numéro semble incomplet — vérifiez-le pour qu'on puisse vous rappeler.
            </p>
          )}
        </div>
        <fieldset className="border-0 p-0 m-0">
          <legend className="font-medium mb-1">Votre besoin</legend>
          <div className="flex flex-wrap gap-2">
            {BESOINS.map((b) => (
              <label
                key={b}
                className={`inline-flex cursor-pointer items-center rounded-[var(--radius)] border px-4 text-sm font-medium transition-colors ${
                  besoin === b
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "border-[var(--color-border)] text-[var(--color-text)]"
                }`}
                style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
              >
                <input
                  type="radio" name="besoin" value={b} checked={besoin === b}
                  onChange={() => setBesoin(b)} className="sr-only"
                />
                {b}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="photo" className="block font-medium mb-1">
            Une photo du problème ? <span className="font-normal text-[var(--color-text-muted)]">(facultatif, ça aide au chiffrage)</span>
          </label>
          <input id="photo" name="photo" type="file" accept="image/*" className="block w-full text-sm" />
        </div>
        <button
          type="submit" disabled={status === "sending"}
          className="rounded-[var(--radius)] bg-[var(--color-primary)] font-medium text-[var(--color-on-primary)] transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        {status === "error" && (
          <p className="text-sm m-0" style={{ color: "var(--color-error)" }}>
            L'envoi a échoué. Appelez-nous au{" "}
            <a href={`tel:${BUSINESS.phone}`} className="underline">{BUSINESS.phoneDisplay}</a>{" "}
            ou écrivez à <a href={`mailto:${BUSINESS.email}`} className="underline">{BUSINESS.email}</a>.
          </p>
        )}
        <p className="text-xs text-[var(--color-text-muted)] m-0">
          Vos données servent uniquement à traiter votre demande —{" "}
          <a href="/confidentialite/" className="underline">politique de confidentialité</a>.
        </p>
      </div>
    </form>
  );
}
