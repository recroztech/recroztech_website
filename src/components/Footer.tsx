"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-semibold text-lg">
            Recroz<span className="text-coral"> Tech</span>
          </p>
          <p className="text-white/70 text-sm mt-4 leading-relaxed">
            Reliable IT services and custom software solutions for modern businesses that want to grow with confidence.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-cyan mb-4">Services</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/#services" className="hover:text-cyan transition-colors">
                Custom software development
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-cyan transition-colors">
                Web &amp; mobile applications
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-cyan transition-colors">
                Cloud &amp; DevOps support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-cyan mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan" /> recroztech@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan" /> +91 78881 22270
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan" /> Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 px-6 text-center text-xs text-white/60 font-mono">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
          <Link href="/about" className="hover:text-cyan transition-colors">
            About
          </Link>
          <Link href="/privacy-policy" className="hover:text-cyan transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-cyan transition-colors">
            Terms & Conditions
          </Link>
        </div>
        © {new Date().getFullYear()} Recroz Tech. All rights reserved.
      </div>
    </footer>
  );
}
