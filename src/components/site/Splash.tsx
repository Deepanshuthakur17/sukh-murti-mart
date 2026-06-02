"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scrolling during splash
    document.body.style.overflow = "hidden";

    // Simulate progress bar loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    // Hide splash after loading is complete
    const timeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#072415] dark:bg-[#030d08] text-white"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0F7A45]/20 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FF9F1A]/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{
                scale: { duration: 0.8, ease: "easeOut" },
                opacity: { duration: 0.8 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-28 h-28 md:w-32 md:h-32 mb-6 rounded-3xl bg-white/5 p-4 backdrop-blur-md border border-white/10 shadow-glow grid place-items-center"
            >
              <img
                src="/logo-sm-mart.png"
                alt="Sukh Murti Mart Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-yellow-300 to-emerald-400 bg-300% animate-gradient"
            >
              SUKH MURTI MART
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs md:text-sm text-emerald-100/70 font-semibold tracking-widest mt-2 uppercase"
            >
              PVT. LTD. · Moradabad
            </motion.p>

            {/* Premium Progress Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-10 overflow-hidden relative border border-white/5">
              <motion.div
                className="h-full bg-linear-to-r from-emerald-500 to-yellow-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] uppercase tracking-widest mt-2 text-white/50"
            >
              Loading Freshness...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
