import { motion } from "framer-motion";
import { BadgeCheck, IndianRupee, MapPinned, ShieldCheck, Smile, Layers } from "lucide-react";

const features = [
  { icon: BadgeCheck, t: "Trusted by Local Customers", d: "A name Moradabad families recommend by word of mouth." },
  { icon: ShieldCheck, t: "Quality Checked Products", d: "Every pack inspected for freshness, MRP and expiry." },
  { icon: IndianRupee, t: "Affordable Pricing", d: "Honest, market-best prices on retail and wholesale." },
  { icon: Smile, t: "Friendly Service", d: "Helpful staff that treat every customer like family." },
  { icon: Layers, t: "Wide Product Range", d: "500+ SKUs across groceries, snacks, dairy and more." },
  { icon: MapPinned, t: "Easy Accessibility", d: "Conveniently located near RRK School, Ashiyana Colony." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-light dark:glass text-foreground px-4 py-2 rounded-full text-xs font-bold mb-5 border border-primary/10">
            Why choose us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Built on <span className="text-primary dark:text-primary underline decoration-accent/30 decoration-4 underline-offset-4 tracking-tight">trust</span>, run with care
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-3xl p-7 bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-warm blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary mb-5 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-glow">
                  <f.icon className="w-7 h-7" />
                </div>
                <div className="text-xl font-bold">{f.t}</div>
                <div className="text-muted-foreground mt-2 text-sm leading-relaxed">{f.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
