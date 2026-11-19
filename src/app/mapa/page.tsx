import type { Metadata } from "next";
import { FullMapExplorer } from "@/components/FullMapExplorer";

export const metadata: Metadata = {
  title: "Mapa de Pantallas LED en Corrientes",
  description:
    "Explorá geográficamente las 3 pantallas LED gigantes activas de Tu! Publicidad en Corrientes Capital.",
};

export default function MapaPage() {
  return (
    <div className="bg-[#0A0A0A] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C80000]">
          UBICACIONES ACTIVAS · CORRIENTES CAPITAL
        </p>

        <h1 className="mt-2 font-heading text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
          MAPA DE <span className="text-[#8F0000]">PANTALLAS</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] md:text-base">
          Explorá geográficamente las posiciones LED activas de Tu! Publicidad.
          Seleccioná un marcador para ver la vista previa de la esquina y abrir su ficha
          técnica o consultá el inventario completo.
        </p>

        <div className="mt-10">
          <FullMapExplorer />
        </div>
      </div>
    </div>
  );
}
