"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_PREMIUM } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* gradient orbs */}
      <div className="orb w-[40rem] h-[40rem] bg-purple/30 -top-40 -left-40 animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="orb w-[32rem] h-[32rem] bg-brand-blue/20 top-10 right-0" />
      <div className="orb w-[28rem] h-[28rem] bg-brand-pink/10 bottom-0 left-1/3" />

      <motion.div
        className="shell relative z-10 text-center flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted bg-card border border-black/5 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple" /> Open for new projects — 2026
        </motion.span>

        <motion.h1 variants={item} className="display text-5xl sm:text-6xl md:text-8xl max-w-5xl">
          Professional websites that help businesses <span className="text-purple">grow.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-muted max-w-2xl mt-7">
          I design and develop fast, modern, SEO-friendly websites that help businesses attract customers and increase revenue.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center mt-9">
          <Link
            href="/#contact"
            className="bg-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-purple-dark hover:-translate-y-0.5 transition-all duration-300 ease-premium"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/#work"
            className="border border-black/15 px-7 py-3.5 rounded-full font-semibold hover:bg-ink hover:text-white transition-all duration-300 ease-premium"
          >
            View My Work
          </Link>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-x-3 gap-y-1 justify-center mt-9 text-sm font-medium text-muted-soft">
          <span>Responsive Design</span><span className="text-purple">•</span>
          <span>Fast Delivery</span><span className="text-purple">•</span>
          <span>SEO Optimized</span><span className="text-purple">•</span>
          <span>Ongoing Support</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
