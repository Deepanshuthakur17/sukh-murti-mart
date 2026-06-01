import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, MessageCircle, Check, Loader2 } from "lucide-react";

function FloatField({ id, label, type = "text", required, textarea, className = "" }: { id: string; label: string; type?: string; required?: boolean; textarea?: boolean; className?: string }) {
  const base = "peer w-full rounded-xl border border-input bg-background px-4 pt-5 pb-2 text-sm focus-glow transition-all placeholder-transparent";
  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea id={id} required={required} placeholder={label} rows={4} className={`${base} resize-none`} />
      ) : (
        <input id={id} type={type} required={required} placeholder={label} className={base} />
      )}
      <label htmlFor={id} className="pointer-events-none absolute left-4 top-1.5 text-[11px] text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary">
        {label}{required && " *"}
      </label>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden transition-colors duration-500">
      <div className="orb animate-orb" style={{ width: 400, height: 400, left: "-100px", top: "10%", background: "radial-gradient(circle, oklch(0.65 0.16 152 / 0.15), transparent 70%)" }} />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-xs font-semibold mb-5">
            Visit · Call · Message
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Get in <span className="text-gradient-brand">touch with us</span></h2>
          <p className="text-muted-foreground mt-4">We'd love to serve you. Drop by the store, call us, or send a message.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: MapPin, t: "Our Store", d: "SUKH MURTI MART PVT LTD, HIG A2-16, near RRK SCHOOL, Ashiyana Colony, Moradabad, Uttar Pradesh 244105" },
              { icon: Phone, t: "Call Us", d: "+91 98XXX XXXXX" },
              { icon: Mail, t: "Email", d: "info@sukhmurtimart.com" },
              { icon: Clock, t: "Open Hours", d: "Mon – Sun · 8:00 AM – 10:00 PM" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-soft transition-all">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{c.d}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-linear-to-br from-[#25D366] to-[#128C7E] text-white font-semibold py-4 rounded-2xl shadow-glow hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 md:p-8 shadow-soft"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-border">
              <iframe
                title="Sukh Murti Mart location"
                src="https://www.google.com/maps?q=SUKH+MURTI+MART+PVT+LTD,+HIG+A2-16,+near+RRK+SCHOOL,+Ashiyana+Colony,+Moradabad,+Uttar+Pradesh+244105&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setStatus("sending"); setTimeout(() => setStatus("sent"), 900); setTimeout(() => setStatus("idle"), 3500); }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <FloatField id="name" label="Your name" required />
              <FloatField id="phone" label="Phone number" type="tel" required />
              <FloatField id="email" label="Email (optional)" type="email" className="sm:col-span-2" />
              <FloatField id="msg" label="How can we help you?" required textarea className="sm:col-span-2" />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="sm:col-span-2 relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground font-semibold py-4 rounded-xl shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-90"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "idle" && (
                    <motion.span key="i" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="inline-flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span key="s" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span key="d" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                      <Check className="w-4 h-4" /> Message sent
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
