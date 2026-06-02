"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { TrustBanner } from "@/components/site/TrustBanner";
import { Splash } from "@/components/site/Splash";

// Dynamically load the Hero component on client-side only 
// because it initialises a canvas-based WebGL context using @firecms/neat
const Hero = dynamic(
  () => import("@/components/site/Hero").then((mod) => mod.Hero),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustBanner />
        <Categories />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

