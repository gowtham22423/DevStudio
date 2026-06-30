"use client";

import { whyPoints } from "@/lib/content";
import FadeUp from "./FadeUp";
import Button from "./Button";
import Icon from "./Icon";

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32 bg-sand/60 scroll-mt-24">
      <div className="shell grid lg:grid-cols-12 gap-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <h2 className="display text-display-sm md:text-display text-balance">
                Why teams keep working with us.
              </h2>
              <p className="text-ink-500 text-lg leading-relaxed mt-5 max-w-md">
                We stay small and senior on purpose. You work with the people who
                do the work, and you are accountable to a number, not a mood board.
              </p>
              <Button href="/about" variant="secondary" className="mt-8">
                About the studio
              </Button>
            </FadeUp>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul>
            {whyPoints.map((w, i) => (
              <FadeUp
                as="li"
                key={w.title}
                delay={i * 0.05}
                className="flex gap-5 py-7 border-t border-ink/12 first:border-t-0 lg:first:border-t"
              >
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-md bg-paper border border-ink/10 text-accent-deep">
                  <Icon name={w.icon} size={22} />
                </span>
                <div>
                  <h3 className="display text-xl">{w.title}</h3>
                  <p className="text-ink-500 leading-relaxed mt-2">{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
