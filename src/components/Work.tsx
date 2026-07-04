"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Workflow Automation Hub",
    category: "Operations & productivity",
    problem:
      "A growing team was spending too much time on manual approvals, task handoffs, and repetitive reporting.",
    solution:
      "We built a centralized platform with role-based workflows, automated alerts, and real-time dashboards to reduce delays and bring visibility to every process.",
    stack: ["Next.js", "Node.js", "Cloud"],
    metric: { value: "70%", label: "less manual effort" },
    glow: "coral",
  },
  {
    name: "Customer Portal",
    category: "Digital experience",
    problem:
      "Clients needed a simpler way to access services, submit requests, and track progress without relying on email threads.",
    solution:
      "We delivered a secure portal with account access, request tracking, and integrated communication so support becomes faster and more transparent.",
    stack: ["React", "API Integration", "Security"],
    metric: { value: "24/7", label: "client visibility" },
    glow: "cyan-2",
  },
  {
    name: "Reporting & Insights Suite",
    category: "Business intelligence",
    problem:
      "Leaders needed accurate reporting from scattered systems to make better decisions quickly.",
    solution:
      "We connected the data sources into a unified reporting experience with dashboards, scheduled reports, and clear insights for everyday use.",
    stack: ["Analytics", "Cloud", "Dashboard"],
    metric: { value: "Real-time", label: "decision support" },
    glow: "cyan",
  },
];

const glowMap: Record<string, string> = {
  coral: "group-hover:shadow-[0_24px_60px_-24px_rgba(91,76,240,0.28)] group-hover:border-coral/40",
  cyan: "group-hover:shadow-[0_24px_60px_-24px_rgba(14,164,114,0.25)] group-hover:border-cyan/40",
  "cyan-2": "group-hover:shadow-[0_24px_60px_-24px_rgba(244,63,94,0.28)] group-hover:border-cyan-2/40",
};

const tagGlow: Record<string, string> = {
  coral: "text-coral border-coral/30",
  cyan: "text-cyan border-cyan/30",
  "cyan-2": "text-cyan-2 border-cyan-2/30",
};

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work-portfolio" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-coral mb-3">{"// solutions"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">
            Focused solutions built for daily business impact.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`group relative glass-panel rounded-2xl p-8 md:p-10 border border-ink/8 transition-all duration-500 ${glowMap[p.glow]}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-ink/15 text-lavender-dim">
                        {p.category}
                      </span>
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className={`font-mono text-xs px-2.5 py-1 rounded-full border ${tagGlow[p.glow]}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-semibold mt-5">
                      {p.name}
                    </h3>

                    <p className="text-lavender-dim mt-4 leading-relaxed max-w-2xl">
                      <span className="text-lavender">Challenge: </span>
                      {p.problem}
                    </p>
                    <p className="text-lavender-dim mt-3 leading-relaxed max-w-2xl">
                      <span className="text-lavender">Approach: </span>
                      {p.solution}
                    </p>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 md:text-right shrink-0">
                    <span className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                      {p.metric.value}
                    </span>
                    <span className="text-xs text-lavender-dim font-mono max-w-[14ch]">
                      {p.metric.label}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-8 right-8 md:left-10 md:right-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
