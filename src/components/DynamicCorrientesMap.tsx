"use client";

import dynamic from "next/dynamic";
import type { ScreenLocation } from "@/data/catalog";

const CorrientesMap = dynamic(() => import("./CorrientesMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] w-full items-center justify-center border border-white/10 bg-[#121212] text-xs font-semibold uppercase tracking-[0.18em] text-[#999999]">
      CARGANDO MAPA INTERACTIVO DE CORRIENTES...
    </div>
  ),
});

interface DynamicCorrientesMapProps {
  screens: ScreenLocation[];
  highlightedSlug?: string | null;
  heightClass?: string;
  singleZoom?: number;
  showCenterButton?: boolean;
}

export function DynamicCorrientesMap(props: DynamicCorrientesMapProps) {
  return <CorrientesMap {...props} />;
}
