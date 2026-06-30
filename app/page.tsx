import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BentoServices from "@/components/BentoServices";
import StickyShowcase from "@/components/StickyShowcase";
import Blueprint from "@/components/Blueprint";
import { Why } from "@/components/WhyProcess";
import { Testimonials } from "@/components/Testimonials";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <BentoServices />
        <StickyShowcase limit={3} />
        <div className="shell -mt-6 md:-mt-10 mb-2 flex justify-center">
          <Button href="/work" variant="secondary" icon iconName="ArrowRight">
            View all work
          </Button>
        </div>
        <Blueprint />
        <Why />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
