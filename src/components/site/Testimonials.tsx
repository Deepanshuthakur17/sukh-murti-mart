import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Ritu Sharma", role: "Ashiyana Colony", text: "Best mart in our area! Fresh stock, fair prices and the staff is always polite. We do all our monthly shopping here." },
  { name: "Ankit Verma", role: "Local resident", text: "I run a small tiffin service and buy in bulk from Sukh Murti. Their wholesale rates are unbeatable in Moradabad." },
  { name: "Pooja Aggarwal", role: "Homemaker", text: "Love the variety — from imported snacks to fresh dairy. Convenient location near RRK School makes it perfect for daily needs." },
  { name: "Mohit Kumar", role: "Customer", text: "Genuine products, never had any expiry or quality issue. Highly recommended to families in the area." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-xs font-semibold mb-5">
            Customer love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by <span className="text-gradient-brand">Moradabad Families</span></h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[280px] md:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 glass-light rounded-3xl p-8 md:p-10 shadow-soft"
              >
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed">"{reviews[i].text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-bold">{reviews[i].name}</div>
                    <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="grid place-items-center w-11 h-11 rounded-full bg-card border border-border hover:bg-primary-soft transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % reviews.length)} className="grid place-items-center w-11 h-11 rounded-full bg-card border border-border hover:bg-primary-soft transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
