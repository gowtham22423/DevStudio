import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import StickyShowcase from "@/components/StickyShowcase";
import { Why, Process } from "@/components/WhyProcess";
import Pricing from "@/components/Pricing";
import { Testimonials, About } from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StickyShowcase />
        <BentoServices />
        <Why />
        <Process />
        <Pricing />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
