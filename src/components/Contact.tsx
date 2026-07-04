"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Reveal from "./Reveal";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "We couldn’t send your message right now.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We’ll get back to you soon.",
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm text-cyan mb-3">{"// start here"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Let&apos;s build something valuable together.
          </h2>
          <p className="text-lavender-dim mt-4 max-w-xl mx-auto">
            Share your goals, timeline, and challenges, and we&apos;ll recommend the right technology approach for your business.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-10 glass-panel rounded-2xl p-8 grid gap-5 text-left">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs text-lavender-dim">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="mt-2 w-full bg-ink/3 border border-ink/10 rounded-lg px-4 py-3 outline-none focus:border-cyan/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-lavender-dim">Email</label>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="mt-2 w-full bg-ink/3 border border-ink/10 rounded-lg px-4 py-3 outline-none focus:border-cyan/60 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-lavender-dim">Project details</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full bg-ink/3 border border-ink/10 rounded-lg px-4 py-3 outline-none focus:border-cyan/60 transition-colors"
                placeholder="Tell us about your idea, current challenge, or the system you want to improve."
              />
            </div>
            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-cyan" : "text-coral"
                }`}
              >
                {status.message}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="justify-self-start px-6 py-3 rounded-full bg-ink text-white font-semibold hover:opacity-85 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
