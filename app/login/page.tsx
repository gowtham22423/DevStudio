"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "@/components/FadeUp";

type LogEntry = { time: string; email: string; phone: string; status: string };

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [generated, setGenerated] = useState("");
  const [timer, setTimer] = useState(60);
  const [toast, setToast] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    try { setLogs(JSON.parse(localStorage.getItem("devstudio_login_logs") || "[]")); } catch {}
  }, []);

  useEffect(() => {
    if (step !== "otp") return;
    setTimer(60);
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [step, generated]);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 3500); };
  const addLog = (status: string) => {
    const entry: LogEntry = { time: new Date().toLocaleString(), email, phone, status };
    const next = [entry, ...logs].slice(0, 20);
    setLogs(next);
    localStorage.setItem("devstudio_login_logs", JSON.stringify(next));
  };

  const sendOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGenerated(code);
    setStep("otp");
    setOtp(Array(6).fill(""));
    window.alert(`[MOCK OTP sent to ${phone} / ${email}]: ${code}`);
    showToast("OTP sent. Enter the 6-digit code.");
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !password) return showToast("All required fields must be filled.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast("Enter a valid email address.");
    if (phone.replace(/\D/g, "").length < 10) return showToast("Enter a valid 10-digit phone number.");
    sendOtp();
  };

  const onOtpChange = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp]; next[i] = v; setOtp(next);
    if (v && i < 5) otpRefs.current[i + 1]?.focus();
  };
  const onOtpKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus();
  };

  const verifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = otp.join("");
    if (entered.length < 6) return showToast("Enter all 6 digits.");
    if (entered !== generated) { addLog("Failed (Invalid OTP)"); return showToast("Invalid OTP code. Try again."); }
    addLog("Success (OTP Verified)");
    localStorage.setItem("devstudio_logged_in", "true");
    localStorage.setItem("devstudio_client_email", email);
    localStorage.setItem("devstudio_client_phone", phone);
    localStorage.setItem("devstudio_onboarding_step", "welcome");
    showToast("Verified! Starting setup…");
    setTimeout(() => router.push("/onboarding"), 900);
  };

  const googleLogin = () => {
    setEmail("client.google@gmail.com"); setPhone("+91 99999 99999");
    setTimeout(() => {
      const entry: LogEntry = { time: new Date().toLocaleString(), email: "client.google@gmail.com", phone: "+91 99999 99999", status: "Success (Google SSO)" };
      const next = [entry, ...logs].slice(0, 20);
      setLogs(next); localStorage.setItem("devstudio_login_logs", JSON.stringify(next));
      localStorage.setItem("devstudio_logged_in", "true");
      localStorage.setItem("devstudio_client_email", "client.google@gmail.com");
      localStorage.setItem("devstudio_client_phone", "+91 99999 99999");
      localStorage.setItem("devstudio_onboarding_step", "welcome");
      router.push("/onboarding");
    }, 700);
    showToast("Connecting via Google…");
  };

  return (
    <main className="min-h-screen bg-card flex items-center justify-center px-4 py-16 relative">
      <Link href="/" className="absolute top-6 left-6 text-sm font-semibold text-muted hover:text-purple transition-colors">← Back to Home</Link>

      <div className="w-full max-w-md">
        <div className="bg-paper border border-black/8 rounded-4xl p-8 md:p-10 shadow-[0_30px_60px_-25px_rgba(25,23,28,0.2)]">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-semibold tracking-tightest inline-flex items-center gap-1">
              DevStudio<span className="w-2 h-2 rounded-full bg-purple inline-block mt-2" />
            </Link>
            <h1 className="display text-2xl mt-5">{step === "login" ? "Client Portal Login" : "Verify Security Code"}</h1>
            <p className="text-sm text-muted mt-1.5">
              {step === "login" ? "Securely access project boards, invoices, and messaging tools." : `Enter the 6-digit code sent to ${email}.`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === "login" ? (
              <motion.form key="login" onSubmit={handleLogin} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }} className="flex flex-col gap-4" noValidate>
              <Field label="Gmail Address *"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className={inputCls} /></Field>
              <Field label="Phone Number *"><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className={inputCls} /></Field>
              <Field label="Password *">
                <div className="relative">
                  <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className={inputCls} />
                  <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted hover:text-ink">{showPw ? "HIDE" : "SHOW"}</button>
                </div>
              </Field>
              <button type="submit" className="bg-purple text-white py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium mt-1">Sign In &amp; Send OTP</button>
              <div className="flex items-center gap-3 text-xs text-muted-soft my-1"><span className="flex-1 h-px bg-black/10" />or continue with<span className="flex-1 h-px bg-black/10" /></div>
              <button type="button" onClick={googleLogin} className="border border-black/10 py-3 rounded-full font-semibold hover:bg-card transition-colors">Sign in with Google</button>
              </motion.form>
            ) : (
              <motion.form key="otp" onSubmit={verifyOtp} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }} className="flex flex-col gap-5" noValidate>
                <div className="flex gap-2 justify-center">
                  {otp.map((d, i) => (
                    <input key={i} ref={(el) => { otpRefs.current[i] = el; }} value={d} onChange={(e) => onOtpChange(i, e.target.value)} onKeyDown={(e) => onOtpKey(i, e)} inputMode="numeric" maxLength={1}
                      className="w-12 h-14 text-center text-xl font-bold font-mono bg-card border border-black/10 rounded-2xl outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition" />
                  ))}
                </div>
                <button type="submit" className="bg-purple text-white py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium">Verify &amp; Log In</button>
                <p className="text-center text-sm text-muted">
                  Didn&apos;t receive code?{" "}
                  <button type="button" onClick={sendOtp} disabled={timer > 0} className="text-purple font-semibold disabled:opacity-50">Resend OTP</button>{" "}
                  <span className="text-muted-soft">{timer > 0 ? `(${timer}s)` : "(expired)"}</span>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Login history logs */}
        <div className="bg-paper border border-black/8 rounded-4xl p-6 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold">Client Login Logs</h2>
            <button onClick={() => { localStorage.removeItem("devstudio_login_logs"); setLogs([]); }} className="text-xs font-semibold border border-black/10 px-3 py-1.5 rounded-full hover:bg-card">Clear</button>
          </div>
          <div className="overflow-x-auto max-h-44">
            <table className="w-full text-left text-xs">
              <thead><tr className="text-muted-soft"><th className="py-2 pr-3">Time</th><th className="py-2 pr-3">Email</th><th className="py-2">Status</th></tr></thead>
              <tbody>
                {logs.length === 0 ? (
                  <tr><td colSpan={3} className="py-3 text-center text-muted-soft">No login history found.</td></tr>
                ) : logs.map((l, i) => (
                  <tr key={i} className="border-t border-black/5"><td className="py-2 pr-3 text-muted">{l.time}</td><td className="py-2 pr-3 text-muted">{l.email}</td><td className={`py-2 font-semibold ${l.status.includes("Success") ? "text-green-600" : "text-red-500"}`}>{l.status}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 80, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 80, x: "-50%" }} transition={{ duration: 0.5, ease: EASE_PREMIUM }} className="fixed bottom-8 left-1/2 z-[100] bg-ink text-white px-6 py-3.5 rounded-full text-sm font-medium shadow-2xl">{toast}</motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

const inputCls = "w-full bg-card border border-black/10 rounded-2xl px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-soft">{label}</span>
      {children}
    </label>
  );
}
