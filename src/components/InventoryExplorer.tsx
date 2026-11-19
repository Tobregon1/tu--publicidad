"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, Clock } from "lucide-react";
import { SCREENS, CIRCUIT_PACK, buildWhatsAppUrl } from "@/data/catalog";
import { DynamicCorrientesMap } from "./DynamicCorrientesMap";

const ZONE_OPTIONS = [
  { value: "all", label: "Todas las avenidas y esquinas (3)" },
  { value: "av-3-de-abril", label: "Corredor Av. 3 de Abril (1)" },
  { value: "av-tte-ibanez", label: "Corredor Av. Teniente Ibáñez (1)" },
  { value: "av-centenario", label: "Corredor Av. Centenario (1)" },
];

export function InventoryExplorer() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [includeCircuitPack, setIncludeCircuitPack] = useState(true);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredScreens = useMemo(() => {
    if (selectedZone === "all") return SCREENS;
    return SCREENS.filter((s) => s.zoneKey === selectedZone);
  }, [selectedZone]);

  const packWaHref = buildWhatsAppUrl(
    "Hola Tu! Publicidad, quiero cotizar el Circuito Completo de las 3 pantallas LED en Corrientes con Promo 3×2 o 4×3."
  );

  return (
    <div>
      {/* Exact Felippo bordered dark filter panel */}
      <div className="border border-white/10 bg-[#121212] p-6 md:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="w-full max-w-md space-y-4">
            <div>
              <label
                htmlFor="zone-filter"
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#9CA3AF]"
              >
                FILTRAR POR AVENIDA / CORREDOR
              </label>
              <select
                id="zone-filter"
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="h-12 w-full rounded-none border border-[#262626] bg-[#0A0A0A] px-4 text-sm font-medium text-white focus:border-[#8F0000] focus:outline-none"
              >
                {ZONE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="inline-flex cursor-pointer items-center gap-2.5 text-xs text-[#D1D5DB] select-none">
              <input
                type="checkbox"
                checked={includeCircuitPack}
                onChange={(e) => setIncludeCircuitPack(e.target.checked)}
                className="h-4 w-4 rounded-none border border-white/30 bg-[#0A0A0A] accent-[#8F0000]"
              />
              <span>Mostrar Pack Circuito Completo (Promos 3×2 y 4×3)</span>
            </label>
          </div>

          <div className="flex items-baseline gap-3 md:text-right">
            <span className="font-heading text-4xl leading-none text-[#C80000] md:text-5xl">
              {filteredScreens.length}
            </span>
            <span className="font-heading text-xl tracking-wide text-[#9CA3AF] md:text-2xl">
              {filteredScreens.length === 1
                ? "PANTALLA LED DISPONIBLE"
                : "PANTALLAS LED DISPONIBLES"}
            </span>
          </div>
        </div>
      </div>

      {/* Exact Felippo 50/50 Split Catalog Cards (Left) + Sticky Interactive Map (Right) */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left List */}
        <div className="space-y-5 lg:col-span-6">
          {filteredScreens.map((screen) => (
            <Link
              key={screen.slug}
              href={`/ubicaciones/${screen.slug}`}
              onMouseEnter={() => setHoveredSlug(screen.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`group flex flex-col border bg-[#121212] transition-colors sm:flex-row ${
                hoveredSlug === screen.slug
                  ? "border-[#8F0000]"
                  : "border-white/10 hover:border-[#8F0000]"
              }`}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black sm:aspect-auto sm:w-52">
                <img
                  src={screen.image}
                  alt={screen.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 bg-[#8F0000] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {screen.code}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C80000]">
                    {screen.badge} · CORRIENTES CAPITAL
                  </p>
                  <h2 className="mt-1.5 font-heading text-xl leading-tight tracking-wide text-white transition-colors group-hover:text-white">
                    {screen.name}
                  </h2>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C80000]" />
                    <span>{screen.direction}</span>
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D1D5DB]">
                    <Clock className="h-3.5 w-3.5 text-[#C80000]" />
                    24/7 HD · Spot &lt;24 hs
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors group-hover:text-[#C80000]">
                    VER FICHA
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Optional Pack Circuito Completo Promo Card */}
          {includeCircuitPack ? (
            <div className="border border-[#8F0000] bg-[#121212] p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#8F0000] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  <Sparkles className="h-3 w-3" />
                  {CIRCUIT_PACK.badge}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF]">
                  COBERTURA TOTAL EN LA CIUDAD
                </span>
              </div>

              <h3 className="mt-4 font-heading text-2xl leading-tight tracking-wide text-white">
                {CIRCUIT_PACK.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                Multiplicá el alcance combinando las 3 esquinas más transitadas de
                Corrientes Capital. Aprovechá las promos vigentes{" "}
                <strong className="text-white">3×2 (pagás 2, llevás 1 de regalo)</strong> y{" "}
                <strong className="text-white">4×3 (pagás 3, la 4ta va sin cargo)</strong>{" "}
                con diseño de spot incluido en menos de 24 horas.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={packWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center bg-[#8F0000] px-6 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  COTIZAR PACK CIRCUITO
                </a>
                <a
                  href="#presupuesto"
                  className="inline-flex h-11 items-center justify-center border border-white/25 px-6 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
                >
                  PEDIR POR FORMULARIO
                </a>
              </div>
            </div>
          ) : null}
        </div>

        {/* Right Sticky Interactive Leaflet Map */}
        <div className="lg:sticky lg:top-24 lg:col-span-6">
          <DynamicCorrientesMap
            screens={filteredScreens}
            highlightedSlug={hoveredSlug}
            heightClass="h-[460px] lg:h-[620px]"
          />
          <p className="mt-3 text-xs text-[#9CA3AF]">
            Hacé clic en cualquier pin rojo del mapa de Corrientes Capital para ver la foto
            y abrir la ficha técnica de la esquina.
          </p>
        </div>
      </div>

      {/* Bottom Quick Zone Strip (exact Felippo footer link strip) */}
      <div className="mt-14 border-t border-white/10 pt-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C80000]">
          EXPLORÁ POR AVENIDA O ESQUINA
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelectedZone("all")}
            className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
              selectedZone === "all"
                ? "border-[#8F0000] bg-[#8F0000] text-white"
                : "border-white/15 bg-[#121212] text-[#D1D5DB] hover:border-white/40 hover:text-white"
            }`}
          >
            TODAS (3)
          </button>
          {SCREENS.map((screen) => (
            <button
              key={screen.slug}
              type="button"
              onClick={() => setSelectedZone(screen.zoneKey)}
              className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                selectedZone === screen.zoneKey
                  ? "border-[#8F0000] bg-[#8F0000] text-white"
                  : "border-white/15 bg-[#121212] text-[#D1D5DB] hover:border-white/40 hover:text-white"
              }`}
            >
              {screen.shortName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
