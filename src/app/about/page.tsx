import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  {
    title: "Reliable delivery",
    description: "We build practical software and IT solutions that are dependable, secure, and easy to maintain.",
  },
  {
    title: "Business-first thinking",
    description: "Every engagement is shaped around your goals, workflow, and growth plans—not just technical requirements.",
  },
  {
    title: "End-to-end support",
    description: "From discovery and development to deployment and ongoing support, we stay involved as your technology partner.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen pt-28 pb-20">
          <section className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-sm text-cyan mb-3">{"// about Recroz Tech"}</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              We help businesses turn ideas into dependable technology.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-lavender-dim leading-relaxed">
              Recroz Tech is a modern IT services company focused on custom software, web and mobile applications, and cloud support. We work with growing businesses that need thoughtful technology solutions built for real-world use.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="glass-panel rounded-2xl p-7">
                  <h2 className="font-display text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-lavender-dim leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="glass-panel rounded-2xl p-8">
              <h2 className="font-display text-2xl font-semibold">What we do</h2>
              <ul className="mt-5 space-y-3 text-lavender-dim leading-relaxed">
                <li>• Custom software development for internal tools, client portals, and operational workflows.</li>
                <li>• Web and mobile application design and development with user-friendly interfaces.</li>
                <li>• Cloud deployment, DevOps support, and reliable infrastructure guidance.</li>
                <li>• Strategic consulting to help businesses modernize and scale with confidence.</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8">
              <h2 className="font-display text-2xl font-semibold">Why clients choose us</h2>
              <p className="mt-5 text-lavender-dim leading-relaxed">
                We combine technical skill with clear communication and a practical approach. Our goal is to build solutions that are not only impressive on paper, but useful every day for your team and customers.
              </p>
              <Link href="/#contact" className="inline-flex mt-6 text-cyan font-semibold hover:text-coral transition-colors">
                Start a conversation →
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
