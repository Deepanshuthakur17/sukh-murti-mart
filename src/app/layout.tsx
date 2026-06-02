import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SUKH MURTI MART PVT LTD — Trusted Grocery & Wholesale Mart in Moradabad",
  description: "Moradabad's trusted grocery and wholesale mart. Quality groceries, daily essentials, dairy, snacks and bulk supplies at honest prices.",
  authors: [{ name: "Sukh Murti Mart" }],
  openGraph: {
    title: "SUKH MURTI MART — Trusted Grocery & Wholesale Mart, Moradabad",
    description: "Quality groceries, daily essentials and wholesale products at trusted prices.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@SukhMurtiMart",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
