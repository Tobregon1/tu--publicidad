import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad y tratamiento de datos de contacto de ${BRAND.name}.`,
};

export default function PrivacidadPage() {
  return (
    <div className="bg-[#0A0A0A] py-16 md:py-22">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C80000]">
          INFORMACIÓN LEGAL
        </p>
        <h1 className="mt-2 font-heading text-5xl leading-[0.92] tracking-tight text-white">
          POLÍTICA DE <span className="text-[#8F0000]">PRIVACIDAD</span>
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#D1D5DB]">
          <p>
            En <strong>{BRAND.name}</strong> respetamos tu privacidad. Los datos
            ingresados voluntariamente en nuestros formularios de presupuesto (empresa,
            nombre, teléfono o email y detalles de la campaña) se utilizan
            exclusivamente para responder consultas comerciales, verificar disponibilidad
            de nuestras pantallas LED en Corrientes Capital y enviar cotizaciones a
            medida.
          </p>
          <p>
            No vendemos, alquilamos ni compartimos tu información personal con terceros
            ajenos a la gestión comercial de tu solicitud.
          </p>
          <p>
            Para solicitar la actualización o eliminación de tus datos de contacto,
            podés escribirnos en cualquier momento por WhatsApp al{" "}
            <strong className="text-white">{BRAND.whatsappDisplay}</strong> o a través
            de nuestro Instagram oficial{" "}
            <strong className="text-white">{BRAND.instagramHandle}</strong>.
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
