"use client";

import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

const inputCls =
  "w-full bg-paper border border-ink/15 rounded-md px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition placeholder:text-ink-500";

type Errors = Partial<Record<"name" | "email" | "details", string>>;

export default function ServiceForm({
  heading,
  detailsLabel,
  buttonText,
  serviceName,
}: {
  heading: string;
  detailsLabel: string;
  buttonText: string;
  serviceName: string;
}) {
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
    if (!details) next.details = "A sentence or two helps us quote accurately.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 900);
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-panel border border-accent/30 bg-accent-tint/50 p-8 text-center">
        <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-paper mx-auto">
          <Icon name="Check" size={24} weight="bold" />
        </span>
        <h3 className="display text-2xl mt-5">Thanks, we have your brief.</h3>
        <p className="text-ink-500 mt-2">We will reply about your {serviceName.toLowerCase()} within one business day.</p>
      </div>
    );
  }

  return (
    <div className="bg-sand/70 border border-ink/10 rounded-panel p-7 md:p-9">
      <h3 className="display text-2xl">{heading}</h3>
      <p className="text-sm text-ink-500 mt-2 mb-6">Send a few details and we will reply with a tailored quote.</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
        <input type="hidden" name="service" value={serviceName} />
        <Field label="Full name" name="name" autoComplete="name" placeholder="Priya Raghavan" error={errors.name} />
        <Field label="Email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" error={errors.email} />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 90000 00000" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="details" className="text-sm font-medium text-ink">{detailsLabel}</label>
          <textarea
            name="details"
            id="details"
            rows={4}
            placeholder="Tell us about the project."
            aria-invalid={errors.details ? true : undefined}
            aria-describedby={errors.details ? "details-error" : undefined}
            className={`${inputCls} resize-y ${errors.details ? "border-rust focus:border-rust focus:ring-rust/20" : ""}`}
          />
          {errors.details && <span id="details-error" className="text-sm text-rust">{errors.details}</span>}
        </div>
        <Button type="submit" size="lg" disabled={status === "sending"} className="mt-1">
          {status === "sending" ? "Sending..." : buttonText}
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errId = `${name}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={`${inputCls} ${error ? "border-rust focus:border-rust focus:ring-rust/20" : ""}`}
        {...rest}
      />
      {error && <span id={errId} className="text-sm text-rust">{error}</span>}
    </div>
  );
}
