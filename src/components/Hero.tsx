"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CyclingWord from "./CyclingWord";

const StackScene = dynamic(() => import("./StackScene"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-cyan mb-5 tracking-wide"
          >
            {"<Recroz Tech />"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-[3.6rem] font-semibold leading-[1.05] tracking-tight"
          >
            We build <CyclingWord words={["custom software", "cloud platforms", "business automation", "digital products"]} />
            <br />
            that help teams grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-lavender-dim max-w-lg"
          >
            Recroz Tech delivers reliable web, mobile, and cloud solutions for startups and growing businesses that want faster operations, better customer experience, and future-ready technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-ink text-white font-semibold hover:opacity-85 transition-opacity"
            >
              Book a free consultation
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-ink/15 text-lavender hover:border-coral/50 hover:text-coral transition-colors"
            >
              Explore services
            </a>
          </motion.div>

          <div className="mt-12 flex items-center gap-6 font-mono text-xs text-lavender-dim/70">
            <span>Software Development</span>
            <span className="h-1 w-1 rounded-full bg-lavender-dim/40" />
            <span>Cloud & DevOps</span>
            <span className="h-1 w-1 rounded-full bg-lavender-dim/40" />
            <span>Web & Mobile</span>
          </div>
        </div>

        <div className="relative h-105 md:h-130">
          <StackScene />
        </div>
      </div>
    </section>
  );
}
