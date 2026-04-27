import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Main about */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 block">01 — About</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
              Designing at the intersection of
              <span className="text-muted-foreground"> architecture & code.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I design at the intersection of space, story, and systems. With a background in architecture, I think in relationships — how elements connect, how people move, and how experiences unfold.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, as a full-stack developer, I apply that same mindset to digital products, shaping both the interface and the structure behind it.
            </p>
          </motion.div>

          {/* Right col */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card border border-border rounded-2xl p-8 flex-1"
            >
              <p className="text-muted-foreground leading-relaxed">
                My work is rooted in curation and narrative — creating layered experiences where users explore, discover, and build meaning, much like moving through space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <p className="text-4xl font-bold">239<span className="text-xl">+</span></p>
                <p className="text-sm opacity-70 mt-2">GitHub Contributions</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-4xl font-bold text-foreground">88</p>
                <p className="text-sm text-muted-foreground mt-2">Repositories</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}