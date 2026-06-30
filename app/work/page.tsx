import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyShowcase from "@/components/StickyShowcase";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent work from DevStudio across retail, real estate, SaaS, fitness, healthcare, and hospitality. Each project built around a measurable outcome.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="Selected work"
          title="Projects built around outcomes."
          subtitle="A look at recent work across retail, real estate, SaaS, and more. Every build is designed to move a number that matters."
        />
        <StickyShowcase showHeading={false} />
        <CtaBand title="Want results like these?" body="Tell us about the project and we will show you how we would approach it." />
      </main>
      <Footer />
    </>
  );
}
