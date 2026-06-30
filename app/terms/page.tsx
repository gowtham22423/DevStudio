import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that apply when you use the DevStudio site and work with us.",
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "Using this site",
    p: "You are welcome to browse and contact us. Please do not misuse the site, attempt to break it, or copy its content as your own.",
  },
  {
    h: "Our work",
    p: "Project scope, timelines, deliverables, and payment terms are set out in a separate written agreement for each engagement. That agreement governs the work, not this page.",
  },
  {
    h: "Liability",
    p: "We take care to keep this site accurate, but we provide it as is. We are not liable for losses arising from your use of the site itself.",
  },
  {
    h: "Contact",
    p: `Questions about these terms can go to ${contact.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="Legal"
          title="Terms of use."
          subtitle="The basics of using this site and working with us. This is a starting template; have it reviewed before you rely on it."
        />
        <section className="py-16 md:py-24">
          <div className="shell max-w-prose2 flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="display text-2xl">{s.h}</h2>
                <p className="text-ink-500 text-lg leading-relaxed mt-3">{s.p}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
