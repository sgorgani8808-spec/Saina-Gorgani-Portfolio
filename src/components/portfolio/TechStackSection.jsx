import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Frontend", skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", skills: ["Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL"] },
  { name: "Tools & Platforms", skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Docker"] },
  { name: "Architecture & Design", skills: ["Rhino", "AutoCAD", "SketchUp", "Adobe Suite", "3D Modeling", "UI/UX Design"] },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4"
        >
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">03 — Tech Stack</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Tools & Technologies</h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}