"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "@/components/FadeUp";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const inputCls =
  "w-full bg-paper border border-ink/15 rounded-md px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition placeholder:text-ink-500";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [generated, setGenerated] = useState("");
  const [timer, setTimer] = useState(60);
  const [msg, setMsg] = useState<string | null>(null);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step !== "otp") return;
    setTimer(60);
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [step, generated]);

  const sendOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGenerated(code);
    setStep("otp");
    setOtp(Array(6).fill(""));
    setMsg(null);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setMsg("Enter a valid email address.");
    if (password.length < 6) return setMsg("Password should be at least 6 characters.");
    sendOtp();
  };

  const onOtpChange = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp];
    next[i] = v;
    setOtp(next);
    if (v && i < 5) otpRefs.current[i + 1]?.focus();
  };
  const onOtpKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus();
  };

  const verifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = otp.join("");
    if (entered.length < 6) return setMsg("Enter all six digits.");
    if (entered !== generated) return setMsg("That code does not match. Try again.");
    localStorage.setItem("devstudio_logged_in", "true");
    localStorage.setItem("devstudio_client_email", email);
    localStorage.setItem("devstudio_onboarding_step", "welcome");
    router.push("/onboarding");
  };

  return (
    <main id="main-content" className="min-h-[100dvh] bg-sand grid place-items-center px-4 py-16 relative">
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink transition-colors"
      >
        <Icon name="ArrowLeft" size={16} /> Back home
      </Link>

      <div className="w-full max-w-md">
        <div className="bg-paper border border-ink/10 rounded-panel p-8 md:p-10 shadow-soft">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="DevStudio home">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-accent" />
              <span className="text-xl font-semibold tracking-tight2">DevStudio</span>
            </Link>
            <h1 className="display text-2xl mt-6">
              {step === "login" ? "Client portal" : "Verify it is you"}
            </h1>
            <p className="text-sm text-ink-500 mt-1.5">
              {step === "login"
                ? "Sign in to project boards, invoices, and messages."
                : `Enter the six-digit code we sent to ${email}.`}
            </p>
          </div>

          {msg && (
            <p role="alert" className="text-sm text-rust bg-rust/8 border border-rust/20 rounded-md px-3 py-2 mb-5">
              {msg}
            </p>
          )}

          <AnimatePresence mode="wait">
            {step === "login" ? (
              <motion.form
                key="login"
                onSubmit={handleLogin}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="flex flex-col gap-4"
                noValidate
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <input id="password" type={showPw ? "text" : "password"} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" className={`${inputCls} pr-12`} />
                    <button type="button" onClick={() => setShowPw((v) => !v)} aria-label={showPw ? "Hide password" : "Show password"} className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 text-ink-500 hover:text-ink">
                      <Icon name={showPw ? "X" : "MagnifyingGlass"} size={18} />
                    </button>
                  </div>
                </div>
                <Button type="submit" size="lg" className="mt-1 w-full">Continue</Button>
                <p className="text-center text-xs text-ink-500 mt-1">
                  Demo portal. No real account needed. Use any email and a 6+ character password.
                </p>
              </motion.form>
            ) : (
              <motion.form
                key="otp"
                onSubmit={verifyOtp}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="rounded-md bg-accent-tint/60 border border-accent/25 text-accent-deep text-sm px-3 py-2 text-center">
                  Demo code: <span className="font-mono font-semibold tracking-widest">{generated}</span>
                </div>
                <div className="flex gap-2 justify-center" role="group" aria-label="Six digit code">
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => { otpRefs.current[i] = el; }}
                      value={d}
                      onChange={(e) => onOtpChange(i, e.target.value)}
                      onKeyDown={(e) => onOtpKey(i, e)}
                      inputMode="numeric"
                      maxLength={1}
                      aria-label={`Digit ${i + 1}`}
                      className="w-12 h-14 text-center text-xl font-semibold font-mono bg-paper border border-ink/15 rounded-md outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    />
                  ))}
                </div>
                <Button type="submit" size="lg" className="w-full">Verify and sign in</Button>
                <p className="text-center text-sm text-ink-500">
                  No code?{" "}
                  <button type="button" onClick={sendOtp} disabled={timer > 0} className="text-accent-deep font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                    Resend
                  </button>{" "}
                  <span className="text-ink-500">{timer > 0 ? `in ${timer}s` : ""}</span>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-xs text-ink-500 mt-5">
          Protected client area. <Link href="/contact" className="text-accent-deep hover:underline underline-offset-2">Need access?</Link>
        </p>
      </div>
    </main>
  );
}
