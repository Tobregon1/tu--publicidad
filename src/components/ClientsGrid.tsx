"use client";

import React, { useState } from "react";
import { CLIENTS, ClientItem } from "@/data/catalog";

function ClientLogoArtwork({ client }: { client: ClientItem }) {
  switch (client.id) {
    case "fernanda-motta":
      return (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EAB308] bg-[#FEF9C3] font-serif text-sm font-bold text-[#1E3A8A]">
              FM
            </span>
            <div className="text-left leading-none">
              <p className="font-serif text-base font-extrabold tracking-tight text-[#1E3A8A]">
                Fernanda Motta
              </p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#CA8A04]">
                PASTELERÍA ARTESANAL
              </p>
            </div>
          </div>
        </div>
      );

    case "indu-nunez":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className="bg-[#4C3575] px-2.5 py-1 font-heading text-xl tracking-wider text-white">
            INDU NUÑEZ
          </span>
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#4C3575]">
            INDUMENTARIA MAYORISTA
          </span>
        </div>
      );

    case "el-constructor":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <svg viewBox="0 0 120 18" className="mb-1 h-4 w-24" aria-hidden="true">
            <polyline
              points="10,16 60,3 110,16"
              fill="none"
              stroke="#D9381E"
              strokeWidth="3"
            />
          </svg>
          <p className="font-heading text-lg tracking-wide text-[#111827]">
            EL CONSTRUCTOR <span className="text-[#D9381E]">S.R.L.</span>
          </p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6B7280]">
            CORRALÓN DE MATERIALES
          </p>
        </div>
      );

    case "nordiet":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <div className="inline-flex items-center gap-1 rounded-sm bg-[#FEF08A] px-2.5 py-1">
            <span className="font-sans text-xl font-black tracking-tight text-[#2F6B1E]">
              Nor<span className="text-[#C2410C]">Diet</span>
            </span>
          </div>
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#4B5563]">
            UNA SANA COSTUMBRE
          </span>
        </div>
      );

    case "dulce-dulce":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <p className="font-serif text-xl font-black italic tracking-tight text-[#BE185D]">
            Dulce Dulce
          </p>
          <span className="mt-1 border-t border-[#F472B6] pt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
            TORTAS &amp; EVENTOS
          </span>
        </div>
      );

    case "petshop-kaffu":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className="font-heading text-xl tracking-wide text-[#9A3412]">
            PETSHOP <span className="text-[#111827]">KAFFU</span>
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#B45309]">
            MAYOR Y MENOR · CORRIENTES
          </span>
        </div>
      );

    case "amic":
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className="border-2 border-[#1D4ED8] px-3 py-0.5 font-heading text-2xl tracking-[0.14em] text-[#1D4ED8]">
            AMIC
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#4B5563]">
            PAUTA EN PANTALLA LED
          </span>
        </div>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className="font-heading text-lg tracking-wider text-[#111827]">
            {client.name}
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#6B7280]">
            {client.category}
          </span>
        </div>
      );
  }
}

export function ClientsGrid() {
  const [expanded, setExpanded] = useState(false);

  const visibleClients = expanded ? CLIENTS : CLIENTS.slice(0, 5);

  return (
    <div>
      {/* Exact Felippo sharp white-tile grid: 5 cols collapsed (1 full row), 4 cols expanded (2 full rows of 4 = 8, zero blank gaps) */}
      <div
        className={`grid grid-cols-2 border-l border-t border-[#E5E7EB] ${
          expanded ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3 lg:grid-cols-5"
        }`}
      >
        {visibleClients.map((client) => (
          <div
            key={client.id}
            className="flex h-32 items-center justify-center border-b border-r border-[#E5E7EB] bg-white px-5 py-4 transition-colors hover:bg-[#F9FAFB]"
            title={`${client.name} — ${client.category}`}
          >
            <ClientLogoArtwork client={client} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex h-11 cursor-pointer items-center justify-center rounded-none border border-white/25 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          {expanded ? "MOSTRAR MENOS CLIENTES" : "VER MÁS CLIENTES"}
        </button>
      </div>
    </div>
  );
}
