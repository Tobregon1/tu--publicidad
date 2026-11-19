import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de contratación de espacios LED y servicios de ${BRAND.name}.`,
};

export default function TerminosPage() {
  return (
    <div className="bg-[#0A0A0A] py-16 md:py-22">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C80000]">
          INFORMACIÓN LEGAL
        </p>
        <h1 className="mt-2 font-heading text-5xl leading-[0.92] tracking-tight text-white">
          TÉRMINOS Y <span className="text-[#8F0000]">CONDICIONES</span>
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#D1D5DB]">
          <p>
            La información publicada en el sitio web de <strong>{BRAND.name}</strong>{" "}
            tiene carácter informativo y comercial. La disponibilidad efectiva de
            espacios en las pantallas LED de Corrientes Capital, las promociones
            vigentes (incluyendo 3×2 y 4×3) y los plazos de producción se confirman de
            forma directa al emitir el presupuesto comercial correspondiente.
          </p>
          <p>
            Las piezas gráficas y audiovisuales emitidas en vía pública deben cumplir
            con la normativa municipal vigente en la Ciudad de Corrientes y contar con
            la aprobación previa del cliente antes de su publicación.
          </p>
          <p>
            Ante cualquier consulta sobre contrataciones, renovaciones o cambios de
            piezas durante tu campaña, comunicate con nuestro equipo al{" "}
            <strong className="text-white">{BRAND.whatsappDisplay}</strong>.
          </p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C80000] hover:text-white"
          >
            ← VOLVER AL INICIO
          </Link>
        </div>
      </div>
    </div>
  );
}
