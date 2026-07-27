import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
import { BUSINESS } from "@/lib/config";

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
    default: "LISTAC — Électricien en Brabant wallon (Ramillies) | Ponctuel et fiable",
    template: "%s | LISTAC, électricien Brabant wallon",
  },
  description:
    "LISTAC (Gabriel Mengal), électricien à Autre-Église (Ramillies). Dépannage, mise en conformité RGIE, tableaux, bornes et domotique en Brabant wallon.",
  alternates: {
    canonical: "/",
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
