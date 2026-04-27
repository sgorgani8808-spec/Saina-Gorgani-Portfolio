import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-foreground tracking-tight">SAINA GORGANI</p>
            <p className="text-sm text-muted-foreground mt-0.5">Full-Stack Developer & Architect</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:sainagor@gmail.com" className="p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/sgorgani8808-spec" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sainagorgani/" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Saina Gorgani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}