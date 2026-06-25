"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "@/components/FadeUp";

const steps = [
  { key: "welcome", title: "Welcome to Your Portal!", body: "Thank you for logging in! We've prepared a brief step-by-step setup wizard to configure your project workspace preferences and help you navigate the system.", cta: "Next: Setup Profile" },
  { key: "profile", title: "Set Up Your Profile", body: "Tell us a bit about you and your business so we can tailor your workspace, project boards, and recommendations to your goals.", cta: "Next: Preferences" },
  { key: "preferences", title: "Your Preferences", body: "Choose how you'd like to collaborate — notification cadence, preferred communication channel, and project visibility defaults.", cta: "Next: Quick Tutorial" },
  { key: "tutorial", title: "Quick Tutorial", body: "Your dashboard gives you project boards, invoices, and direct messaging. You're all set — let's jump into your portal.", cta: "Finish & Enter Portal" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [i, setI] = useState(0);
  const step = steps[i];
  const progress = ((i + 1) / steps.length) * 100;

  const next = () => {
    if (i < steps.length - 1) {
      const n = i + 1;
      setI(n);
      localStorage.setItem("devstudio_onboarding_step", steps[n].key);
    } else {
      localStorage.setItem("devstudio_onboarding_step", "completed");
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-card flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-paper border border-black/8 rounded-4xl p-8 md:p-12 text-center shadow-[0_30px_60px_-25px_rgba(25,23,28,0.2)]">
        <span className="text-2xl font-semibold tracking-tightest inline-flex items-center gap-1">
          DevStudio<span className="w-2 h-2 rounded-full bg-purple inline-block mt-2" />
        </span>

        <div className="h-1.5 bg-card rounded-full mt-8 overflow-hidden">
          <motion.div className="h-full bg-purple rounded-full" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: EASE_PREMIUM }} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-purple mt-4 inline-block">Step {i + 1} of {steps.length}</span>

        <AnimatePresence mode="wait">
          <motion.div key={step.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: EASE_PREMIUM }}>
            <h1 className="display text-3xl mt-4">{step.title}</h1>
            <p className="text-muted mt-4 leading-relaxed">{step.body}</p>
          </motion.div>
        </AnimatePresence>

        <button onClick={next} className="w-full bg-purple text-white py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium mt-8">
          {step.cta}
        </button>
        <button onClick={() => { localStorage.setItem("devstudio_onboarding_step", "completed"); router.push("/"); }} className="text-sm text-muted-soft hover:text-ink mt-4 transition-colors">
          Skip for now
        </button>
      </div>
    </main>
  );
}
