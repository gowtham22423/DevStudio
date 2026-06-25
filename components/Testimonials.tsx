"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { testimonials, stats } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <span ref={ref} className="display text-5xl md:text-7xl text-purple">{val}{suffix}</span>;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card scroll-mt-24">
      <div className="shell">
        <FadeUp className="max-w-2xl mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">Words from clients</span>
          <h2 className="display text-4xl md:text-6xl mt-3">What clients say.</h2>
          <p className="text-muted text-lg mt-4">
            Hear directly from some of the businesses and startup founders I&apos;ve helped establish online presence.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: i * 0.08 }}
              className="bg-paper rounded-4xl p-8 flex flex-col"
            >
              <div className="text-purple tracking-widest mb-4">★★★★★</div>
              <blockquote className="flex-1 text-ink leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3 mt-6">
                <span className="w-11 h-11 rounded-full bg-card text-purple flex items-center justify-center font-bold text-sm">{t.initials}</span>
                <span className="flex flex-col">
                  <strong className="text-sm">{t.name}</strong>
                  <span className="text-xs text-muted-soft uppercase tracking-wide">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-24">
      <div className="shell grid md:grid-cols-2 gap-12 items-center">
        <FadeUp>
          <span className="text-sm font-semibold uppercase tracking-wider text-purple">About</span>
          <h2 className="display text-4xl md:text-6xl mt-3">I build digital products that drive growth.</h2>
          <p className="text-muted text-lg mt-4">
            I help businesses establish a strong online presence through modern, high-performing websites that convert visitors into customers.
          </p>
        </FadeUp>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-4xl p-6 text-center">
              <Counter target={s.target} suffix={s.suffix} />
              <span className="block text-sm text-muted mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
