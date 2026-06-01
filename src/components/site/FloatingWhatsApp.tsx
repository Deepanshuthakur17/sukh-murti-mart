import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";

export function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className="fixed right-5 md:right-8 z-40 flex flex-col items-center gap-3" 
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
    >
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="grid place-items-center w-12 h-12 rounded-2xl bg-card border border-border text-foreground hover:text-primary shadow-soft hover:shadow-glow transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="grid place-items-center w-15 h-15 rounded-2xl bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-glow relative"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 relative drop-shadow-md" />
      </motion.a>
    </div>
  );
}
