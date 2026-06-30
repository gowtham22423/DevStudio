"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { nav, CTA_LABEL } from "@/lib/content";
import Button from "./Button";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Scroll state via Framer Motion (no raw window scroll listener).
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  // Lock body scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Focus management + trap + Esc while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const node = drawerRef.current;
    if (!node) return;
    const focusables = node.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-premium ${
          scrolled
            ? "py-3 bg-paper/80 backdrop-blur-xl border-b border-ink/8"
            : "py-4 border-b border-transparent"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 relative z-[70]"
            aria-label="DevStudio home"
          >
            <span className="w-2.5 h-2.5 rounded-[3px] bg-accent" />
            <span className="text-[19px] font-semibold tracking-tight2">DevStudio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-[15px] px-3.5 py-2 rounded-md transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-ink bg-ink/[0.06]"
                    : "text-ink-500 hover:text-ink hover:bg-ink/[0.04]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="text-[15px] font-medium text-ink-500 hover:text-ink transition-colors px-3 py-2"
            >
              Sign in
            </Link>
            <Button href="/contact" size="sm">
              {CTA_LABEL}
            </Button>
          </div>

          <button
            ref={toggleRef}
            className="md:hidden grid place-items-center w-11 h-11 -mr-2 relative z-[70] text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "X" : "List"} size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`md:hidden fixed inset-0 z-[60] bg-paper flex flex-col px-7 pt-24 pb-10 transition-transform duration-400 ease-premium ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-3xl font-semibold tracking-tight2 py-2.5 border-b border-ink/8 ${
                isActive(item.href) ? "text-accent-deep" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-3xl font-semibold tracking-tight2 py-2.5 border-b border-ink/8 text-ink"
          >
            Sign in
          </Link>
        </nav>
        <Button href="/contact" size="lg" icon className="mt-8 w-full">
          {CTA_LABEL}
        </Button>
      </div>
    </>
  );
}
