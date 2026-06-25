import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import StickyShowcase from "@/components/StickyShowcase";
import { Why } from "@/components/WhyProcess";
import { Testimonials } from "@/components/Testimonials";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StickyShowcase />
        <div className="shell -mt-10 mb-10">
          <Link href="/work" className="inline-flex items-center gap-1.5 font-semibold hover:text-purple transition-colors">
            View all work <span>↗</span>
          </Link>
        </div>
        <BentoServices />
        <Why />
        <Testimonials />
        <section className="py-24 md:py-32">
          <FadeUp className="shell text-center">
            <h2 className="display text-4xl md:text-6xl max-w-3xl mx-auto">Ready to grow your business online?</h2>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Link href="/contact" className="bg-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-purple-dark hover:-translate-y-0.5 transition-all duration-300 ease-premium">Get Free Consultation</Link>
              <Link href="/pricing" className="border border-black/15 px-7 py-3.5 rounded-full font-semibold hover:bg-ink hover:text-white transition-all duration-300 ease-premium">View Pricing</Link>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
