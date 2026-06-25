"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { EASE_PREMIUM } from "./FadeUp";
import FadeUp from "./FadeUp";

// Asymmetrical bento spans
const spans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export default function BentoServices({ bare = false }: { bare?: boolean }) {
  return (
    <section id="services" className={`${bare ? "pb-24 md:pb-32" : "py-24 md:py-32 bg-card"} scroll-mt-24`}>
      <div className="shell">
        {!bare && (
          <FadeUp className="max-w-2xl mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple">Services</span>
            <h2 className="display text-4xl md:text-6xl mt-3">End-to-end web design &amp; development.</h2>
            <p className="text-muted text-lg mt-4">
              I provide end-to-end web design and development solutions tailored to grow your business, increase brand trust, and convert visitors into active customers.
            </p>
          </FadeUp>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              className={spans[i]}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: (i % 3) * 0.06 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex flex-col h-full bg-paper rounded-4xl p-8 border border-black/5 overflow-hidden transition-all duration-400 ease-premium hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(25,23,28,0.18)]"
              >
                <span className="text-sm font-semibold text-purple">{s.num}</span>
                <h3 className="display text-2xl md:text-3xl mt-5">{s.name}</h3>
                <p className="text-muted mt-3 flex-1">{s.short}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold group-hover:text-purple transition-colors">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </span>
                <div className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full bg-purple/5 group-hover:bg-purple/10 transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
