"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";
import Button from "./Button";
import { CTA_LABEL } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
  };

  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="shell grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left: message */}
        <motion.div
          className="lg:col-span-7"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "visible"}
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects, 2026
          </motion.span>

          <motion.h1
            variants={reduce ? undefined : item}
            className="display display-tight text-display mt-6 text-balance"
          >
            Websites that earn trust and{" "}
            <span className="text-accent-deep">grow revenue</span>.
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="text-lg md:text-xl text-ink-500 leading-relaxed mt-6 max-w-xl"
          >
            A web design and engineering studio for ambitious brands. Strategy,
            design, and build, handled by one small team.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="flex flex-wrap items-center gap-3 mt-9"
          >
            <Button href="/contact" size="lg" icon>
              {CTA_LABEL}
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View our work
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: real product visual in a quiet window frame */}
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.15 }}
        >
          <figure className="rounded-panel border border-ink/10 bg-sand shadow-lift overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 h-9 border-b border-ink/8 bg-paper/60">
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
            </div>
            <div className="relative aspect-[16/11]">
              <Image
                src="/saas_mockup.png"
                alt="Meridian Analytics dashboard, a product interface built by DevStudio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
