import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
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

  return (
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
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className={`grid place-items-center rounded-xl bg-gradient-brand shadow-glow group-hover:scale-105 transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}>
              <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
            </div>
            <div className="leading-tight">
              <div className="text-sm md:text-base font-bold text-foreground">SUKH MURTI MART</div>
              <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5 flex items-center gap-1.5">
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

          <button
            className="lg:hidden p-2 rounded-full glass-light"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-light rounded-2xl p-2 shadow-soft"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary-soft"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
