"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { SERVICES } from "@/data/catalog";

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isUbicacionesActive = pathname.startsWith("/ubicaciones");
  const isMapaActive = pathname.startsWith("/mapa");
  const isServiciosActive = pathname.startsWith("/servicios");
  const isContactoActive = pathname.startsWith("/contacto");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/20 bg-[#8F0000]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Tu! Publicidad - Inicio"
          className="transition-opacity hover:opacity-90"
        >
          <BrandMark variant="header" />
        </Link>

        {/* Desktop Nav — exact clean Felippo rhythm with WCAG-compliant contrast */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          <Link
            href="/ubicaciones"
            className={`py-1 text-sm font-semibold tracking-wide transition-colors ${
              isUbicacionesActive
                ? "border-b-2 border-white text-white"
                : "text-white/90 hover:text-white"
            }`}
          >
            Ubicaciones de pantallas
          </Link>

          <Link
            href="/mapa"
            className={`py-1 text-sm font-semibold tracking-wide transition-colors ${
              isMapaActive
                ? "border-b-2 border-white text-white"
                : "text-white/90 hover:text-white"
            }`}
          >
            Mapa
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={`inline-flex cursor-pointer items-center gap-1.5 py-1 text-sm font-semibold tracking-wide transition-colors ${
                isServiciosActive || servicesOpen
                  ? "border-b-2 border-white text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>Más servicios</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-150 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-68 border border-white/15 bg-[#0A0A0A] py-2 shadow-2xl"
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    role="menuitem"
                    href={`/servicios#${service.id}`}
                    onClick={() => setServicesOpen(false)}
                    className="block border-l-2 border-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#E5E7EB] transition-colors hover:border-[#E52222] hover:bg-[#141414] hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
                <div className="mt-1 border-t border-white/10 pt-1">
                  <Link
                    role="menuitem"
                    href="/servicios"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E52222] transition-colors hover:bg-[#141414] hover:text-white"
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/contacto"
            className={`py-1 text-sm font-semibold tracking-wide transition-colors ${
              isContactoActive
                ? "border-b-2 border-white text-white"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:bg-black/20 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#0A0A0A] px-6 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/ubicaciones"
              className="font-heading text-2xl tracking-wide text-white hover:text-[#C80000]"
            >
              UBICACIONES DE PANTALLAS
            </Link>
            <Link
              href="/mapa"
              className="font-heading text-2xl tracking-wide text-white hover:text-[#C80000]"
            >
              MAPA DE CORRIENTES
            </Link>
            <div className="border-y border-white/10 py-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C80000]">
                SERVICIOS
              </p>
              <div className="flex flex-col space-y-2.5 pl-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicios#${service.id}`}
                    className="text-sm font-medium text-[#D1D5DB] hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contacto"
              className="font-heading text-2xl tracking-wide text-white hover:text-[#C80000]"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
