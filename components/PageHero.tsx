"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";

export default function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: reduce ? false : { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_PREMIUM, delay },
  });

  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-ink/8">
      <div className="shell">
        <motion.span {...rise(0)} className="eyebrow block">
          {kicker}
        </motion.span>
        <motion.h1
          {...rise(0.06)}
          className="display display-tight text-display md:text-display-lg mt-5 max-w-4xl text-balance"
        >
          {title}
        </motion.h1>
        <motion.p
          {...rise(0.12)}
          className="text-lg md:text-xl text-ink-500 leading-relaxed mt-6 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
