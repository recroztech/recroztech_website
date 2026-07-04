"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work-portfolio", label: "Solutions" },
  { href: "#work", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-lavender">
          Recroz<span className="text-coral"> Tech</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-lavender-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-cyan transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-ink text-white hover:opacity-85 transition-opacity"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
