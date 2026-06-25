import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { processDetail } from "@/lib/content";

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
          <div className="shell">
            {processDetail.map((step) => (
              <FadeUp key={step.num} className="grid md:grid-cols-[8rem_1fr] gap-4 md:gap-10 py-10 border-t border-black/10">
                <span className="display text-5xl md:text-6xl text-purple">{step.num}</span>
                <div>
                  <h2 className="display text-2xl md:text-3xl">{step.title}</h2>
                  <p className="text-sm uppercase tracking-wider text-muted-soft mt-1">{step.desc}</p>
                  <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">{step.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
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
