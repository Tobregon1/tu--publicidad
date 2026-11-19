"use client";

import React, { useId, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/catalog";

interface QuoteFormProps {
  heading?: string;
  submitLabel?: string;
  defaultSubject?: string;
  compact?: boolean;
  variant?: "footer" | "card";
}

export function QuoteForm({
  heading = "SOLICITAR PRESUPUESTO",
  submitLabel = "ENVIAR CONSULTA",
  defaultSubject = "",
  compact = false,
  variant = "footer",
}: QuoteFormProps) {
  const uid = useId();
  const [empresa, setEmpresa] = useState("");
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [servicio, setServicio] = useState(
    defaultSubject || "Pantallas LED 24/7 (Circuito Corrientes)"
  );
  const [detalle, setDetalle] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [waHandoffUrl, setWaHandoffUrl] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!empresa.trim() || !nombre.trim() || !contacto.trim() || !detalle.trim()) {
      setErrorMsg("Completá todos los campos obligatorios para poder cotizarte.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const composedWhatsApp = buildWhatsAppUrl(
      [
        "Hola Tu! Publicidad, solicito presupuesto desde la web:",
        `• Empresa / Marca: ${empresa.trim()}`,
        `• Nombre: ${nombre.trim()}`,
        `• Contacto: ${contacto.trim()}`,
        `• Interés: ${servicio}`,
        `• Detalle: ${detalle.trim()}`,
      ].join("\n")
    );

    try {
      const res = await fetch("/api/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empresa: empresa.trim(),
          nombre: nombre.trim(),
          contacto: contacto.trim(),
          servicio,
          detalle: detalle.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No pudimos registrar tu consulta.");
      }

      setWaHandoffUrl(composedWhatsApp);
      setStatus("success");
    } catch (err) {
      setWaHandoffUrl(composedWhatsApp);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Hubo un problema temporal. Podés enviarnos la consulta directo por WhatsApp."
      );
      setStatus("error");
    }
  }

  function handleReset() {
    setEmpresa("");
    setNombre("");
    setContacto("");
    setDetalle("");
    setStatus("idle");
    setErrorMsg("");
  }

  const wrapperClass =
    variant === "card"
      ? "bg-[#121212] border border-white/10 border-t-2 border-t-[#8F0000] p-7 md:p-9"
      : "bg-[#0A0A0A] border border-white/10 p-7 md:p-9";

  return (
    <div className={wrapperClass}>
      <h3 className="font-heading text-2xl md:text-3xl tracking-wide text-white">
        {heading}
      </h3>

      {status === "success" ? (
        <div className="mt-6 border border-white/15 bg-[#121212] p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#25D366]" />
            <div>
              <p className="font-heading text-xl tracking-wide text-white">
                ¡CONSULTA RECIBIDA!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                Gracias, <span className="font-semibold text-white">{nombre}</span>. Ya
                registramos tu solicitud para{" "}
                <span className="font-semibold text-white">{empresa}</span>. Si querés
                respuesta inmediata en minutos, podés disparar este mismo resumen a nuestro
                WhatsApp comercial.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={waHandoffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 bg-[#25D366] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              ENVIAR AHORA POR WHATSAPP
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-12 cursor-pointer items-center justify-center border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
            >
              NUEVA CONSULTA
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label
              htmlFor={`${uid}-empresa`}
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
            >
              EMPRESA / MARCA *
            </label>
            <input
              id={`${uid}-empresa`}
              name="empresa"
              type="text"
              required
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="Ej. Tu Comercio o Emprendimiento"
              className="h-11 w-full rounded-none border border-[#262626] bg-[#141414] px-3.5 text-sm text-white placeholder:text-[#666666] focus:border-[#8F0000] focus:outline-none"
            />
          </div>

          <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}>
            <div>
              <label
                htmlFor={`${uid}-nombre`}
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
              >
                NOMBRE *
              </label>
              <input
                id={`${uid}-nombre`}
                name="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="h-11 w-full rounded-none border border-[#262626] bg-[#141414] px-3.5 text-sm text-white placeholder:text-[#666666] focus:border-[#8F0000] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor={`${uid}-contacto`}
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
              >
                WHATSAPP O EMAIL *
              </label>
              <input
                id={`${uid}-contacto`}
                name="contacto"
                type="text"
                required
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                placeholder="3795-000000 o mail@empresa.com"
                className="h-11 w-full rounded-none border border-[#262626] bg-[#141414] px-3.5 text-sm text-white placeholder:text-[#666666] focus:border-[#8F0000] focus:outline-none"
              />
            </div>
          </div>

          {!compact ? (
            <div>
              <label
                htmlFor={`${uid}-servicio`}
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
              >
                UBICACIÓN O SERVICIO
              </label>
              <select
                id={`${uid}-servicio`}
                name="servicio"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="h-11 w-full rounded-none border border-[#262626] bg-[#141414] px-3.5 text-sm text-white focus:border-[#8F0000] focus:outline-none"
              >
                {defaultSubject ? (
                  <option value={defaultSubject}>{defaultSubject}</option>
                ) : null}
                <option value="Pantallas LED 24/7 (Circuito Corrientes)">
                  Pantallas LED 24/7 — Circuito Completo (Promo 3×2 / 4×3)
                </option>
                <option value="Pantalla LED Av. 3 de Abril y San Lorenzo">
                  Pantalla LED — Av. 3 de Abril y San Lorenzo
                </option>
                <option value="Pantalla LED Av. Teniente Ibáñez y Gutenberg">
                  Pantalla LED — Av. Teniente Ibáñez y Gutenberg
                </option>
                <option value="Pantalla LED Av. Centenario y G. Pomar">
                  Pantalla LED — Av. Centenario y G. Pomar
                </option>
                <option value="Cartelería Exterior Comercial">
                  Cartelería Exterior Comercial
                </option>
                <option value="Redes Sociales & Creación de Contenido">
                  Redes Sociales &amp; Creación de Contenido
                </option>
                <option value="Diseño Web & Tienda Online">
                  Diseño Web &amp; Tienda Online
                </option>
              </select>
            </div>
          ) : null}

          <div>
            <label
              htmlFor={`${uid}-detalle`}
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
            >
              DETALLE DEL PROYECTO *
            </label>
            <textarea
              id={`${uid}-detalle`}
              name="detalle"
              required
              rows={compact ? 3 : 4}
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              placeholder="Contanos tu rubro, fechas estimadas, si querés promo 3×2 o 4×3, o qué servicio necesitás..."
              className="w-full resize-none rounded-none border border-[#262626] bg-[#141414] p-3.5 text-sm text-white placeholder:text-[#666666] focus:border-[#8F0000] focus:outline-none"
            />
          </div>

          {status === "error" && errorMsg ? (
            <div className="border border-[#E52222] bg-[#8F0000]/25 px-4 py-3 text-xs text-white">
              {errorMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-none bg-[#8F0000] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black disabled:opacity-60"
          >
            <Send className="h-3.5 w-3.5" />
            {status === "submitting" ? "ENVIANDO..." : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
