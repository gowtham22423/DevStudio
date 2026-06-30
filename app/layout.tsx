import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const SITE = "https://devstudio.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "DevStudio - Web design & engineering studio",
    template: "%s - DevStudio",
  },
  description:
    "DevStudio is a web design and engineering studio that builds fast, considered, conversion-focused websites for ambitious brands. Strategy, design, and build under one team.",
  keywords: [
    "web design studio",
    "web development studio",
    "custom website design",
    "Next.js development",
    "e-commerce development",
    "landing page design",
    "website redesign",
  ],
  authors: [{ name: "DevStudio" }],
  openGraph: {
    title: "DevStudio - Web design & engineering studio",
    description:
      "Fast, considered, conversion-focused websites for ambitious brands. Strategy, design, and build under one team.",
    type: "website",
    url: SITE,
    siteName: "DevStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStudio - Web design & engineering studio",
    description:
      "Fast, considered, conversion-focused websites for ambitious brands.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
