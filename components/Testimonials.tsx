"use client";

import { testimonials, stats } from "@/lib/content";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 scroll-mt-24">
      <div className="shell">
        <SectionHeading
          title="What it is like to work with us."
          intro="A few words from the founders and teams behind the projects above."
          className="mb-14"
        />

        <FadeUp className="columns-1 md:columns-2 gap-5 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-ink/10 bg-paper p-7 md:p-8"
            >
              <Icon name="Quotes" weight="fill" size={26} className="text-accent/70" />
              <blockquote className="text-ink text-lg leading-relaxed mt-4">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-ink/10">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-sanddeep font-mono text-xs font-semibold text-ink">
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <strong className="text-[15px] font-semibold">{t.name}</strong>
                  <span className="text-sm text-ink-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

export function StatsRow() {
  return (
    <div className="shell">
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 rounded-card overflow-hidden border border-ink/10">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.05} className="bg-paper p-7 md:p-9 text-center">
            <dd className="display text-4xl md:text-5xl text-accent-deep">{s.value}</dd>
            <dt className="text-sm text-ink-500 mt-2">{s.label}</dt>
          </FadeUp>
        ))}
      </dl>
    </div>
  );
}
