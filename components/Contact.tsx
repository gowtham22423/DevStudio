"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

export default function Contact() {
  const [toast, setToast] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as any)._t);
    (showToast as any)._t = window.setTimeout(() => setToast(null), 3800);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const details = (data.get("details") as string)?.trim();
    if (!name || !email || !details) return showToast("Please fill in all required fields.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast("Please enter a valid email address.");
    setSending(true);
    setTimeout(() => {
      setSending(false);
      showToast("Thank you! Your request has been sent successfully.");
      form.reset();
    }, 1300);
  };

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-24">
      <div className="shell grid md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">Get in touch</span>
          <h2 className="display text-4xl md:text-6xl mt-3">Let&apos;s build your next website.</h2>
          <p className="text-muted text-lg mt-4">
            Whether you need a brand-new website setup, custom landing pages, or redesigning an existing layout, I am here to help you turn your concepts into clean realities.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            {[
              { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { label: "Phone", value: contact.phone },
              { label: "Location", value: contact.location },
            ].map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5 pb-4 border-b border-black/10">
                <span className="text-xs uppercase tracking-wider text-muted-soft">{row.label}</span>
                {row.href ? (
                  <a href={row.href} className="text-lg font-medium hover:text-purple transition-colors">{row.value}</a>
                ) : (
                  <span className="text-lg font-medium">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form onSubmit={onSubmit} className="bg-card rounded-4xl p-8 flex flex-col gap-5" noValidate>
            <Field label="Full Name *" name="name" placeholder="John Doe" />
            <Field label="Email Address *" name="email" type="email" placeholder="john@example.com" />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
            <Field label="Project Details *" name="details" textarea placeholder="Describe your website goals, features, and desired timelines..." />
            <button
              type="submit"
              disabled={sending}
              className="bg-purple text-white py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium disabled:opacity-60"
            >
              {sending ? "Sending…" : "Start Your Project"}
            </button>
          </form>
        </FadeUp>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 80, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 80, x: "-50%" }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="fixed bottom-8 left-1/2 z-[100] bg-ink text-white px-6 py-3.5 rounded-full text-sm font-medium shadow-2xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, textarea,
}: { label: string; name: string; type?: string; placeholder?: string; textarea?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-soft">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          className="bg-paper border border-black/10 rounded-2xl px-4 py-3 text-base outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition resize-y"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="bg-paper border border-black/10 rounded-2xl px-4 py-3 text-base outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition"
        />
      )}
    </label>
  );
}
