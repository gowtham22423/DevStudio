import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process — DevStudio",
  description: "A transparent, structured workflow from discovery to launch and beyond.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Process"
          title="How great websites get built."
          subtitle="From initial idea to launch and beyond, I follow a transparent, structured workflow designed to keep projects running efficiently — and keep you in the loop at every step."
        />
        <section className="pb-24 md:pb-32">
          <ProcessTimeline />
        </section>
        <section className="pb-24 md:pb-32">
          <FadeUp className="shell text-center">
            <h2 className="display text-4xl md:text-6xl">Let&apos;s start with a discovery call.</h2>
            <Link href="/contact" className="inline-block mt-8 bg-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium">Get Free Consultation</Link>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
