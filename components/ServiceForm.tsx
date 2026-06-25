"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";

export default function ServiceForm({
  heading, detailsLabel, buttonText, serviceName,
}: { heading: string; detailsLabel: string; buttonText: string; serviceName: string }) {
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
      showToast("Thank you! Your request has been sent.");
      form.reset();
    }, 1300);
  };

  return (
    <div className="bg-card rounded-4xl p-8">
      <h3 className="display text-2xl">{heading}</h3>
      <p className="text-sm text-muted mt-2 mb-6">Send over your project details to get a free custom quote.</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
        <input type="hidden" name="service" value={serviceName} />
        <Input label="Full Name *" name="name" placeholder="John Doe" />
        <Input label="Email Address *" name="email" type="email" placeholder="john@example.com" />
        <Input label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-soft">{detailsLabel}</span>
          <textarea name="details" rows={4} placeholder="Tell me about your project..." className="bg-paper border border-black/10 rounded-2xl px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition resize-y" />
        </label>
        <button type="submit" disabled={sending} className="bg-purple text-white py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium disabled:opacity-60">
          {sending ? "Sending…" : buttonText}
        </button>
      </form>

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
    </div>
  );
}

function Input({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-soft">{label}</span>
      <input name={name} type={type} placeholder={placeholder} className="bg-paper border border-black/10 rounded-2xl px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition" />
    </label>
  );
}
