"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-premium ${
          scrolled ? "py-3 bg-paper/70 backdrop-blur-xl border-b border-black/5" : "py-5 border-b border-transparent"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link href="/" className="text-xl font-semibold tracking-tightest flex items-center gap-1 relative z-[70]">
            DevStudio<span className="w-2 h-2 rounded-full bg-purple inline-block mt-2" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3.5 py-2 rounded-full transition-colors duration-300 ${
                  isActive(item.href) ? "text-ink bg-card" : "text-muted hover:text-ink hover:bg-card"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold hover:text-purple transition-colors">
              Login
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold bg-purple text-white px-4 py-2 rounded-full hover:bg-purple-dark hover:-translate-y-0.5 transition-all duration-300 ease-premium"
            >
              Get Free Consultation
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-[70]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`w-6 h-0.5 bg-ink rounded transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`w-6 h-0.5 bg-ink rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-ink rounded transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer — rendered OUTSIDE the header so backdrop-blur can't clip it */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-paper flex flex-col items-start justify-center gap-1 px-8 transition-transform duration-500 ease-premium ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`text-4xl font-semibold tracking-tightest py-2 ${isActive(item.href) ? "text-purple" : "text-ink"}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/login" onClick={() => setOpen(false)} className="text-4xl font-semibold tracking-tightest py-2 text-ink">
          Login
        </Link>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-5 bg-purple text-white px-7 py-3.5 rounded-full font-semibold text-lg"
        >
          Get Free Consultation
        </Link>
      </div>
    </>
  );
}
