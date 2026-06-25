"use client";

import { motion } from "framer-motion";
import { whyPoints, processSteps } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32 scroll-mt-24">
      <div className="shell">
        <FadeUp className="max-w-2xl mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">Why work with me</span>
          <h2 className="display text-4xl md:text-6xl mt-3">Design excellence, business results.</h2>
          <p className="text-muted text-lg mt-4">
            I bridge the gap between design excellence and business results, building solid partnerships centered around growth.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyPoints.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: i * 0.07 }}
              className="bg-card rounded-4xl p-8 hover:-translate-y-1 transition-transform duration-400 ease-premium"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-paper text-purple text-xl mb-5">{w.icon}</span>
              <h3 className="display text-xl mt-1">{w.title}</h3>
              <p className="text-muted text-sm mt-2">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-ink text-white scroll-mt-24">
      <div className="shell">
        <FadeUp className="max-w-2xl mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">Process</span>
          <h2 className="display text-4xl md:text-6xl mt-3">A transparent, structured workflow.</h2>
          <p className="text-white/60 text-lg mt-4">
            From initial idea to launch and beyond, I follow a transparent, structured workflow designed to keep projects running efficiently.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: (i % 4) * 0.06 }}
              className="rounded-4xl p-7 border border-white/10 hover:border-purple/50 transition-colors duration-400"
            >
              <span className="display text-3xl text-purple">{step.num}</span>
              <h3 className="display text-xl mt-3">{step.title}</h3>
              <p className="text-white/55 text-sm mt-1.5">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
