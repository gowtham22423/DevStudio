"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pricingFaqs } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

export default function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="pb-24 md:pb-32">
      <div className="shell">
        <FadeUp className="mb-10">
          <h2 className="display text-3xl md:text-5xl">Pricing questions, answered.</h2>
        </FadeUp>
        <div className="max-w-3xl">
          {pricingFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={f.q} delay={i * 0.04} className="border-b border-black/10">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left" aria-expanded={isOpen}>
                  <span className="display text-xl md:text-2xl">{f.q}</span>
                  <span className={`text-2xl text-purple transition-transform duration-400 ease-premium ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE_PREMIUM }} className="overflow-hidden">
                      <p className="text-muted pb-6 max-w-2xl leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
