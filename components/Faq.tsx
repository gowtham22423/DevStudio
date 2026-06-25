"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-card scroll-mt-24">
      <div className="shell">
        <FadeUp className="max-w-2xl mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">FAQ</span>
          <h2 className="display text-4xl md:text-6xl mt-3">Frequently asked questions.</h2>
          <p className="text-muted text-lg mt-4">
            Got questions about my web services? Find quick responses to the questions I receive most often.
          </p>
        </FadeUp>

        <div className="max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={f.q} delay={i * 0.04} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="display text-xl md:text-2xl">{f.q}</span>
                  <span className={`text-2xl text-purple transition-transform duration-400 ease-premium ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
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
