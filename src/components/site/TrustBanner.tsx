import { motion } from "framer-motion";

export function TrustBanner() {
  const items = ["Trusted by Moradabad Families", "Fresh Daily Stock", "Wholesale & Retail", "Quality Assured", "Open 7 Days a Week"];
  return (
    <div className="py-5 bg-gradient-brand text-primary-foreground overflow-hidden border-y border-primary/30">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="flex gap-12 whitespace-nowrap text-sm md:text-base font-semibold uppercase tracking-widest"
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it} <span className="w-2 h-2 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
