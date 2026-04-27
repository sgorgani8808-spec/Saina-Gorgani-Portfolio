import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from "lucide-react";

const cardAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const iconPop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, delay, ease: [0.34, 1.56, 0.64, 1] },
});

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Hero card — large, spans 2 cols */}
          <motion.div
            {...cardAnim(0)}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden"
          >
            {/* subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }} />
            <div>
              <motion.div {...fadeIn(0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                San Francisco, CA — Open to work
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
                <motion.span {...fadeUp(0.18)} className="block">Crafting Digital</motion.span>
                <motion.span {...fadeUp(0.26)} className="block">Experiences That</motion.span>
                <motion.span {...fadeUp(0.34)} className="block text-primary">Feel Intentional</motion.span>
              </h1>
            </div>
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-3 mt-8">
              <a href="mailto:sainagor@gmail.com" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
                <motion.span {...iconPop(0.52)}><Mail className="w-3.5 h-3.5" /></motion.span> Get in touch
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                View my work <motion.span {...iconPop(0.58)}><ArrowUpRight className="w-3.5 h-3.5" /></motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* About blurb card */}
          <motion.div {...cardAnim(0.08)} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4">
            <motion.span {...fadeIn(0.15)} className="text-xs font-mono text-muted-foreground uppercase tracking-wider">About</motion.span>
            <motion.p {...fadeUp(0.22)} className="text-foreground/80 leading-relaxed text-sm flex-1">
              Hi, I'm Saina. I design at the intersection of space, story, and systems. With a background in architecture, I think in relationships — how elements connect and how experiences unfold.
            </motion.p>
            <motion.a {...fadeUp(0.3)} href="#about" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border border-border rounded-full px-4 py-2 hover:border-foreground/30 transition-colors self-start">
              Read more <ExternalLink className="w-3 h-3" />
            </motion.a>
          </motion.div>

          {/* Stats card */}
          <motion.div {...cardAnim(0.12)} className="bg-primary rounded-2xl p-7 flex flex-col justify-between text-primary-foreground">
            <motion.span {...fadeIn(0.2)} className="text-xs font-mono uppercase tracking-wider opacity-70">GitHub</motion.span>
            <div className="mt-4 space-y-4">
              <motion.div {...fadeUp(0.28)}>
                <p className="text-5xl font-bold">239<span className="text-2xl">+</span></p>
                <p className="text-sm opacity-70 mt-1">Contributions</p>
              </motion.div>
              <motion.div {...fadeUp(0.36)}>
                <p className="text-4xl font-bold">88</p>
                <p className="text-sm opacity-70 mt-1">Repositories</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Expertise card */}
          <motion.div {...cardAnim(0.16)} className="bg-card border border-border rounded-2xl p-7">
            <motion.span {...fadeIn(0.24)} className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-5 block">Expertise</motion.span>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "UI/UX Design", "MongoDB", "Architecture", "Figma", "REST APIs"].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                  className="px-3 py-1.5 border border-border rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Social links card */}
          <motion.div {...cardAnim(0.2)} className="bg-secondary/60 border border-border rounded-2xl p-7 flex flex-col gap-3">
            <motion.span {...fadeIn(0.28)} className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Connect</motion.span>
            {[
              { href: "mailto:sainagor@gmail.com", icon: <Mail className="w-4 h-4 text-primary" />, label: "Email", external: false },
              { href: "https://github.com/sgorgani8808-spec", icon: <Github className="w-4 h-4 text-primary" />, label: "GitHub", external: true },
              { href: "https://www.linkedin.com/in/sainagorgani/", icon: <Linkedin className="w-4 h-4 text-primary" />, label: "LinkedIn", external: true },
            ].map(({ href, icon, label, external }, i) => (
              <motion.a
                key={label}
                {...fadeUp(0.34 + i * 0.08)}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between group px-4 py-3 bg-card border border-border rounded-xl hover:border-foreground/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <motion.span {...iconPop(0.4 + i * 0.08)}>{icon}</motion.span>
                  <span className="text-sm text-foreground">{label}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}