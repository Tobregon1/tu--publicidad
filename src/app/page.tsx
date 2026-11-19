import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import {
  SCREENS,
  CIRCUIT_PACK,
  COVERAGE_CELLS,
  IMPACT_METRICS,
  SERVICES,
  FAQS,
} from "@/data/catalog";
import { ClientsGrid } from "@/components/ClientsGrid";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* 1. HERO SECTION — Full-bleed dark editorial photo + left-aligned stack */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden border-b border-white/10 lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/hero-led.jpg"
            alt="Pantalla LED gigante de Tu! Publicidad en avenida de Corrientes"
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#8F0000] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              CORRIENTES CAPITAL · CIRCUITO LED 24/7
            </span>

            <h1 className="mt-5 font-heading text-6xl leading-[0.86] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[116px]">
              PUBLICIDAD EN
              <br />
              <span className="text-[#8F0000]">PANTALLAS LED</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#D1D5DB] md:text-lg">
              Tu! Publicidad opera un circuito estratégico de pantallas LED gigantes en
              Av. 3 de Abril, Av. Teniente Ibáñez y Av. Centenario. Salida al aire en
              menos de 24 horas, cartelería exterior, redes sociales y diseño web.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/ubicaciones"
                className="inline-flex h-14 items-center justify-center rounded-none bg-[#8F0000] px-9 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
              >
                VER PANTALLAS
              </Link>
              <a
                href="#presupuesto"
                className="inline-flex h-14 items-center justify-center rounded-none border border-white/25 bg-transparent px-9 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
              >
                PEDIR COTIZACIÓN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH CRIMSON SLOGAN STRIP — High-contrast pulsing white-on-crimson banner */}
      <div className="w-full bg-[#8F0000] px-4 py-4 text-center">
        <p className="animate-strip-pulse font-heading text-xl tracking-[0.12em] text-white sm:text-2xl">
          NO SE TRATA DE ESTAR, SE TRATA DE SER VISTO.
        </p>
      </div>

      {/* 3. COVERAGE OVERVIEW — ¿Dónde podés pautar en Corrientes? */}
      <section className="border-b border-white/10 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E52222]">
            PUBLICIDAD EXTERIOR EN CORRIENTES CAPITAL
          </p>

          <h2 className="mt-3 max-w-4xl font-heading text-4xl leading-[0.94] tracking-tight text-white sm:text-5xl md:text-6xl">
            ¿DÓNDE PODÉS CONTRATAR UNA PANTALLA DE TU! PUBLICIDAD?
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#9CA3AF] md:text-base">
            Con presencia en 3 esquinas neurálgicas con semáforo de Corrientes Capital,
            tu marca impacta frente a miles de conductores, colectivos y peatones las 24
            horas del día. Combiná nuestras pantallas con las promos vigentes 3×2 y 4×3 o
            sumá redes sociales para dominar la calle y el celular al mismo tiempo.
          </p>

          {/* Exact Felippo architectural hairline-divided grid */}
          <div className="mt-10 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {COVERAGE_CELLS.map((cell) => (
              <Link
                key={cell.label}
                href={cell.href}
                className="group flex flex-col justify-between bg-[#0E0E0E] p-5 transition-colors hover:bg-[#171717]"
              >
                <span className="font-heading text-lg tracking-wide text-white transition-colors group-hover:text-[#C80000]">
                  {cell.label}
                </span>
                <span className="mt-2 flex items-center justify-between text-[11px] font-medium text-[#9CA3AF]">
                  <span>{cell.meta}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#8F0000] transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POSICIONES CLAVE — 2×2 Large Card Grid (Exact Felippo visual cadence) */}
      <section className="border-b border-white/10 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-heading text-5xl leading-[0.9] tracking-tight text-white md:text-6xl">
              POSICIONES
              <br />
              <span className="text-[#8F0000]">CLAVE</span>
            </h2>

            <Link
              href="/mapa"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D1D5DB] transition-colors hover:text-white"
            >
              <span>VER MAPA COMPLETO</span>
              <ArrowRight className="h-4 w-4 text-[#C80000]" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {SCREENS.map((screen) => (
              <Link
                key={screen.slug}
                href={`/ubicaciones/${screen.slug}`}
                className="group block overflow-hidden border border-white/10 bg-[#121212] transition-colors hover:border-[#8F0000]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={screen.image}
                    alt={screen.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 bg-[#8F0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {screen.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-2xl leading-tight tracking-wide text-white transition-colors group-hover:text-white md:text-[26px]">
                    {screen.name}
                  </h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9CA3AF]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#C80000]" />
                      {screen.direction}
                    </span>
                    <span className="text-white/25">|</span>
                    <span>Pantalla LED 24/7</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* 4th card completes the iconic 2x2 grid with Pack Circuito Completo */}
            <Link
              href="/ubicaciones"
              className="group block overflow-hidden border border-[#8F0000]/60 bg-[#121212] transition-colors hover:border-[#C80000]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={CIRCUIT_PACK.image}
                  alt={CIRCUIT_PACK.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3.5 top-3.5 bg-[#8F0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  {CIRCUIT_PACK.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl leading-tight tracking-wide text-white md:text-[26px]">
                  {CIRCUIT_PACK.title}
                </h3>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9CA3AF]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#C80000]" />
                    Corrientes Capital
                  </span>
                  <span className="text-white/25">|</span>
                  <span>{CIRCUIT_PACK.format}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Sharp 4-column brutalist metrics / promos strip */}
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_METRICS.map((item) => (
              <div key={item.label} className="bg-[#0E0E0E] p-6">
                <p className="font-heading text-4xl leading-none tracking-tight text-[#C80000]">
                  {item.value}
                </p>
                <p className="mt-3 font-heading text-lg tracking-wide text-white">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#9CA3AF]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NUESTROS SERVICIOS — Exact Felippo 4-col border-divided architectural boxes */}
      <section className="border-b border-white/10 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-heading text-5xl leading-[0.9] tracking-tight text-white md:text-6xl">
              NUESTROS
              <br />
              <span className="text-[#8F0000]">SERVICIOS</span>
            </h2>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D1D5DB] transition-colors hover:text-white"
            >
              <span>CONOCER PROPUESTA INTEGRAL</span>
              <ArrowRight className="h-4 w-4 text-[#C80000]" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className="group flex flex-col justify-between bg-[#0B0B0B] p-7 transition-colors hover:bg-[#141414]"
              >
                <div>
                  <h3 className="font-heading text-2xl leading-tight tracking-wide text-white transition-colors group-hover:text-[#C80000]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
                    {service.summary}
                  </p>
                </div>

                <span className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors group-hover:text-white">
                  VER DETALLE
                  <ArrowRight className="h-3.5 w-3.5 text-[#C80000]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES — Exact Felippo open editorial stack */}
      <section className="border-b border-white/10 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-heading text-5xl leading-[0.9] tracking-tight text-white md:text-6xl">
            PREGUNTAS <span className="text-[#8F0000]">FRECUENTES</span>
          </h2>

          <div className="mt-10 max-w-4xl divide-y divide-white/10">
            {FAQS.map((faq) => (
              <div key={faq.question} className="py-6 first:pt-0">
                <h3 className="font-heading text-xl tracking-wide text-white md:text-2xl">
                  {faq.question}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9CA3AF] md:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NUESTROS CLIENTES — Exact Felippo crisp white-tile grid */}
      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-heading text-5xl leading-[0.9] tracking-tight text-white md:text-6xl">
              NUESTROS <span className="text-[#8F0000]">CLIENTES</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#9CA3AF] md:text-right">
              Marcas, pymes y comercios de Corrientes que confiaron en Tu! Publicidad
              para ganar presencia e impacto real en la calle y en redes.
            </p>
          </div>

          <div className="mt-10">
            <ClientsGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
