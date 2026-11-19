import React from "react";

interface BrandMarkProps {
  variant?: "header" | "dark" | "mono";
  className?: string;
}

export function BrandMark({ variant = "header", className = "" }: BrandMarkProps) {
  if (variant === "mono") {
    return (
      <div className={`inline-flex flex-col leading-none select-none ${className}`}>
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-xl tracking-wide text-white/80">TU!</span>
          <span className="font-sans text-lg font-extrabold tracking-tight text-white/70">
            Publicidad
          </span>
        </div>
        <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
          SERVICIOS &amp; PANTALLA LED
        </span>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className={`inline-flex flex-col leading-none select-none ${className}`}>
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-3xl tracking-wide text-[#C80000]">TU!</span>
          <span className="font-sans text-2xl font-black tracking-tight text-white">
            Publicidad
          </span>
        </div>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
          SERVICIOS &amp; <span className="text-[#C80000]">PANTALLA LED</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col leading-none select-none ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className="inline-block bg-white px-1.5 py-0.5 font-heading text-2xl leading-none tracking-wide text-[#8F0000]">
          TU!
        </span>
        <span className="font-sans text-[22px] font-black leading-none tracking-tight text-white">
          Publicidad
        </span>
      </div>
      <span className="mt-1 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/90">
        <span>SERVICIOS &amp; PANTALLA LED</span>
      </span>
    </div>
  );
}
