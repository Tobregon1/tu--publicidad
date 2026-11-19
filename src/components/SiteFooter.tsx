import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle, Clock, Instagram, Facebook, Phone } from "lucide-react";
import { BRAND, buildWhatsAppUrl } from "@/data/catalog";
import { BrandMark } from "./BrandMark";
import { QuoteForm } from "./QuoteForm";

export function SiteFooter() {
  const waUrl = buildWhatsAppUrl(
    "Hola Tu! Publicidad, quiero solicitar presupuesto para pautar en Corrientes."
  );

  return (
    <footer id="presupuesto" className="w-full">
      {/* Upper Crimson Lead-Capture Band — Exact Felippo 2-col split */}
      <div className="w-full bg-[#8F0000] py-16 md:py-22">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="font-heading text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl">
              HAGAMOS
              <br />
              RUIDO.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Comunicate con nuestro equipo en Corrientes Capital para reservar tu
              pantalla LED 24/7 o cotizar tu próxima campaña integral de calle y redes.
            </p>

            <ul className="mt-8 space-y-3.5 text-sm text-white">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </span>
                  <span className="font-medium">
                    WhatsApp {BRAND.whatsappDisplay}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:+${BRAND.whatsappNumber}`}
                  className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                    <Phone className="h-4 w-4 text-white" />
                  </span>
                  <span className="font-medium">Tel. {BRAND.whatsappLocal}</span>
                </a>
              </li>

              <li className="inline-flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                  <MapPin className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium">{BRAND.address}</span>
              </li>

              <li className="inline-flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                  <Clock className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium">
                  Pantallas 24/7 · Producción de video en &lt;24 hs
                </span>
              </li>

              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                    <Instagram className="h-4 w-4 text-white" />
                  </span>
                  <span className="font-medium">Instagram {BRAND.instagramHandle}</span>
                </a>
              </li>

              <li>
                <a
                  href={BRAND.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/25">
                    <Facebook className="h-4 w-4 text-white" />
                  </span>
                  <span className="font-medium">Facebook {BRAND.facebookHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column — Obsidian Quote Container */}
          <div className="lg:col-span-7">
            <QuoteForm
              heading="SOLICITAR PRESUPUESTO"
              submitLabel="ENVIAR CONSULTA"
              variant="footer"
            />
          </div>
        </div>
      </div>

      {/* Lower Obsidian Navigation & Copyright Bar */}
      <div className="w-full border-t border-white/10 bg-[#050505] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <Link href="/" aria-label="Tu! Publicidad - Inicio">
            <BrandMark variant="mono" />
          </Link>

          <nav
            aria-label="Pie de página"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              INICIO
            </Link>
            <Link href="/ubicaciones" className="transition-colors hover:text-white">
              PANTALLAS
            </Link>
            <Link href="/mapa" className="transition-colors hover:text-white">
              MAPA
            </Link>
            <Link href="/servicios" className="transition-colors hover:text-white">
              SERVICIOS
            </Link>
            <Link href="/contacto" className="transition-colors hover:text-white">
              CONTACTO
            </Link>
            <Link href="/privacidad" className="transition-colors hover:text-white">
              PRIVACIDAD
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white">
              TÉRMINOS
            </Link>
          </nav>

          <div className="text-left text-[11px] leading-relaxed text-[#6B7280] md:text-right">
            <p>© 2026 {BRAND.name}. Todos los derechos reservados.</p>
            <p>Corrientes Capital, Argentina.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
