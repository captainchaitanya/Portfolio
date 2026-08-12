import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Grain } from "@/components/Grain";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Product manager. Electrical engineering at NIT Agartala, business analytics at IIT Mandi. Fintech, fraud and financial access in India.";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#12110F" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`} suppressHydrationWarning>
      <body className={`${geistSans.className} min-h-full bg-bg text-text antialiased`}>
        <ThemeProvider>
          <SkipLink />
          <Grain />
          <div className="relative z-[2]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
