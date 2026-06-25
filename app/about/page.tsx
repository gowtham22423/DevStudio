import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { Why } from "@/components/WhyProcess";
import { Testimonials, StatsRow } from "@/components/Testimonials";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — DevStudio",
  description: "I build digital products that drive growth — modern, high-performing websites that convert visitors into customers.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="About"
          title="I build digital products that drive growth."
          subtitle="I help businesses establish a strong online presence through modern, high-performing websites that convert visitors into customers."
        />
        <section className="pb-20">
          <StatsRow />
        </section>
        <section className="pb-24 md:pb-32 bg-card pt-24 md:pt-32">
          <div className="shell">
            <FadeUp className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-purple">What I value</span>
              <h2 className="display text-4xl md:text-6xl mt-3">Principles behind every build.</h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.06} className="bg-paper rounded-4xl p-8">
                  <h3 className="display text-2xl">{v.title}</h3>
                  <p className="text-muted mt-3">{v.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
        <Why />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
