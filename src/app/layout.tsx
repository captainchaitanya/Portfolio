import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/content/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "Product manager. Two internships across health-tech, fintech and B2B SaaS. Turning vague asks into something a team can actually build.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaitanya-raj.vercel.app"),
  title: {
    default: "Chaitanya Raj — Product",
    template: "%s — Chaitanya Raj",
  },
  description,
  openGraph: {
    title: "Chaitanya Raj — Product",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Chaitanya Raj",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Raj — Product",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: site.name }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12110F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full`}
      suppressHydrationWarning
    >
      <body className={`${instrumentSans.className} min-h-full bg-ground text-ink antialiased`}>
        <ThemeProvider>
          <SkipLink />
          <div className="relative">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
