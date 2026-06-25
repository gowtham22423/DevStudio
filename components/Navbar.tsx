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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-premium ${
        scrolled ? "py-3 bg-paper/70 backdrop-blur-xl border-b border-black/5" : "py-5 border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between gap-6">
        <Link href="/" className="text-xl font-semibold tracking-tightest flex items-center gap-1">
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
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-paper z-40 flex flex-col items-start justify-center gap-2 px-8 transition-transform duration-500 ease-premium ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`text-3xl font-semibold tracking-tightest py-2 ${isActive(item.href) ? "text-purple" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/login" onClick={() => setOpen(false)} className="text-3xl font-semibold tracking-tightest py-2">
          Login
        </Link>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-purple text-white px-6 py-3 rounded-full font-semibold"
        >
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
