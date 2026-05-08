import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({ children, href, className = "", onClick, type }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const inner = (
    <motion.span whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={onClick}
        className={`inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${className}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type ?? "button"}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {inner}
    </button>
  );
}