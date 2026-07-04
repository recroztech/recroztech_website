import Reveal from "./Reveal";

const services = [
  {
    tag: "<Software/>",
    title: "Custom software development",
    desc: "Bespoke web and desktop solutions for CRM, operations, internal tools, and business workflows that need to work reliably every day.",
    accent: "coral",
  },
  {
    tag: "<Web/>",
    title: "Web & mobile applications",
    desc: "Responsive websites, portals, dashboards, and mobile apps designed for usability, performance, and a smooth customer experience.",
    accent: "cyan",
  },
  {
    tag: "<Cloud/>",
    title: "Cloud & DevOps",
    desc: "Deployment automation, cloud hosting, monitoring, and support so your systems stay secure, available, and easy to scale.",
    accent: "cyan-2",
  },
  {
    tag: "<Support/>",
    title: "IT consulting & support",
    desc: "Technical guidance, modernization planning, and ongoing support to keep your technology aligned with your business goals.",
    accent: "coral",
  },
];

const accentMap: Record<string, string> = {
  coral: "text-coral border-coral/30",
  cyan: "text-cyan border-cyan/30",
  "cyan-2": "text-cyan-2 border-cyan-2/30",
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-cyan mb-3">{"// what we do"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">
            Practical technology solutions for modern businesses.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group glass-panel rounded-2xl p-8 h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-24px_rgba(14,164,114,0.22)]">
                <span
                  className={`inline-block font-mono text-xs px-2.5 py-1 rounded-full border ${accentMap[s.accent]}`}
                >
                  {s.tag}
                </span>
                <h3 className="font-display text-xl font-semibold mt-5">{s.title}</h3>
                <p className="text-lavender-dim mt-3 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
