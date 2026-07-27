import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
import { BUSINESS } from "@/lib/config";

/**
 * next/font : téléchargées AU BUILD puis self-hosted — zéro requête runtime vers
 * Google (perf + RGPD, doctrine 05). Montserrat = variable font (poids libres),
 * Roboto = graisses 400/500 uniquement (budget).
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "LISTAC — Électricien en Brabant wallon | Ponctuel et fiable",
    // Suffixe court : les titres de page font déjà 40-50 caractères. Avec l'ancien
    // suffixe (« | LISTAC, électricien Brabant wallon ») certaines pages atteignaient
    // 104 caractères et Google tronquait la partie utile.
    template: "%s | LISTAC électricien",
  },
  description:
    "LISTAC (Gabriel Mengal), électricien à Autre-Église (Ramillies). Dépannage, mise en conformité RGIE, tableaux, bornes et domotique en Brabant wallon. « Enfin un entrepreneur qui vient le jour et l'heure annoncés. »",
  alternates: {
    canonical: "/",
    // i18n prêt : hreflang nl/en activés quand les locales seront livrées.
    languages: { "fr-BE": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: BUSINESS.brandName,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <ActionBar />
      </body>
    </html>
  );
}
