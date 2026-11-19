import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0A0A0A] px-5 py-20">
      <div className="max-w-xl text-center">
        <p className="font-heading text-8xl leading-none text-[#8F0000]">404</p>
        <h1 className="mt-4 font-heading text-4xl tracking-tight text-white sm:text-5xl">
          UBICACIÓN NO ENCONTRADA
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
          La página o pantalla que estás buscando no está disponible o cambió de
          dirección. Podés volver al inicio o explorar el inventario activo de
          Corrientes Capital.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 bg-[#8F0000] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            VOLVER AL INICIO
          </Link>
          <Link
            href="/ubicaciones"
            className="inline-flex h-12 items-center border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
          >
            VER PANTALLAS LED
          </Link>
        </div>
      </div>
    </div>
  );
}
