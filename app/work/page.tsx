import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyShowcase from "@/components/StickyShowcase";

export const metadata: Metadata = {
  title: "Work — DevStudio",
  description: "Recent projects built to optimize lead generation, increase performance, and elevate digital presence.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Selected work"
          title="Projects built to perform."
          subtitle="A look at recent work spanning restaurants, real estate, SaaS, e-commerce and more — each built to optimize lead generation, performance, and digital presence."
        />
        <StickyShowcase showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
