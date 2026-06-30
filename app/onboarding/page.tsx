"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "@/components/FadeUp";
import Button from "@/components/Button";

const steps = [
  {
    key: "welcome",
    title: "Welcome to your portal",
    body: "Thanks for signing in. We will set up your workspace in a few short steps so everything is ready when your project starts.",
    cta: "Set up profile",
  },
  {
    key: "profile",
    title: "Tell us about you",
    body: "A little about you and your business helps us tailor your boards, recommendations, and the way we work together.",
    cta: "Next: preferences",
  },
  {
    key: "preferences",
    title: "Your preferences",
    body: "Choose how you like to collaborate: how often we update you, your preferred channel, and default project visibility.",
    cta: "Next: a quick tour",
  },
  {
    key: "tutorial",
    title: "You are all set",
    body: "Your dashboard holds project boards, invoices, and messages in one place. Jump in whenever you are ready.",
    cta: "Enter portal",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [i, setI] = useState(0);
  const step = steps[i];
  const progress = ((i + 1) / steps.length) * 100;

  const finish = () => {
    localStorage.setItem("devstudio_onboarding_step", "completed");
    router.push("/");
  };

  const next = () => {
    if (i < steps.length - 1) {
      const n = i + 1;
      setI(n);
      localStorage.setItem("devstudio_onboarding_step", steps[n].key);
    } else {
      finish();
    }
  };

  return (
    <main id="main-content" className="min-h-[100dvh] bg-sand grid place-items-center px-4 py-16">
      <div className="w-full max-w-lg bg-paper border border-ink/10 rounded-panel p-8 md:p-12 text-center shadow-soft">
        <span className="inline-flex items-center gap-2.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-[3px] bg-accent" />
          <span className="text-lg font-semibold tracking-tight2">DevStudio</span>
        </span>

        <div
          className="h-1.5 bg-sanddeep rounded-full mt-8 overflow-hidden"
          role="progressbar"
          aria-valuenow={i + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label={`Step ${i + 1} of ${steps.length}`}
        >
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          />
        </div>
        <span className="eyebrow block mt-4">Step {i + 1} of {steps.length}</span>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          >
            <h1 className="display text-3xl mt-5">{step.title}</h1>
            <p className="text-ink-500 leading-relaxed mt-4">{step.body}</p>
          </motion.div>
        </AnimatePresence>

        <Button onClick={next} size="lg" className="w-full mt-8">
          {step.cta}
        </Button>
        <button
          onClick={finish}
          className="text-sm text-ink-500 hover:text-ink mt-4 transition-colors"
        >
          Skip for now
        </button>
      </div>
    </main>
  );
}
