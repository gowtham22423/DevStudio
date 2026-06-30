import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import PricingFaq from "@/components/PricingFaq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, growth-focused pricing from DevStudio with no hidden fees. Pick a scope or request a tailored quote.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="Pricing"
          title="Simple pricing, built for growth."
          subtitle="No hidden fees. Choose the scope that fits where the business is now, or ask for a tailored quote."
        />
        <Pricing bare />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
