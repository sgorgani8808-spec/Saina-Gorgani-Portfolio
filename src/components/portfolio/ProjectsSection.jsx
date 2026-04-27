import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  ArchiveIllustration,
  SplashIllustration,
  BackendIllustration,
  InventoryIllustration,
  ShoppingCartIllustration,
  ArchitectureIllustration,
} from "./ProjectIllustrations";

const projects = [
  {
    title: "ARCH-IVE",
    description: "A curated archival collection platform built with React and SCSS. Features dark/light mode toggle, multi-image material browsing, filterable object catalog, and a PWA service worker for offline support.",
    Illustration: ArchiveIllustration,
    tags: ["React", "SCSS", "PWA", "JavaScript"],
    github: "https://github.com/sgorgani8808-spec/WEB603---Project-3",
    live: "https://web-603-project-3.vercel.app/",
    featured: true,
  },
  {
    title: "SPLASH",
    description: "A responsive multi-page website built with pure HTML & CSS. Includes home, about, gallery, services, stories, contact, FAQ, and privacy pages.",
    Illustration: SplashIllustration,
    tags: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/sgorgani8808-spec/project-1",
    live: null,
  },
  {
    title: "ARCH-IVE Backend",
    description: "Full-stack MVC web application built with Node.js, Express, and Vue.js. Features server-side rendering, RESTful routing, MongoDB models, and authentication middleware.",
    Illustration: BackendIllustration,
    tags: ["Node.js", "Express", "Vue.js", "MongoDB"],
    github: "https://github.com/sgorgani8808-spec/WEB-602",
    live: null,
  },
  {
    title: "Inventory List",
    description: "A full-stack inventory management app with React frontend and Node.js + MongoDB backend. Supports full CRUD operations with a clean component-based UI.",
    Illustration: InventoryIllustration,
    tags: ["React", "Node.js", "MongoDB", "CRUD"],
    github: "https://github.com/sgorgani8808-spec/WEB603-W5-D2-HMW",
    live: null,
  },
  {
    title: "Shopping Cart",
    description: "A React shopping cart featuring a product grid, add-to-cart functionality, cart sidebar with item quantities and running totals.",
    Illustration: ShoppingCartIllustration,
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/sgorgani8808-spec/WEB603-W4-D3-LAB",
    live: null,
  },
  {
    title: "Architectural Designs",
    description: "A curated collection of architectural portfolios on Issuu — showcasing spatial design, narrative, and systems thinking across graduate and undergraduate work.",
    Illustration: ArchitectureIllustration,
    tags: ["Architecture", "Portfolio", "M.Arch"],
    github: null,
    live: "https://issuu.com/sainagorgani",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-4"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">02 — Projects</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Work</h2>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-2xl overflow-hidden mb-4 group"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden bg-card">
              {(() => { const I = projects[0].Illustration; return <I />; })()}
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary border border-border rounded-full text-xs text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[0].description}</p>
              </div>
              <div className="flex gap-3 mt-6">
                {projects[0].live && (
                  <a href={projects[0].live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 rounded-full text-xs font-medium hover:opacity-80 transition-opacity">
                    <ExternalLink className="w-3 h-3" /> Live site
                  </a>
                )}
                {projects[0].github && (
                  <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-border px-4 py-2 rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                    <Github className="w-3 h-3" /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of remaining projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card border border-border rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-card">
                {(() => { const I = project.Illustration; return <I />; })()}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-secondary border border-border rounded-full text-xs text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-foreground border border-border rounded-full px-3 py-1.5 hover:border-foreground/30 transition-all">
                      <ExternalLink className="w-3 h-3" /> Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 hover:text-foreground hover:border-foreground/30 transition-all">
                      <Github className="w-3 h-3" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}