"use client";

import { motion, useReducedMotion } from "framer-motion";
import { plans, CTA_LABEL } from "@/lib/content";
import { EASE_PREMIUM } from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon from "./Icon";

export default function Pricing({ bare = false }: { bare?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <section id="pricing" className={`scroll-mt-24 ${bare ? "pt-10 pb-8 md:pb-12" : "py-24 md:py-32"}`}>
      <div className="shell">
        {!bare && (
          <SectionHeading
            eyebrow="Pricing"
            title="Clear pricing, no surprises."
            intro="Pick the scope that fits where the business is now. Every figure is a starting point we confirm against your real requirements."
            className="mb-14"
          />
        )}

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: i * 0.07 }}
              className={`relative rounded-panel p-8 flex flex-col border ${
                plan.featured
                  ? "border-accent/50 ring-1 ring-accent/30 bg-accent-tint/50"
                  : "border-ink/12 bg-paper"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-6 right-6 text-[11px] font-semibold uppercase tracking-wide text-accent-deep bg-accent-soft/60 rounded-sm px-2.5 py-1">
                  Most popular
                </span>
              )}
              <h3 className="display text-2xl">{plan.name}</h3>
              <p className="text-ink-500 text-sm leading-relaxed mt-2 mb-6 min-h-[2.5rem]">{plan.desc}</p>

              <div className="flex items-baseline gap-1">
                <span className="display text-2xl">₹</span>
                <span className="display text-5xl">{plan.price}</span>
              </div>
              <span className="text-sm text-ink-500 mt-1 mb-6">{plan.period}</span>

              <Button
                href="/contact"
                variant={plan.featured ? "accent" : "primary"}
                className="w-full mb-7"
              >
                {CTA_LABEL}
              </Button>

              <ul className="flex flex-col">
                {plan.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 py-2.5 text-sm border-t border-ink/10 first:border-t-0">
                    <Icon name="Check" size={17} weight="bold" className="text-accent-deep mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
                {plan.excludes.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 py-2.5 text-sm border-t border-ink/10 text-ink-500">
                    <Icon name="X" size={17} className="mt-0.5 shrink-0 opacity-60" />
                    <span>{f}</span>
                  </li>
                ))}
                {plan.note && (
                  <li className="py-2.5 text-sm italic text-ink-500 border-t border-ink/10">{plan.note}</li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
