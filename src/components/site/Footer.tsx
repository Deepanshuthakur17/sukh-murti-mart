import { Facebook, Instagram, Twitter, Youtube, ShoppingBasket, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 bg-secondary/50 dark:bg-black/20 text-foreground overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border/50">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-sm-mart.png" alt="Logo" className="w-auto h-16 object-contain" />
              <div>
                <div className="font-bold">SUKH MURTI MART</div>
                <div className="text-xs opacity-70">PVT. LTD.</div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">Moradabad's trusted grocery and wholesale mart — quality, value and friendly service since day one.</p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, Twitter, Youtube].map((I, k) => (
                <a key={k} href="#" className="grid place-items-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Categories", "Why Us", "Gallery", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Business Hours</div>
            <div className="text-sm text-muted-foreground space-y-2">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Mon – Sat · 8 AM – 10 PM</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Sunday · 9 AM – 9 PM</div>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Reach Us</div>
            <div className="text-sm text-muted-foreground space-y-3">
              <div className="flex gap-2"><MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> SUKH MURTI MART PVT LTD, HIG A2-16, near RRK SCHOOL, Ashiyana Colony, Moradabad, Uttar Pradesh 244105</div>
              <div className="flex gap-2"><Phone className="w-4 h-4 text-accent" /> +91 98XXX XXXXX</div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <div>© {new Date().getFullYear()} SUKH MURTI MART PVT LTD. All rights reserved.</div>
          <div>Made with care in Moradabad, India.</div>
        </div>
      </div>
    </footer>
  );
}
