import type { Metadata } from "next";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, buildWhatsAppUrl } from "@/data/catalog";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contacto y Cotización",
  description:
    "Contactá a Tu! Publicidad en Corrientes Capital por WhatsApp (+54 9 379 533-1385) o completá el formulario para cotizar pantallas LED, cartelería, redes o diseño web.",
};

export default function ContactoPage() {
  const waHref = buildWhatsAppUrl(
    "Hola Tu! Publicidad, quiero pedir una cotización para mi marca en Corrientes."
  );

  return (
    <div className="bg-[#0A0A0A] py-14 md:py-22">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column — Exact Felippo /contacto/ layout */}
        <div className="lg:col-span-5">
          <h1 className="font-heading text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl">
            HAGAMOS
            <br />
            <span className="text-[#8F0000]">CONTACTO</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#9CA3AF] md:text-base">
            Estamos listos para potenciar tu marca en Corrientes. Escribinos para
            conocer disponibilidad en nuestras pantallas LED 24/7, aprovechar las promos
            3×2 y 4×3 o armar un plan integral de redes y web.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-[#121212] transition-colors group-hover:border-[#8F0000] group-hover:bg-[#8F0000]">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-heading text-lg tracking-wide text-white">
                  WHATSAPP / TELÉFONO
                </p>
                <p className="mt-0.5 text-sm text-[#9CA3AF] group-hover:text-white">
                  {BRAND.whatsappDisplay} ({BRAND.whatsappLocal})
                </p>
              </div>
            </a>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-[#121212] transition-colors group-hover:border-[#8F0000] group-hover:bg-[#8F0000]">
                <Instagram className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-heading text-lg tracking-wide text-white">
                  INSTAGRAM &amp; REDES
                </p>
                <p className="mt-0.5 text-sm text-[#9CA3AF] group-hover:text-white">
                  {BRAND.instagramHandle} · Facebook {BRAND.facebookHandle}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-[#121212]">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-heading text-lg tracking-wide text-white">
                  SEDE CORRIENTES
                </p>
                <p className="mt-0.5 text-sm text-[#9CA3AF]">
                  {BRAND.address}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2.5 bg-[#25D366] px-7 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              HABLAR AHORA POR WHATSAPP
            </a>
          </div>
        </div>

        {/* Right Column — Exact Felippo #121212 Card with top crimson border */}
        <div className="lg:col-span-7">
          <QuoteForm
            heading="PEDIR COTIZACIÓN"
            submitLabel="PEDIR COTIZACIÓN"
            variant="card"
          />
        </div>
      </div>
    </div>
  );
}
