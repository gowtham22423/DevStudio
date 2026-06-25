import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "DevStudio — Premium Web Design & Development",
  description:
    "DevStudio crafts fast, modern, SEO-optimized custom websites that turn visitors into loyal customers. Premium web design and development.",
  keywords: [
    "Freelance Web Developer",
    "Custom Website Design",
    "E-commerce stores",
    "Landing pages",
    "Website redesign",
  ],
  openGraph: {
    title: "DevStudio — Premium Web Design & Development",
    description:
      "Fast, modern, and SEO-optimized custom websites designed to convert visitors into loyal clients.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
