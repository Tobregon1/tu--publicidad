import type { Metadata } from "next";
import { InventoryExplorer } from "@/components/InventoryExplorer";

export const metadata: Metadata = {
  title: "Nuestro Inventario de Pantallas LED",
  description:
    "Explorá nuestras pantallas LED gigantes 24/7 en Corrientes Capital: Av. 3 de Abril y San Lorenzo, Av. Teniente Ibáñez y Gutenberg, y Av. Centenario y G. Pomar.",
};

export default function UbicacionesPage() {
  return (
    <div className="bg-[#0A0A0A] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h1 className="font-heading text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
          NUESTRO <span className="text-[#8F0000]">INVENTARIO</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] md:text-base">
          Compará fotografías, intersecciones con semáforo y perfiles de tránsito en
          Corrientes Capital. Filtrá el circuito por avenida y abrí cada ficha para
          reservar tu espacio.
        </p>

        <div className="mt-10">
          <InventoryExplorer />
        </div>
      </div>
    </div>
  );
}
