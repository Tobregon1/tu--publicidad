import React from "react";
import { BRAND, buildWhatsAppUrl } from "@/data/catalog";

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(
    "Hola Tu! Publicidad, quiero consultar disponibilidad y tarifas de las pantallas LED en Corrientes."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${BRAND.name}`}
      title={`WhatsApp ${BRAND.whatsappDisplay}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-white"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M16.002 3C8.832 3 3 8.832 3 16.002c0 2.29.6 4.525 1.737 6.494L3 29l6.678-1.713a12.95 12.95 0 0 0 6.324 1.644h.006c7.168 0 12.996-5.83 12.996-12.998C29.004 8.832 23.172 3 16.002 3Zm0 23.732h-.005a10.72 10.72 0 0 1-5.468-1.498l-.392-.233-3.963 1.017 1.058-3.864-.255-.406a10.716 10.716 0 0 1-1.644-5.746c0-5.919 4.815-10.733 10.737-10.733 2.867 0 5.562 1.118 7.588 3.146a10.67 10.67 0 0 1 3.142 7.592c0 5.918-4.815 10.725-10.798 10.725Zm5.887-8.037c-.322-.161-1.908-.942-2.204-1.05-.296-.108-.511-.161-.726.161-.215.323-.834 1.05-1.022 1.265-.188.215-.377.242-.699.081-.322-.161-1.362-.502-2.594-1.6-.959-.855-1.606-1.911-1.794-2.234-.188-.323-.02-.497.141-.658.145-.144.323-.377.484-.565.161-.188.215-.323.323-.538.108-.215.054-.403-.027-.565-.081-.161-.726-1.749-.995-2.395-.262-.629-.528-.544-.726-.554l-.618-.011c-.215 0-.565.081-.861.403-.296.323-1.129 1.104-1.129 2.691s1.156 3.122 1.317 3.337c.161.215 2.275 3.473 5.511 4.871.77.333 1.371.531 1.84.68.773.246 1.477.211 2.033.128.62-.093 1.908-.78 2.177-1.533.269-.753.269-1.399.188-1.534-.08-.135-.296-.215-.618-.377Z" />
      </svg>
    </a>
  );
}
