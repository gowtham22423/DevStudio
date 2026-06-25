"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { plans } from "@/lib/content";
import FadeUp, { EASE_PREMIUM } from "./FadeUp";

export default function Pricing({ bare = false }: { bare?: boolean }) {
  return (
    <section id="pricing" className={`${bare ? "pb-12 md:pb-16" : "py-24 md:py-32"} scroll-mt-24`}>
      <div className="shell">
        {!bare && (
          <FadeUp className="max-w-2xl mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple">Pricing</span>
            <h2 className="display text-4xl md:text-6xl mt-3">Built for growth. Zero hidden fees.</h2>
            <p className="text-muted text-lg mt-4">
              Get the best value pricing with zero hidden fees. Choose a plan that fits your business stage or request a fully customized solution.
            </p>
          </FadeUp>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: i * 0.08 }}
              className={`relative rounded-4xl p-8 flex flex-col border transition-all duration-400 ease-premium hover:-translate-y-1.5 ${
                plan.featured ? "bg-ink text-white border-ink" : "bg-paper border-black/10 hover:shadow-[0_30px_60px_-20px_rgba(25,23,28,0.15)]"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-6 right-6 text-xs font-semibold uppercase tracking-wider text-purple bg-purple/15 px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}
              <h3 className="display text-2xl">{plan.name}</h3>
              <p className={`text-sm mt-2 mb-6 ${plan.featured ? "text-white/60" : "text-muted"}`}>{plan.desc}</p>
              <div className="flex items-baseline gap-0.5 mb-6">
                <span className="display text-2xl">₹</span>
                <span className="display text-5xl">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.featured ? "text-white/50" : "text-muted-soft"}`}>{plan.period}</span>
              </div>
              <Link
                href="/contact"
                className={`w-full text-center py-3 rounded-full font-semibold mb-7 transition-all duration-300 ease-premium ${
                  plan.featured ? "bg-purple text-white hover:bg-purple-dark" : "bg-ink text-white hover:bg-black"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="flex flex-col">
                {plan.includes.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 py-2.5 text-sm border-t ${plan.featured ? "border-white/10" : "border-black/8"}`}>
                    <span className="text-purple font-bold">✓</span>{f}
                  </li>
                ))}
                {plan.excludes.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 py-2.5 text-sm border-t ${plan.featured ? "border-white/10 text-white/35" : "border-black/8 text-muted-soft"}`}>
                    <span className="opacity-50">✕</span>{f}
                  </li>
                ))}
                {plan.note && (
                  <li className={`py-2.5 text-sm italic border-t ${plan.featured ? "border-white/10 text-white/50" : "border-black/8 text-muted-soft"}`}>
                    {plan.note}
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
