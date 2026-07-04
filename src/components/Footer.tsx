import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/8 mt-10">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-panel/60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-semibold text-lg">
            Recroz<span className="text-coral"> Tech</span>
          </p>
          <p className="text-lavender-dim text-sm mt-4 leading-relaxed">
            Reliable IT services and custom software solutions for modern businesses that want to grow with confidence.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-cyan mb-4">Services</p>
          <ul className="space-y-2 text-sm text-lavender-dim">
            <li>Custom software development</li>
            <li>Web &amp; mobile applications</li>
            <li>Cloud &amp; DevOps support</li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-cyan mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-lavender-dim">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-lavender-dim/70" /> hello@recroztech.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-lavender-dim/70" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lavender-dim/70" /> Bengaluru, India
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-ink/8 py-6 text-center text-xs text-lavender-dim/60 font-mono">
        © {new Date().getFullYear()} Recroz Tech. All rights reserved.
      </div>
    </footer>
  );
}
