"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";

const items = [
  { src: g1.src, label: "Snacks aisle", span: "md:col-span-2 md:row-span-2" },
  { src: g6.src, label: "Fresh produce", span: "" },
  { src: g2.src, label: "Beverages & dairy", span: "" },
  { src: g4.src, label: "Packaged foods", span: "" },
  { src: g5.src, label: "Wholesale stock", span: "md:col-span-2" },
  { src: g3.src, label: "Friendly billing counter", span: "" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setDirection(1);
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setDirection(-1);
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  // Variants for sliding transition in lightbox
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

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
              onClick={() => {
                setDirection(0);
                setActiveIndex(i);
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl ${it.span} shadow-soft hover:shadow-elevated cursor-pointer`}
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
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 grid place-items-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:rotate-90 z-110 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Wrapper */}
            <div className="relative w-full max-w-4xl flex items-center justify-between gap-4 px-2 md:px-12 select-none" onClick={(e) => e.stopPropagation()}>
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="grid place-items-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 text-white backdrop-blur-md border border-white/10 hover:border-white/30 transition-all shrink-0 z-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Content Carousel */}
              <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden h-[60vh] md:h-[75vh]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <img
                      src={items[activeIndex].src}
                      alt={items[activeIndex].label}
                      className="max-w-full max-h-[85%] rounded-2xl shadow-elevated object-contain"
                    />
                    <div className="text-white mt-4 text-center">
                      <div className="text-lg font-bold tracking-wide">{items[activeIndex].label}</div>
                      <div className="text-xs text-white/60 mt-1">
                        {activeIndex + 1} / {items.length}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="grid place-items-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 text-white backdrop-blur-md border border-white/10 hover:border-white/30 transition-all shrink-0 z-110 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
