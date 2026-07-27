"use client";

import { useState } from "react";
import { AREAS, BUSINESS } from "@/lib/config";

type Status = "idle" | "sending" | "ok" | "error";

/**
 * ============================================================================
 * FORMULAIRE DE DEVIS — version « une seule page, mieux rangée »
 * ============================================================================
 * Choix de format acté par Maxim le 2026-07-27 : tout visible d'un coup, en
 * trois blocs numérotés, plutôt qu'un parcours en étapes.
 *
 * PRINCIPE DIRECTEUR : plus complet SANS être plus fatigant.
 * On collecte 4 informations de plus qu'avant, mais le visiteur ne tape toujours
 * que 2 champs obligatoires (nom + téléphone). Tout le reste se répond au doigt,
 * en tapant sur des pastilles. Remplacer de la frappe par des clics, c'est ce qui
 * permet d'allonger un formulaire sans faire chuter le taux de remplissage.
 *
 * OBLIGATOIRE : nom, téléphone, besoin. Tout le reste est explicitement marqué
 * « facultatif » — un champ facultatif non signalé est vécu comme obligatoire et
 * fait abandonner.
 *
 * Envoi : webhook quand `BUSINESS.n8nWebhookUrl` sera renseigné. En attendant,
 * bascule vers un e-mail pré-rempli contenant TOUTES les réponses.
 */

const BESOINS = [
  "Dépannage / panne",
  "Mise en conformité RGIE",
  "Tableau électrique",
  "Installation ou rénovation",
  "Borne de recharge",
  "Domotique / réseau",
  "Éclairage",
  "Autre",
] as const;

const BATIMENTS = [
  "Maison",
  "Appartement",
  "Commerce / bureau",
  "Ferme, grange, bâtiment ancien",
  "Autre",
] as const;

const DELAIS = ["C'est urgent", "Dans le mois", "Je prépare un projet"] as const;

const COMMUNES = [...AREAS.map((a) => a.commune), "Une autre commune"] as const;

/** Groupe de pastilles cliquables — une seule réponse possible. */
function ChipGroup({
  legend,
  hint,
  name,
  options,
  value,
  onChange,
  required,
}: {
  legend: string;
  hint?: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-2 font-medium">
        {legend}{" "}
        {!required && (
          <span className="font-normal text-[var(--color-text-muted)]">(facultatif)</span>
        )}
      </legend>
      {hint && <p className="-mt-1 mb-2 text-sm text-[var(--color-text-muted)]">{hint}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <label
              key={o}
              className={`inline-flex cursor-pointer items-center rounded-[var(--radius)] border px-4 text-sm font-medium transition-colors ${
                active
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
              }`}
              style={{ minHeight: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
            >
              <input
                type="radio"
                name={name}
                value={o}
                checked={active}
                onChange={() => onChange(o)}
                className="sr-only"
              />
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** En-tête d'un bloc : numéro + titre. Découpe visuelle sans découper le parcours. */
function BlockTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h3 className="mb-4 flex items-center gap-3 text-lg">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-medium text-[var(--color-on-primary)]"
      >
        {n}
      </span>
      {children}
    </h3>
  );
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [besoin, setBesoin] = useState("");
  const [batiment, setBatiment] = useState("");
  const [commune, setCommune] = useState("");
  const [delai, setDelai] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [besoinError, setBesoinError] = useState(false);

  const telOk = (v: string) => /^[\d+ ./-]{8,}$/.test(v);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot : piège à robots, invisible aux humains

    const nom = String(data.get("nom") ?? "");
    const tel = String(data.get("tel") ?? "");
    const email = String(data.get("email") ?? "");
    const details = String(data.get("details") ?? "");
    const communeLibre = String(data.get("commune_libre") ?? "");
    const communeFinale =
      commune === "Une autre commune" && communeLibre ? communeLibre : commune;

    if (!besoin) {
      setBesoinError(true);
      document.getElementById("bloc-projet")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!telOk(tel)) {
      setPhoneError(true);
      return;
    }
    setStatus("sending");

    data.set("commune", communeFinale);
    data.set("besoin", besoin);
    data.set("batiment", batiment);
    data.set("delai", delai);

    // TODO CLIENT : renseigner BUSINESS.n8nWebhookUrl. Tant que c'est vide,
    // on bascule sur un e-mail pré-rempli — le visiteur n'est jamais bloqué.
    if (BUSINESS.n8nWebhookUrl) {
      try {
        const res = await fetch(BUSINESS.n8nWebhookUrl, { method: "POST", body: data });
        setStatus(res.ok ? "ok" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const lignes = [
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        email ? `E-mail : ${email}` : null,
        `Besoin : ${besoin}`,
        batiment ? `Type de bâtiment : ${batiment}` : null,
        communeFinale ? `Commune : ${communeFinale}` : null,
        delai ? `Délai : ${delai}` : null,
        details ? `\nDétails :\n${details}` : null,
      ].filter(Boolean);
      window.location.href =
        `mailto:${BUSINESS.email}` +
        `?subject=${encodeURIComponent(`Demande de devis — ${nom}${communeFinale ? ` (${communeFinale})` : ""}`)}` +
        `&body=${encodeURIComponent(lignes.join("\n"))}`;
      setStatus("ok");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[var(--radius)] bg-[var(--color-success-bg)] p-[var(--card-padding)] text-[var(--color-on-success)]">
        <p className="m-0 font-medium">Demande envoyée. Merci.</p>
        <p className="m-0 mt-2 text-sm">
          Nous vous rappelons au plus tard le prochain jour ouvrable (
          {BUSINESS.openingHours.days}, {BUSINESS.openingHours.hours}). C&apos;est urgent ?
          Appelez directement le{" "}
          <a href={`tel:${BUSINESS.phone}`} className="underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 outline-none focus:border-[var(--color-primary)]";

  return (
    <form onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-[var(--space-8)]">
        {/* ─────────── 1. LE PROJET ─────────── */}
        <section id="bloc-projet">
          <BlockTitle n={1}>Votre projet</BlockTitle>
          <div className="grid gap-[var(--space-4)]">
            <ChipGroup
              legend="De quoi s'agit-il ?"
              name="besoin_radio"
              options={BESOINS}
              value={besoin}
              onChange={(v) => {
                setBesoin(v);
                setBesoinError(false);
              }}
              required
            />
            {besoinError && (
              <p className="m-0 text-sm" style={{ color: "var(--color-error)" }}>
                Choisissez au moins une catégorie — c&apos;est ce qui nous permet de vous
                répondre précisément.
              </p>
            )}

            <div>
              <label htmlFor="details" className="mb-1 block font-medium">
                Racontez-nous en quelques mots{" "}
                <span className="font-normal text-[var(--color-text-muted)]">(facultatif)</span>
              </label>
              <p className="mb-2 text-sm text-[var(--color-text-muted)]">
                Plus vous en dites, plus notre réponse sera précise — et plus le devis sera
                juste du premier coup.
              </p>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Par exemple : « Le différentiel saute dès que j'allume le four. L'installation date des années 80 et n'a jamais été touchée. »"
                className={`${inputClass} py-2 leading-relaxed`}
              />
            </div>

            <div>
              <label htmlFor="photo" className="mb-1 block font-medium">
                Une photo ?{" "}
                <span className="font-normal text-[var(--color-text-muted)]">(facultatif)</span>
              </label>
              <p className="mb-2 text-sm text-[var(--color-text-muted)]">
                Une photo du tableau, de la pièce ou du procès-verbal de contrôle nous évite
                souvent une visite.
              </p>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                className="block w-full text-sm"
              />
            </div>
          </div>
        </section>

        {/* ─────────── 2. OÙ ET QUAND ─────────── */}
        <section>
          <BlockTitle n={2}>Où et quand</BlockTitle>
          <div className="grid gap-[var(--space-6)]">
            <ChipGroup
              legend="Dans quelle commune ?"
              name="commune_radio"
              options={COMMUNES}
              value={commune}
              onChange={setCommune}
            />
            {commune === "Une autre commune" && (
              <div>
                <label htmlFor="commune_libre" className="mb-1 block font-medium">
                  Laquelle ?
                </label>
                <input
                  id="commune_libre"
                  name="commune_libre"
                  type="text"
                  autoComplete="address-level2"
                  className={inputClass}
                  style={{ height: "var(--touch-target)" }}
                />
              </div>
            )}

            <ChipGroup
              legend="Quel type de bâtiment ?"
              name="batiment_radio"
              options={BATIMENTS}
              value={batiment}
              onChange={setBatiment}
            />

            <ChipGroup
              legend="Pour quand ?"
              hint="Cela nous sert uniquement à classer les rappels par ordre d'urgence."
              name="delai_radio"
              options={DELAIS}
              value={delai}
              onChange={setDelai}
            />
          </div>
        </section>

        {/* ─────────── 3. VOUS RAPPELER ─────────── */}
        <section>
          <BlockTitle n={3}>Pour vous rappeler</BlockTitle>
          <div className="grid gap-[var(--space-4)]">
            <div>
              <label htmlFor="nom" className="mb-1 block font-medium">
                Votre nom
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                style={{ height: "var(--touch-target)" }}
              />
            </div>

            <div>
              <label htmlFor="tel" className="mb-1 block font-medium">
                Votre téléphone
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                aria-invalid={phoneError}
                aria-describedby={phoneError ? "tel-err" : undefined}
                onBlur={(e) => setPhoneError(e.target.value !== "" && !telOk(e.target.value))}
                className={inputClass}
                style={{ height: "var(--touch-target)" }}
              />
              {phoneError && (
                <p id="tel-err" className="m-0 mt-1 text-sm" style={{ color: "var(--color-error)" }}>
                  Ce numéro semble incomplet — vérifiez-le pour qu&apos;on puisse vous rappeler.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-medium">
                Votre e-mail{" "}
                <span className="font-normal text-[var(--color-text-muted)]">(facultatif)</span>
              </label>
              <p className="mb-2 text-sm text-[var(--color-text-muted)]">
                Utile uniquement pour vous envoyer le devis par écrit.
              </p>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className={inputClass}
                style={{ height: "var(--touch-target)" }}
              />
            </div>
          </div>
        </section>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-[var(--radius)] bg-[var(--color-primary)] text-base font-medium text-[var(--color-on-primary)] transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
          <p className="m-0 mt-3 text-center text-sm text-[var(--color-text-muted)]">
            Seuls le nom, le téléphone et la catégorie sont nécessaires. Le reste nous aide
            à mieux vous répondre.
          </p>
        </div>

        {status === "error" && (
          <p className="m-0 text-sm" style={{ color: "var(--color-error)" }}>
            L&apos;envoi a échoué. Appelez-nous au{" "}
            <a href={`tel:${BUSINESS.phone}`} className="underline">
              {BUSINESS.phoneDisplay}
            </a>{" "}
            ou écrivez à{" "}
            <a href={`mailto:${BUSINESS.email}`} className="underline">
              {BUSINESS.email}
            </a>
            .
          </p>
        )}

        <p className="m-0 text-xs text-[var(--color-text-muted)]">
          Vos données servent uniquement à traiter votre demande —{" "}
          <a href="/confidentialite/" className="underline">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </form>
  );
}
