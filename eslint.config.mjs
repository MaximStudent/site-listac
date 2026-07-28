import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

/**
 * Configuration ESLint « flat config » (ESLint 9).
 *
 * Pourquoi ce fichier existe : le projet n'avait AUCUNE configuration ESLint.
 * `next lint` ouvrait alors un questionnaire interactif — inoffensif en local,
 * bloquant sur un runner CI ou dans un build Vercel, où personne ne peut répondre.
 * `next lint` est en plus déprécié et disparaît dans Next.js 16 : on passe donc
 * directement à la CLI ESLint (`npm run lint` → `eslint .`).
 *
 * `core-web-vitals` ajoute aux règles Next les contrôles de performance qui
 * comptent pour un site d'artisan consulté au téléphone (images non optimisées,
 * scripts synchrones, polices bloquantes).
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    // Artefacts de build : les linter ferait remonter des milliers de faux positifs.
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
