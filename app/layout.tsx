import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "RR Pharmacy | Wholesale Medical Agency in Kurnool", template: "%s | RR Pharmacy" },
  description: "RR Pharmacy is a wholesale medical agency in Kurnool. Browse the product catalogue and send product enquiries directly on WhatsApp.",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: { type: "website", locale: "en_IN", siteName: "RR Pharmacy", title: "RR Pharmacy | Wholesale Medical Agency in Kurnool", description: "Browse the RR Pharmacy product catalogue and enquire on WhatsApp." },
  twitter: { card: "summary_large_image", title: "RR Pharmacy | Wholesale Medical Agency in Kurnool", description: "Browse the RR Pharmacy product catalogue and enquire on WhatsApp." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><FloatingWhatsApp /></body></html>;
}
