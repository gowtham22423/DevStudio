import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BentoServices from "@/components/BentoServices";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Services — DevStudio",
  description: "End-to-end web design and development solutions tailored to grow your business and convert visitors into customers.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Services"
          title="Everything you need to grow online."
          subtitle="From design to development, landing pages to e-commerce — pick a service to see exactly what's included and request a free quote."
        />
        <BentoServices bare />
        <section className="pb-24 md:pb-32">
          <FadeUp className="shell">
            <div className="rounded-4xl bg-ink text-white p-10 md:p-16 text-center">
              <h2 className="display text-3xl md:text-5xl max-w-2xl mx-auto">Not sure which service fits?</h2>
              <p className="text-white/60 mt-4 max-w-xl mx-auto">Tell me about your goals and I&apos;ll recommend the right approach — no pressure, no jargon.</p>
              <Link href="/contact" className="inline-block mt-7 bg-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium">
                Get Free Consultation
              </Link>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
