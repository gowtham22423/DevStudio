"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";

export default function PageHero({
  kicker, title, subtitle,
}: { kicker: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-10 md:pb-14">
      <div className="orb w-[34rem] h-[34rem] bg-purple/20 -top-32 -left-20" />
      <div className="orb w-[24rem] h-[24rem] bg-brand-blue/15 top-0 right-0" />
      <div className="shell relative z-10">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_PREMIUM }} className="text-sm font-semibold uppercase tracking-wider text-purple">
          {kicker}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.06 }} className="display text-5xl md:text-7xl mt-3 max-w-4xl">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.12 }} className="text-lg md:text-xl text-muted mt-5 max-w-2xl">
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
