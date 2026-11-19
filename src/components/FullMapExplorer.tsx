"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SCREENS } from "@/data/catalog";
import { DynamicCorrientesMap } from "./DynamicCorrientesMap";

export function FullMapExplorer() {
  const [selectedZone, setSelectedZone] = useState("all");

  const filteredScreens = useMemo(() => {
    if (selectedZone === "all") return SCREENS;
    return SCREENS.filter((s) => s.zoneKey === selectedZone);
  }, [selectedZone]);

  return (
    <div>
      {/* Exact Felippo /mapa/ Filter Bar */}
      <div className="border border-white/10 bg-[#121212] p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="w-full max-w-md">
            <label
              htmlFor="map-zone-filter"
              className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#9CA3AF]"
            >
              FILTRAR MAPA POR AVENIDA O ZONA
            </label>
            <select
              id="map-zone-filter"
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="h-12 w-full rounded-none border border-[#262626] bg-[#0A0A0A] px-4 text-sm font-medium text-white focus:border-[#8F0000] focus:outline-none"
            >
              <option value="all">Todas las esquinas de Corrientes (3)</option>
              <option value="av-3-de-abril">Av. 3 de Abril y San Lorenzo (1)</option>
              <option value="av-tte-ibanez">Av. Teniente Ibáñez y Gutenberg (1)</option>
              <option value="av-centenario">Av. Centenario y G. Pomar (1)</option>
            </select>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-heading text-4xl leading-none text-[#C80000]">
              {filteredScreens.length}
            </span>
            <span className="font-heading text-xl tracking-wide text-[#9CA3AF]">
              {filteredScreens.length === 1 ? "UBICACIÓN" : "UBICACIONES"}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Interactive Map */}
      <div className="mt-6">
        <DynamicCorrientesMap
          screens={filteredScreens}
          heightClass="h-[540px] md:h-[620px]"
        />
      </div>

      {/* Crawlable Directory below map (exact Felippo /mapa/ structure) */}
      <div className="mt-12 border-t border-white/10 pt-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C80000]">
              CIRCUITO CORRIENTES CAPITAL
            </p>
            <h2 className="mt-1 font-heading text-3xl tracking-wide text-white md:text-4xl">
              UBICACIONES DEL <span className="text-[#8F0000]">MAPA</span>
            </h2>
          </div>

          <Link
            href="/ubicaciones"
            className="inline-flex h-11 items-center justify-center gap-2 border border-white/25 px-6 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-[#8F0000] hover:bg-[#8F0000]"
          >
            VER INVENTARIO CON FOTOS Y FILTROS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
          {SCREENS.map((screen) => (
            <Link
              key={screen.slug}
              href={`/ubicaciones/${screen.slug}`}
              className="group flex flex-col justify-between bg-[#121212] p-6 transition-colors hover:bg-[#191919]"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C80000]">
                  {screen.code} · {screen.badge}
                </p>
                <h3 className="mt-2 font-heading text-2xl leading-tight tracking-wide text-white">
                  {screen.shortName}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C80000]" />
                  <span>{screen.direction}</span>
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors group-hover:text-[#C80000]">
                ABRIR FICHA TÉCNICA
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
