import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, buildWhatsAppUrl } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Servicios Integrales de Publicidad",
  description:
    "Pantallas LED 24/7, cartelería exterior, gestión de redes sociales, creación de contenido audiovisual y diseño web en Corrientes Capital.",
};

export default function ServiciosPage() {
  return (
    <div className="bg-[#0A0A0A] py-14 md:py-22">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C80000]">
          TU! PUBLICIDAD · SERVICIOS &amp; PANTALLA LED
        </p>

        <h1 className="mt-3 font-heading text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
          SERVICIOS DE PUBLICIDAD{" "}
          <span className="text-[#8F0000]">QUE VENDEN</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#D1D5DB]">
          ¿Redes o calle? ¡Las dos! Combinamos el impacto masivo 24/7 de nuestro
          circuito de pantallas LED en Corrientes Capital con cartelería comercial,
          gestión de redes sociales, creación de contenido y diseño web orientado a
          resultados.
        </p>

        {/* Editorial summary list with Felippo signature vertical crimson bar */}
        <div className="mt-12 border-y border-white/10 py-10">
          <h2 className="font-heading text-3xl tracking-wide text-white">
            SOLUCIONES Y PRODUCCIÓN INTEGRAL
          </h2>
          <ul className="mt-5 space-y-2.5 border-l-2 border-[#8F0000] pl-5 text-sm text-[#D1D5DB] md:text-base">
            <li>Circuito propio de 3 pantallas LED gigantes 24/7 en Corrientes Capital.</li>
            <li>Diseño y animación de spots comerciales listos en menos de 24 horas.</li>
            <li>Cartelería exterior y soluciones visuales para comercios y marcas.</li>
            <li>Gestión de redes sociales, reels y producción de contenido profesional.</li>
            <li>Diseño web institucional y tiendas online orientadas a ventas.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <Link href="/ubicaciones" className="text-[#C80000] hover:text-white">
              VER INVENTARIO
            </Link>
            <Link href="/mapa" className="text-white/80 hover:text-white">
              MAPA
            </Link>
            <Link href="/contacto" className="text-white/80 hover:text-white">
              CONTACTO
            </Link>
            <Link href="/privacidad" className="text-white/60 hover:text-white">
              PRIVACIDAD
            </Link>
            <Link href="/terminos" className="text-white/60 hover:text-white">
              TÉRMINOS
            </Link>
          </div>
        </div>

        {/* Detailed Service Blocks */}
        <div className="mt-14 space-y-12">
          {SERVICES.map((service, index) => {
            const waUrl = buildWhatsAppUrl(
              `Hola Tu! Publicidad, quiero consultar presupuesto por el servicio de ${service.shortTitle}.`
            );

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-24 border border-white/10 bg-[#121212] p-7 md:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-[#8F0000] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    SERVICIO 0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
                    CORRIENTES CAPITAL
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-4xl leading-[0.95] tracking-tight text-white md:text-5xl">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#D1D5DB] md:text-base">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 border-l-2 border-[#8F0000] pl-5 md:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#D1D5DB]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C80000]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {service.id === "pantallas-led" ? (
                    <Link
                      href="/ubicaciones"
                      className="inline-flex h-12 items-center gap-2 bg-[#8F0000] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 bg-[#8F0000] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#presupuesto"
                    className="inline-flex h-12 items-center border border-white/20 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
                  >
                    SOLICITAR PRESUPUESTO
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
