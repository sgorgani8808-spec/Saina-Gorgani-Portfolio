import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(email);

    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1000);
  };

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-primary rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-primary-foreground">
            <h3 className="text-xl font-bold mb-1">Stay in the loop</h3>
            <p className="text-primary-foreground/70 text-sm">Follow my work and get updates on new projects.</p>
          </div>
          {done ? (
            <div className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">You're in — thanks!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 sm:w-64 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors"
              />
              <button
                type="submit" disabled={loading}
                className="bg-primary-foreground text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "..." : "Follow"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}