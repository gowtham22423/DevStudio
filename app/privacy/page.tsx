import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How DevStudio handles the information you share with us.",
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "What we collect",
    p: "When you send a project brief or email us, we receive your name, email, and anything you choose to share about your project. Our site uses privacy-respecting analytics to understand traffic in aggregate.",
  },
  {
    h: "How we use it",
    p: "We use your details only to reply to you and to scope and deliver work you ask for. We do not sell your data, and we do not share it except with the tools we need to run the studio.",
  },
  {
    h: "Your choices",
    p: "You can ask us to show, correct, or delete the personal information we hold about you at any time. Email us and we will action it.",
  },
  {
    h: "Contact",
    p: `Questions about privacy can go to ${contact.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          kicker="Legal"
          title="Privacy policy."
          subtitle="A plain-language summary of how we handle your information. This is a starting template; have it reviewed before you rely on it."
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
