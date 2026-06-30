import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaBand from "@/components/CtaBand";
import { methodology } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "The Blueprint is the six-phase method DevStudio runs on every project: discovery, strategy, design, build, launch, and partnership.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker={methodology.tagline}
          title="The Blueprint: how we build."
          subtitle={methodology.intro}
        />
        <section className="py-20 md:py-28">
          <ProcessTimeline />
        </section>
        <CtaBand title="Start with a discovery call." body="Thirty minutes to map the goal, the scope, and whether we are a fit." />
      </main>
      <Footer />
    </>
  );
}
