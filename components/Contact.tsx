"use client";

import { useState } from "react";
import { contact } from "@/lib/content";
import FadeUp from "./FadeUp";
import Button from "./Button";
import Icon from "./Icon";

type Errors = Partial<Record<"name" | "email" | "details", string>>;

const inputCls =
  "w-full bg-paper border border-ink/15 rounded-md px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition placeholder:text-ink-500";

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const details = (data.get("details") as string)?.trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email does not look right.";
    if (!details) next.details = "A sentence or two about the project helps.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    // Front-end only: no backend wired yet. Replace with your form handler / email API.
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 900);
  };

  return (
    <section id="contact" className="pt-28 md:pt-36 pb-20 md:pb-28 scroll-mt-24">
      <div className="shell grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <FadeUp>
          <h2 className="display text-display-sm md:text-display text-balance">
            Tell us what you are building.
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed mt-5 max-w-md">
            New site, landing page, store, or a rebuild of something that is not
            pulling its weight. Send the brief and we will reply within one
            business day.
          </p>

          <dl className="flex flex-col gap-5 mt-10">
            {[
              { icon: "At", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: "MapPin", label: "Where", value: contact.location },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-3 pb-5 border-b border-ink/10">
                <span className="grid place-items-center w-9 h-9 rounded-md bg-sand text-accent-deep shrink-0">
                  <Icon name={row.icon} size={18} />
                </span>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-kicker text-ink-500">{row.label}</dt>
                  {row.href ? (
                    <dd>
                      <a href={row.href} className="text-lg font-medium hover:text-accent-deep transition-colors">
                        {row.value}
                      </a>
                    </dd>
                  ) : (
                    <dd className="text-lg font-medium">{row.value}</dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </FadeUp>

        <FadeUp delay={0.1}>
          {status === "sent" ? (
            <div
              role="status"
              className="rounded-panel border border-accent/30 bg-accent-tint/50 p-8 text-center"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-paper mx-auto">
                <Icon name="Check" size={24} weight="bold" />
              </span>
              <h3 className="display text-2xl mt-5">Brief received.</h3>
              <p className="text-ink-500 mt-2">
                Thanks for reaching out. We will reply within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-accent-deep hover:underline underline-offset-4"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-sand/70 border border-ink/10 rounded-panel p-7 md:p-9 flex flex-col gap-5" noValidate>
              <Field label="Full name" name="name" autoComplete="name" placeholder="Priya Raghavan" error={errors.name} />
              <Field label="Email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" error={errors.email} />
              <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 90000 00000" />
              <Field label="Project details" name="details" textarea placeholder="What you are building, the goal, and a rough timeline." error={errors.details} />
              <Button type="submit" size="lg" disabled={status === "sending"} className="mt-1">
                {status === "sending" ? "Sending..." : "Send project brief"}
              </Button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errId = `${name}-error`;
  const shared = {
    name,
    id: name,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    className: `${inputCls} ${error ? "border-rust focus:border-rust focus:ring-rust/20" : ""}`,
  };
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      {textarea ? (
        <textarea {...shared} rows={4} className={`${shared.className} resize-y`} />
      ) : (
        <input {...shared} type={type} {...rest} />
      )}
      {error && (
        <span id={errId} className="text-sm text-rust">
          {error}
        </span>
      )}
    </div>
  );
}
