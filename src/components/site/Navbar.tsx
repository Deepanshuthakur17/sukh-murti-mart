import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, LayoutGrid, Award, Image, Phone, MapPin, MessageCircle } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#categories", label: "Categories", icon: LayoutGrid },
  { href: "#why", label: "Why Us", icon: Award },
  { href: "#gallery", label: "Gallery", icon: Image },
  { href: "#contact", label: "Contact", icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Framer Motion variants for mobile menu stagger
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.3, 0, 0.2, 1] as const,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.3, 0, 0.2, 1] as const,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 25 } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`mx-auto flex items-center justify-between rounded-full px-3 md:px-6 transition-all duration-300 ${
              scrolled ? "glass-light shadow-soft py-2" : "bg-transparent py-3"
            }`}
          >
            <a href="#home" className="flex items-center gap-2.5 group relative z-50">
              <img 
                src="/logo-sm-mart.png" 
                alt="Logo" 
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-12" : "h-16"}`} 
              />
              <div className="leading-tight">
                <div className="text-sm md:text-base font-bold text-foreground">SUKH MURTI MART</div>
                <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5 flex items-center gap-1.5 font-semibold">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Open now · Moradabad
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ModeToggle />
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                Visit Store
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-3 relative z-50">
              <ModeToggle />
              <button
                className="p-2.5 rounded-full bg-card border border-border/50 shadow-sm active:scale-90 transition-transform cursor-pointer"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 dark:bg-background/99 backdrop-blur-2xl px-6 pt-32 pb-10 justify-between lg:hidden overflow-y-auto"
          >
            {/* Top mesh accent */}
            <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />

            <div className="flex flex-col gap-8 w-full mt-4">
              <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground/60 px-2">Navigation Links</div>
              <nav className="flex flex-col gap-3">
                {links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <motion.div key={l.href} variants={itemVariants}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 py-4 px-5 rounded-2xl bg-card border border-border/50 text-foreground hover:text-primary hover:border-primary/20 hover:shadow-soft active:scale-[0.98] transition-all"
                      >
                        <div className="grid place-items-center w-10 h-10 rounded-xl bg-primary-soft text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-base font-bold tracking-wide">{l.label}</span>
                      </a>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div 
              variants={itemVariants} 
              className="mt-8 pt-8 border-t border-border/50 flex flex-col gap-6 w-full"
            >
              {/* Mobile Actions / Info */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground font-bold py-3.5 px-4 rounded-xl shadow-glow text-sm text-center"
                >
                  <MapPin className="w-4 h-4" /> Locate Store
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-linear-to-br from-[#25D366] to-[#128C7E] text-white font-bold py-3.5 px-4 rounded-xl shadow-glow text-sm text-center"
                >
                  <MessageCircle className="w-4 h-4" /> Chat Now
                </a>
              </div>

              {/* Bottom text */}
              <div className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                Sukh Murti Mart Pvt. Ltd. · Moradabad
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

