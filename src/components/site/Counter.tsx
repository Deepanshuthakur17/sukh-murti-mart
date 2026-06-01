import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) {
      setVal(0);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}
