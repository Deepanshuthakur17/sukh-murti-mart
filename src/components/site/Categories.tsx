import { motion } from "framer-motion";
import { Apple, Cookie, CupSoda, Home, Milk, Package, ShoppingBag, Warehouse } from "lucide-react";

const cats = [
  { icon: Apple, name: "Groceries", desc: "Pulses, atta, rice, oils & more", from: "from-emerald-500/15", to: "to-green-600/15" },
  { icon: Cookie, name: "Snacks", desc: "Chips, biscuits, namkeen", from: "from-amber-500/15", to: "to-orange-500/15" },
  { icon: CupSoda, name: "Beverages", desc: "Juices, soft drinks, tea, coffee", from: "from-rose-500/15", to: "to-pink-500/15" },
  { icon: Home, name: "Household", desc: "Cleaning & home essentials", from: "from-sky-500/15", to: "to-blue-600/15" },
  { icon: Milk, name: "Dairy", desc: "Milk, paneer, curd, ghee", from: "from-cyan-500/15", to: "to-teal-500/15" },
  { icon: Package, name: "Packaged Foods", desc: "Ready-to-cook & instant meals", from: "from-violet-500/15", to: "to-purple-500/15" },
  { icon: ShoppingBag, name: "Daily Needs", desc: "Soaps, toothpaste, personal care", from: "from-fuchsia-500/15", to: "to-pink-500/15" },
  { icon: Warehouse, name: "Wholesale Supply", desc: "Bulk orders for businesses", from: "from-yellow-500/15", to: "to-amber-500/15" },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-light dark:glass text-foreground px-4 py-2 rounded-full text-xs font-bold mb-5 border border-primary/10">
            What we stock
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Everything your home needs, <span className="text-gradient-brand">in one mart</span></h2>
          <p className="text-muted-foreground mt-4">From daily groceries to wholesale supply — explore curated categories trusted by Moradabad families.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cats.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-6 bg-card border border-border overflow-hidden cursor-pointer shadow-sm hover:shadow-elevated transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.from} ${c.to} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand text-primary-foreground grid place-items-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-glow">
                  <c.icon className="w-7 h-7" />
                </div>
                <div className="font-bold text-lg">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
                <div className="mt-4 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop in store →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
