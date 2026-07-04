import Reveal from "./Reveal";

const steps = [
  {
    phase: "Discover",
    detail:
      "We start by understanding your goals, team, and existing systems so the solution fits your real-world needs.",
  },
  {
    phase: "Build",
    detail:
      "We design and develop the product in clear phases with regular updates, testing, and practical feedback loops.",
  },
  {
    phase: "Launch & support",
    detail:
      "We help you deploy, refine, and maintain the system so it continues to perform as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="work" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-cyan mb-3">{"// how we work"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">
            A clear, collaborative approach from idea to launch.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.phase} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-cyan mb-6 shadow-[0_0_16px_rgba(14,164,114,0.5)]" />
                  <h3 className="font-display text-xl font-semibold">{s.phase}</h3>
                  <p className="text-lavender-dim mt-3 leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
