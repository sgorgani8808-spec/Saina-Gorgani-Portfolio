import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(form);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-2xl p-8 sm:p-12"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">07 — Contact</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Get in touch</h2>
          <p className="text-muted-foreground mb-8 text-sm">Have a project in mind? Send me a message and I'll get back to you.</p>

          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle className="w-10 h-10 text-primary" />
              <h3 className="text-lg font-semibold">Message sent!</h3>
              <p className="text-muted-foreground text-sm">Thanks for reaching out — I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-mono uppercase tracking-wider">Name</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-mono uppercase tracking-wider">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-muted-foreground mb-1.5 font-mono uppercase tracking-wider">Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit" disabled={loading}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : (<><Send className="w-3.5 h-3.5" /> Send message</>)}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}