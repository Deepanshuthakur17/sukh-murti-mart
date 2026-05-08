import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      className="fixed right-5 md:right-8 z-40 grid place-items-center w-15 h-15 rounded-2xl bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-glow"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="w-7 h-7 relative drop-shadow-md" />
    </motion.a>
  );
}
