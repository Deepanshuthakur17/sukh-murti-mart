import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { TrustBanner } from "@/components/site/TrustBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUKH MURTI MART PVT LTD — Trusted Grocery & Wholesale Mart in Moradabad" },
      { name: "description", content: "Moradabad's trusted grocery and wholesale mart. Quality groceries, daily essentials, dairy, snacks and bulk supplies at honest prices." },
      { property: "og:title", content: "SUKH MURTI MART — Trusted Grocery & Wholesale Mart, Moradabad" },
      { property: "og:description", content: "Quality groceries, daily essentials and wholesale products at trusted prices." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
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
