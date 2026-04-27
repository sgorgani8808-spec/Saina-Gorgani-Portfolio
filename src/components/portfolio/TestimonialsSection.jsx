import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Saina has a rare ability to bridge the gap between design thinking and technical execution. Our product felt intentional from every angle.",
    name: "Marcus Lin",
    title: "Founder, Verdant Studio",
  },
  {
    quote: "Working with Saina felt like having an architect and developer in one. The attention to spatial flow in our digital product was unlike anything we'd seen.",
    name: "Priya Mehta",
    title: "Creative Director, Atelier M",
  },
  {
    quote: "She delivered a clean, fast, and beautifully structured app. Every decision had a reason behind it — no bloat, just precision.",
    name: "James Okafor",
    title: "CTO, Luminary Labs",
  },
  {
    quote: "Saina's architectural background really shows in her code. The systems she builds are elegant and maintainable. We keep coming back.",
    name: "Sofia Reyes",
    title: "Product Lead, Haiku Digital",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-4"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">04 — Testimonials</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What clients say</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5"
            >
              <Quote className="w-5 h-5 text-primary shrink-0" />
              <p className="text-muted-foreground leading-relaxed flex-1 text-sm">"{t.quote}"</p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}