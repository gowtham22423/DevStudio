import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BentoServices from "@/components/BentoServices";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design and engineering services from DevStudio: website design, development, landing pages, e-commerce, redesigns, and ongoing care.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="Services"
          title="Everything your site needs, from one team."
          subtitle="From first sketch to launch and care. Pick a service to see what is included and request a quote."
        />
        <BentoServices bare />
        <Faq />
        <CtaBand
          title="Not sure which one you need?"
          body="Tell us the goal and we will point you to the right scope. No pressure, no jargon."
        />
      </main>
      <Footer />
    </>
  );
}
