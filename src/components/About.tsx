import Reveal from "./Reveal";

const stats = [
  { value: "End-to-end", label: "strategy, development, and support from one trusted team" },
  { value: "Secure", label: "modern architecture with clean code and reliable delivery" },
  { value: "Scalable", label: "solutions built to grow as your business evolves" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="font-mono text-sm text-cyan mb-3">{"// why Recroz Tech"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            We combine technical expertise with practical business understanding.
          </h2>
          <p className="text-lavender-dim mt-5 leading-relaxed">
            Whether you need a new product, a better customer experience, or a more reliable internal system, we help turn your goals into dependable technology. Our focus is simple: build solutions that are useful, maintainable, and ready for growth.
          </p>
        </Reveal>

        <div className="grid gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass-panel rounded-2xl p-6 flex items-center gap-5">
                <span className="font-display text-2xl md:text-3xl font-semibold text-gradient">{s.value}</span>
                <span className="text-lavender-dim">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
