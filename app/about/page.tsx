import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import SectionHeading from "@/components/SectionHeading";
import { Why } from "@/components/WhyProcess";
import { Testimonials, StatsRow } from "@/components/Testimonials";
import { studioStory, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "DevStudio is a small web design and engineering studio. We help ambitious brands launch fast, clear, conversion-focused websites.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="About"
          title="A small studio that ships work that performs."
          subtitle={studioStory.lede}
        />

        {/* Story */}
        <section className="py-20 md:py-28">
          <div className="shell grid lg:grid-cols-12 gap-10 lg:gap-12">
            <FadeUp className="lg:col-span-5">
              <p className="display text-2xl md:text-3xl leading-snug text-balance">
                We treat design and engineering as one job, not two handoffs.
              </p>
            </FadeUp>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {studioStory.body.map((p, i) => (
                <FadeUp as="p" key={i} delay={i * 0.05} className="text-ink-500 text-lg leading-relaxed">
                  {p}
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20 md:pb-28">
          <StatsRow />
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-sand/60">
          <div className="shell">
            <SectionHeading
              title="The people on your project."
              intro="You work with the team doing the work, from the first call to launch and beyond."
              className="mb-12"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-card overflow-hidden border border-ink/10">
              {team.map((m, i) => (
                <FadeUp key={m.name} delay={i * 0.05} className="bg-paper p-7 flex flex-col h-full">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-sanddeep font-mono text-sm font-semibold text-ink">
                    {m.initials}
                  </span>
                  <h3 className="display text-xl mt-5">{m.name}</h3>
                  <p className="text-sm text-accent-deep font-medium mt-0.5">{m.role}</p>
                  <p className="text-ink-500 text-sm leading-relaxed mt-3">{m.bio}</p>
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
