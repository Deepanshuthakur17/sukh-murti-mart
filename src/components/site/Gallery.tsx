"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid, LayoutGrid, Layers, ChevronDown } from "lucide-react";

const categories = [
  { id: "all", label: "All Photos", icon: Layers },
  { id: "store", label: "Aisles & Counter", icon: LayoutGrid },
  { id: "groceries", label: "Daily Groceries", icon: Grid },
  { id: "snacks", label: "Snacks & Drinks", icon: Grid },
  { id: "household", label: "Household Needs", icon: Grid },
  { id: "wholesale", label: "Wholesale Stock", icon: Grid },
];

const items = [
  { src: "/9632714_store_images_1.jpg", label: "Store Front & Signage", category: "store" },
  { src: "/9632714_store_images_14.jpg", label: "Main Entrance View", category: "store" },
  { src: "/9632714_store_images_3.jpg", label: "Store Main Aisle", category: "store" },
  { src: "/9632714_store_images_4.jpg", label: "Freshly Stocked Racks", category: "store" },
  { src: "/9632714_store_images_25.jpg", label: "Spacious Walkway", category: "store" },
  { src: "/9632714_store_images_29.jpg", label: "Organized Store Aisle", category: "store" },
  { src: "/9632714_store_images_46.jpg", label: "Product Shelves", category: "store" },
  { src: "/9632714_store_images_16.jpg", label: "Friendly Checkout Counter", category: "store" },
  { src: "/9632714_store_images_44.jpg", label: "Billing & Customer Support", category: "store" },

  { src: "/9632714_store_images_9.jpg", label: "Spices & Masala Section", category: "groceries" },
  { src: "/9632714_store_images_12.jpg", label: "Premium Ghee & Oils", category: "groceries" },
  { src: "/9632714_store_images_17.jpg", label: "Dry Fruits & Premium Packets", category: "groceries" },
  { src: "/9632714_store_images_11.jpg", label: "Packaged Cooking Ingredients", category: "groceries" },
  { src: "/9632714_store_images_24.jpg", label: "Jams, Sauces & Spreads", category: "groceries" },
  { src: "/9632714_store_images_30.jpg", label: "Breakfast Cereals & Oats", category: "groceries" },

  { src: "/9632714_store_images_5.jpg", label: "Snacks & Namkeen Racks", category: "snacks" },
  { src: "/9632714_store_images_6.jpg", label: "Beverages & Chilled Drinks", category: "snacks" },
  { src: "/9632714_store_images_10.jpg", label: "Biscuits & Cookies Shelf", category: "snacks" },
  { src: "/9632714_store_images_18.jpg", label: "Chocolates & Confectionery", category: "snacks" },
  { src: "/9632714_store_images_23.jpg", label: "Tea & Coffee Racks", category: "snacks" },
  { src: "/9632714_store_images_47.jpg", label: "Cold Drinks Refrigerator", category: "snacks" },
  { src: "/9632714_store_images_19.jpg", label: "Instant Noodles & Pasta", category: "snacks" },
  { src: "/9632714_store_images_50.jpg", label: "Packaged Foods & Dairy", category: "snacks" },

  { src: "/9632714_store_images_7.jpg", label: "Soaps & Body Wash Section", category: "household" },
  { src: "/9632714_store_images_8.jpg", label: "Laundry Care & Detergents", category: "household" },
  { src: "/9632714_store_images_13.jpg", label: "Cleaning Accessories", category: "household" },
  { src: "/9632714_store_images_21.jpg", label: "Personal Hygiene & Care", category: "household" },

  { src: "/9632714_store_images_15.jpg", label: "Wholesale Flour & Atta Bags", category: "wholesale" },
  { src: "/9632714_store_images_22.jpg", label: "Bulk Stock of Grains & Dals", category: "wholesale" },
  { src: "/9632714_store_images_45.jpg", label: "Bulk Pack Commodities", category: "wholesale" },
  { src: "/9632714_store_images_43.jpg", label: "Store Special Bulk Stock", category: "wholesale" }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  // Filter items based on active category
  const filteredItems = activeCategory === "all"
    ? items
    : items.filter(it => it.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setDirection(1);
    setActiveIndex((activeIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setDirection(-1);
    setActiveIndex((activeIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredItems.length));
  };

  // Reset visible count when category changes
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(8);
  };

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
          <p className="text-muted-foreground mt-4">
            Browse through real pictures of our neatly organized aisles, well-stocked sections, and extensive product selection.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "glass-light dark:glass hover:bg-muted/80 text-foreground/80 hover:text-foreground border-border/50"
                  }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Images Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((it, i) => {
              // Find the index of this item in the filteredItems array for lightbox navigation
              const originalIndex = filteredItems.findIndex(f => f.src === it.src);
              return (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={it.src}
                  onClick={() => {
                    setDirection(0);
                    setActiveIndex(originalIndex);
                  }}
                  className="group relative overflow-hidden rounded-3xl h-[160px] md:h-[220px] shadow-soft hover:shadow-elevated cursor-pointer"
                >
                  <img
                    src={it.src}
                    alt={it.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <div className="text-xs md:text-sm font-bold tracking-wide drop-shadow-md truncate">{it.label}</div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-6 py-3.5 rounded-full font-semibold shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Load More Photos</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && filteredItems[activeIndex] && (
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
                      src={filteredItems[activeIndex].src}
                      alt={filteredItems[activeIndex].label}
                      className="max-w-full max-h-[85%] rounded-2xl shadow-elevated object-contain"
                    />
                    <div className="text-white mt-4 text-center">
                      <div className="text-lg font-bold tracking-wide">{filteredItems[activeIndex].label}</div>
                      <div className="text-xs text-white/60 mt-1">
                        {activeIndex + 1} / {filteredItems.length}
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

