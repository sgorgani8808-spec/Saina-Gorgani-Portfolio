import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/img/image1.png", alt: "ARCH-IVE" },
  { src: "/img/image2.png", alt: "SPLASH" },
  { src: "/img/image3.png", alt: "ARCH-IVE Backend" },
  { src: "/img/image4.png", alt: "Inventory List" },
  { src: "/img/image5.png", alt: "Shopping Cart" },
  { src: "/img/image6.png", alt: "Architectural Designs" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  const prev = () => setSelected((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setSelected((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setSelected(null);
  };

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
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 block">05 — Gallery</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Visual Work</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-card border border-border"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-white">{img.alt}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelected(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <button onClick={() => setSelected(null)} className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-5 text-white/70 hover:text-white transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full px-16"
            >
              <img src={images[selected].src} alt={images[selected].alt} className="w-full rounded-2xl shadow-2xl" />
              <p className="text-center text-white/70 text-sm mt-4">{images[selected].alt}</p>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-5 text-white/70 hover:text-white transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}