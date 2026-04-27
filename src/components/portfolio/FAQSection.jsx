import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What does your design process look like?", answer: "I start with a discovery phase — understanding your goals, audience, and constraints. From there I move into structure and flow, then visual design, and finally development. Every step is iterative and collaborative." },
  { question: "How do you blend architecture with software development?", answer: "Architecture trained me to think in systems — how parts relate, how people move through space, how experiences unfold over time. I apply that same thinking to digital products: every component has a reason, every interaction has a rhythm." },
  { question: "Do you work with clients remotely?", answer: "Yes, fully. I work with clients across time zones using async communication and regular video check-ins. Remote collaboration is a core part of my workflow." },
  { question: "What types of projects do you take on?", answer: "I work on web apps, portfolio sites, product dashboards, and full-stack builds. I'm especially drawn to projects that sit at the intersection of design and complexity." },
  { question: "How long does a typical project take?", answer: "It depends on scope. A focused landing page or portfolio might take 1–2 weeks. A full-stack product with custom features can range from 4–12 weeks. I always scope clearly upfront so there are no surprises." },
  { question: "Can I see your work before we start?", answer: "Absolutely — that's what the Projects and Gallery sections are for. You're also welcome to reach out directly and I can walk you through specific case studies relevant to your needs." },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b border-border last:border-none"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{faq.question}</span>
        {open ? <Minus className="w-4 h-4 text-primary shrink-0" /> : <Plus className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-5 pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-7 sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">06 — FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Common questions</h2>
          </motion.div>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}