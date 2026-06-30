"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/content";
import { EASE_PREMIUM } from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function BentoServices({ bare = false }: { bare?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <section
      id="services"
      className={`scroll-mt-24 ${bare ? "pt-10 pb-24 md:pb-28" : "py-24 md:py-32"}`}
    >
      <div className="shell">
        {!bare && (
          <SectionHeading
            eyebrow="What we do"
            title="Everything your site needs, from one team."
            intro="Design and engineering under one roof, so nothing falls through the gap between the people who draw it and the people who build it."
            className="mb-14"
          />
        )}

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 rounded-card overflow-hidden border border-ink/10">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: (i % 2) * 0.06 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex flex-col h-full bg-paper p-8 md:p-10 hover:bg-sand transition-colors duration-300"
              >
                <span className="grid place-items-center w-12 h-12 rounded-md bg-ink/[0.05] text-ink group-hover:bg-accent group-hover:text-paper transition-colors duration-300">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="display text-2xl md:text-[1.7rem] mt-6">{s.name}</h3>
                <p className="text-ink-500 leading-relaxed mt-3 flex-1">{s.short}</p>
                <span className="inline-flex items-center gap-1.5 mt-7 text-[15px] font-medium text-ink group-hover:text-accent-deep transition-colors">
                  Explore
                  <Icon
                    name="ArrowUpRight"
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
