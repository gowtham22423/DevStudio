import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell DevStudio what you are building. Send a project brief and we will reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
