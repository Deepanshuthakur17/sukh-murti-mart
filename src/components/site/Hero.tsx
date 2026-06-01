import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";
import { motion } from "framer-motion";
import { Star, Phone, MapPin, Sparkles, Leaf, Truck, Clock } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
        colors: [
            { color: '#0F7A45', enabled: true },
            { color: '#14a35c', enabled: true },
            { color: '#FF9F1A', enabled: true },
            { color: '#ffb84d', enabled: true },
            { color: '#f5e1e5', enabled: false },
        ],
        speed: 6,
        horizontalPressure: 7,
        verticalPressure: 8,
        waveFrequencyX: 1,
        waveFrequencyY: 2,
        waveAmplitude: 8,
        shadows: 4,
        highlights: 6,
        colorBrightness: 0.95,
        colorSaturation: -8,
        wireframe: false,
        colorBlending: 10,
        backgroundColor: '#0F7A45',
        backgroundAlpha: 1,
        grainScale: 4,
        grainSparsity: 0,
        grainIntensity: 0.25,
        grainSpeed: 1,
        resolution: 1,
        yOffset: 0,
        yOffsetWaveMultiplier: 6.2,
        yOffsetColorMultiplier: 5.8,
        yOffsetFlowMultiplier: 6.5,
        flowDistortionA: 1.1,
        flowDistortionB: 0.8,
        flowScale: 1.6,
        flowEase: 0.32,
        flowEnabled: true,
        enableProceduralTexture: false,
        textureVoidLikelihood: 0.27,
        textureVoidWidthMin: 60,
        textureVoidWidthMax: 420,
        textureBandDensity: 1.2,
        textureColorBlending: 0.06,
        textureSeed: 333,
        textureEase: 0.22,
        proceduralBackgroundColor: '#0E0707',
        textureShapeTriangles: 20,
        textureShapeCircles: 15,
        textureShapeBars: 15,
        textureShapeSquiggles: 10,
        domainWarpEnabled: false,
        domainWarpIntensity: 0,
        domainWarpScale: 3,
        vignetteIntensity: 0,
        vignetteRadius: 0.8,
        fresnelEnabled: false,
        fresnelPower: 2,
        fresnelIntensity: 0.5,
        fresnelColor: '#FFFFFF',
        iridescenceEnabled: false,
        iridescenceIntensity: 0.5,
        iridescenceSpeed: 1,
        bloomIntensity: 0,
        bloomThreshold: 0.7,
        chromaticAberration: 0,
    };

    const gradient = new NeatGradient({
        ref: canvasRef.current,
        ...config
    });

    const handleScroll = () => {
        gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        gradient.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden pt-28 pb-16 noise transition-colors duration-500 isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          style={{ width: "100%", height: "100%" }} 
          className="absolute inset-0 opacity-100" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background dark:from-background/20 dark:via-background/50 dark:to-background pointer-events-none" />
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
        
        {/* Subtle Ambient Glows */}
        <div className="orb animate-orb" style={{ width: 500, height: 500, left: "-10%", top: "10%", background: "radial-gradient(circle, oklch(0.65 0.16 152 / 0.25), transparent 70%)" }} />
        <div className="orb animate-orb" style={{ width: 400, height: 400, right: "-5%", bottom: "20%", background: "radial-gradient(circle, oklch(0.85 0.15 70 / 0.15), transparent 70%)", animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center min-h-[80svh] relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-light dark:glass rounded-full px-4 py-2 text-xs md:text-sm font-medium mb-6 text-foreground border-primary/20"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Open now · Fresh stock arrived today
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            Moradabad's <span className="text-primary dark:text-primary underline decoration-accent/30 decoration-4 underline-offset-4">Trusted</span><br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">Grocery & Wholesale Mart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Quality groceries, daily essentials and wholesale products at trusted prices —
            served fresh to families and businesses across the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#contact" className="bg-gradient-brand text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow">
              <Phone className="w-4 h-4" /> Contact Us
            </MagneticButton>
            <MagneticButton href="#contact" className="glass-light dark:glass text-foreground px-8 py-4 rounded-full font-semibold hover:scale-105">
              <MapPin className="w-4 h-4" /> Visit Store
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-2 text-xs text-muted-foreground"
          >
            {[
              { i: Sparkles, t: "Trusted by 10K+ families" },
              { i: Truck, t: "Home delivery available" },
              { i: Clock, t: "Replies in ~5 min" },
            ].map((c) => (
              <span key={c.t} className="inline-flex items-center gap-1.5 glass-light dark:glass rounded-full px-4 py-2 border border-foreground/5">
                <c.i className="w-3.5 h-3.5 text-primary" /> {c.t}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] lg:h-[540px]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute top-4 right-0 lg:right-6 glass-light dark:glass rounded-3xl p-6 w-64 animate-float border-primary/10"
          >
            <div className="flex items-center gap-1 text-primary mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="text-3xl font-bold text-foreground">4.5★</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">Customer Rating</div>
            <div className="text-[10px] text-muted-foreground/60 mt-0.5">Based on 83+ Verified Reviews</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-24 left-2 lg:left-0 glass-light dark:glass rounded-3xl p-6 w-60 animate-float-delay border-primary/10"
          >
            <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand shadow-glow mb-4">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-base font-bold text-foreground">Fresh Daily</div>
            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Stocked & quality checked every single morning.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-2 right-4 glass-light dark:glass rounded-3xl p-6 w-56 animate-float border-primary/10"
          >
            <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-warm shadow-warm mb-4">
              <Truck className="w-6 h-6 text-foreground" />
            </div>
            <div className="text-base font-bold text-foreground">Local Trust</div>
            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Moradabad's favorite wholesale partner.
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-b from-transparent to-background" />
    </section>
  );
}
