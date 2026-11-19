import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { BRAND } from "@/data/catalog";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Pantallas LED 24/7 y Publicidad en Corrientes`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Circuito de pantallas LED gigantes 24/7 en Corrientes Capital (Av. 3 de Abril, Av. Tte. Ibáñez y Av. Centenario). Producción de video en menos de 24 hs, cartelería exterior, redes sociales y diseño web.",
  keywords: [
    "pantallas led corrientes",
    "publicidad via publica corrientes",
    "tu publicidad corrientes",
    "carteleria corrientes capital",
    "marketing digital corrientes",
    "diseno web corrientes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] font-sans text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
