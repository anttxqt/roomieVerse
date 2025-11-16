import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roomieverse.app"),
  title: {
    default: "roomieVerse | Find your next roommate",
    template: "%s | roomieVerse",
  },
  description:
    "roomieVerse connects real humans who want to share housing, matching roommates by lifestyle instead of generic listings.",
  openGraph: {
    title: "roomieVerse",
    description:
      "Match with compatible roommates, keep brokers out of the process, and turn any shared flat into a real community.",
    url: "/",
    siteName: "roomieVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "roomieVerse",
    description:
      "A curated roommate marketplace built for lifestyle compatibility and transparent sharing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
