import type { Metadata } from "next";
import { Manrope, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Johan Blomdahl — Utvecklare & produktbyggare",
    template: "%s — Johan Blomdahl",
  },
  description:
    "Från idé till fungerande produkt. Utforska Johan Blomdahls projekt inom AI, automation, e-handel och webbutveckling.",
  openGraph: {
    title: "Johan Blomdahl — Utvecklare & produktbyggare",
    description:
      "Utvalda projekt inom AI, automation, e-handel och webbutveckling.",
    locale: "sv_SE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${manrope.variable} ${dmSans.variable} ${serif.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Hoppa till innehållet
        </a>
        {children}
      </body>
    </html>
  );
}
