import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";

const stats = [
  { value: 10, suffix: "K+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Products Stocked" },
  { value: 4.5, suffix: "★", label: "Avg. Rating" },
  { value: 7, suffix: " Days", label: "Open Weekly" },
];

const pillars = [
  { icon: Award, t: "Quality First", d: "Every product hand-checked for freshness and grade." },
  { icon: HeartHandshake, t: "Customer-First", d: "Friendly service that knows you by name." },
  { icon: ShieldCheck, t: "Local Trust", d: "A familiar name across Ashiyana Colony & beyond." },
  { icon: Users, t: "Wholesale Ready", d: "Bulk pricing for shops, hostels and businesses." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[480px]"
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-elevated">
              <img src={g3} alt="Friendly billing counter" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-elevated border-4 border-background">
              <img src={g6} alt="Fresh produce" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 glass-light dark:glass rounded-2xl px-5 py-4 shadow-soft border border-primary/10">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground font-medium">Quality Assured</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-xs font-semibold mb-5">
              About SUKH MURTI MART
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A trusted <span className="text-gradient-brand">grocery destination</span> for every family in Moradabad
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              SUKH MURTI MART PVT LTD has become a trusted destination in Moradabad for groceries,
              household essentials and wholesale products. Known for quality products, customer trust
              and reliable service, we serve thousands of homes and businesses every month.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {pillars.map((p) => (
                <div key={p.t} className="flex gap-3 p-4 rounded-2xl bg-card border border-border hover:shadow-soft hover:-translate-y-0.5 transition-all">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary-soft text-primary shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{p.t}</div>
                    <div className="text-sm text-muted-foreground">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-3xl bg-gradient-brand text-primary-foreground p-6 text-center shadow-glow"
            >
              <div className="text-4xl md:text-5xl font-bold">
                {s.value === 4.5 ? "4.5★" : <Counter to={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-sm opacity-90 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
