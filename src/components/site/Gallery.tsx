import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, label: "Snacks aisle", span: "md:col-span-2 md:row-span-2" },
  { src: g6, label: "Fresh produce", span: "" },
  { src: g2, label: "Beverages & dairy", span: "" },
  { src: g4, label: "Packaged foods", span: "" },
  { src: g5, label: "Wholesale stock", span: "md:col-span-2" },
  { src: g3, label: "Friendly billing counter", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass-light dark:glass text-foreground px-4 py-2 rounded-full text-xs font-bold mb-5 border border-primary/10">
            Inside the store
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            A glimpse of <span className="text-primary dark:text-primary underline decoration-accent/30 decoration-4 underline-offset-4 tracking-tight">SUKH MURTI MART</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(it.src)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl ${it.span} shadow-soft hover:shadow-elevated`}
            >
              <img src={it.src} alt={it.label} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-100" />
              <div className="absolute bottom-4 left-4 text-left text-white">
                <div className="text-sm font-bold tracking-wide drop-shadow-lg">{it.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-100 grid place-items-center bg-black/85 backdrop-blur p-6"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 grid place-items-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:rotate-90 z-110"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={open} alt="Preview"
              className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-elevated"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
