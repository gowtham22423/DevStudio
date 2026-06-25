import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import PricingFaq from "@/components/PricingFaq";

export const metadata: Metadata = {
  title: "Pricing — DevStudio",
  description: "Transparent, growth-focused pricing with zero hidden fees. Choose a plan or request a custom quote.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Pricing"
          title="Simple pricing, built for growth."
          subtitle="Zero hidden fees. Choose a plan that fits your business stage, or request a fully customized solution tailored to your exact needs."
        />
        <Pricing bare />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
