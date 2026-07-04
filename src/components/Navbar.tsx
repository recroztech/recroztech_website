"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work-portfolio", label: "Solutions" },
  { href: "/#work", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 16;
      setScrolled((current) => (current === isScrolled ? current : isScrolled));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display font-semibold text-lg tracking-tight text-lavender">
          Recroz<span className="text-coral"> Tech</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-lavender-dim">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-cyan transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-ink text-white hover:opacity-85 transition-opacity"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
