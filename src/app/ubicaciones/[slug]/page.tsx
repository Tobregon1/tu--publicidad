import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import { SCREENS, buildWhatsAppUrl } from "@/data/catalog";
import { DynamicCorrientesMap } from "@/components/DynamicCorrientesMap";
import { QuoteForm } from "@/components/QuoteForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SCREENS.map((screen) => ({ slug: screen.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const screen = SCREENS.find((s) => s.slug === slug);
  if (!screen) {
    return { title: "Ubicación no encontrada" };
  }
  return {
    title: `${screen.shortName} — Pantalla LED 24/7`,
    description: screen.summary,
  };
}

export default async function ScreenDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const screen = SCREENS.find((s) => s.slug === slug);

  if (!screen) {
    notFound();
  }

  const otherScreens = SCREENS.filter((s) => s.slug !== screen.slug);
  const waHref = buildWhatsAppUrl(
    `Hola Tu! Publicidad, quiero consultar disponibilidad y tarifas para la ${screen.name} (${screen.code}) en Corrientes Capital.`
  );

  const specs = [
    { label: "CÓDIGO", value: screen.code },
    { label: "CORREDOR", value: screen.corridor },
    { label: "SENTIDO / FLUJO", value: screen.direction },
    { label: "FORMATO", value: screen.format },
    { label: "EMISIÓN", value: screen.schedule },
    { label: "VISIBILIDAD", value: screen.visibility },
    { label: "TRÁNSITO", value: screen.trafficProfile },
    { label: "ENTREGA DE SPOT", value: screen.turnaround },
  ];

  return (
    <div className="bg-[#0A0A0A] py-12 md:py-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
          <Link href="/" className="hover:text-white">
            INICIO
          </Link>
          <span>/</span>
          <Link href="/ubicaciones" className="hover:text-white">
            PANTALLAS
          </Link>
          <span>/</span>
          <span className="text-[#C80000]">{screen.badge}</span>
        </div>

        {/* Title Header */}
        <div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <span className="inline-block bg-[#8F0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              {screen.code} · {screen.badge} · CORRIENTES CAPITAL
            </span>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl">
              {screen.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#9CA3AF]">
              <MapPin className="h-4 w-4 text-[#C80000]" />
              <span>{screen.intersectionHighlight}</span>
            </p>
          </div>

          <Link
            href="/ubicaciones"
            className="inline-flex h-11 shrink-0 items-center gap-2 border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            VOLVER AL INVENTARIO
          </Link>
        </div>

        {/* Main 2-Column Technical Sheet */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Photo, Description, Specs, Mini-Map */}
          <div className="space-y-10 lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-black">
              <img
                src={screen.image}
                alt={screen.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 bg-[#8F0000] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                ENCENDIDA 24/7 HD
              </span>
            </div>

            <div>
              <h2 className="font-heading text-3xl tracking-wide text-white">
                PERFIL ESTRATÉGICO DE LA <span className="text-[#8F0000]">ESQUINA</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#D1D5DB]">
                {screen.summary}
              </p>

              <ul className="mt-6 space-y-3 border-l-2 border-[#8F0000] pl-5">
                {screen.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#D1D5DB]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C80000]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs Grid */}
            <div>
              <h2 className="font-heading text-3xl tracking-wide text-white">
                FICHA <span className="text-[#8F0000]">TÉCNICA</span>
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-[#121212] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E52222]">
                      {spec.label}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-white">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exact Intersection Map */}
            <div>
              <h2 className="font-heading text-3xl tracking-wide text-white">
                UBICACIÓN EN <span className="text-[#8F0000]">CORRIENTES</span>
              </h2>
              <p className="mt-2 text-xs text-[#9CA3AF]">
                Coordenadas aproximadas de la intersección: {screen.lat.toFixed(4)},{" "}
                {screen.lng.toFixed(4)}
              </p>
              <div className="mt-4">
                <DynamicCorrientesMap
                  screens={[screen]}
                  highlightedSlug={screen.slug}
                  heightClass="h-[340px]"
                  singleZoom={16}
                  showCenterButton={false}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Reservation & Quote Box */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
            {/* Fast WhatsApp Action Box */}
            <div className="border border-white/10 bg-[#121212] p-6">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E52222]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>PROMOS 3×2 Y 4×3 DISPONIBLES</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[#D1D5DB]">
                Mandanos tu propuesta hoy, armamos tu video animado y en{" "}
                <strong className="text-white">menos de 24 horas</strong> tu marca ya
                está en pantalla.
              </p>

              <div className="mt-4 flex flex-wrap gap-4 border-y border-white/10 py-3 text-xs text-[#9CA3AF]">
                <span className="inline-flex items-center gap-1.5">
                  <MonitorPlay className="h-3.5 w-3.5 text-[#C80000]" />
                  Full Color HD
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#C80000]" />
                  24 hs todos los días
                </span>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-13 w-full items-center justify-center gap-2 bg-[#25D366] px-6 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                RESERVAR ESTA ESQUINA POR WHATSAPP
              </a>
            </div>

            {/* Embedded Screen-Specific Quote Form */}
            <QuoteForm
              heading="COTIZAR ESTA PANTALLA"
              submitLabel="SOLICITAR DISPONIBILIDAD"
              defaultSubject={`Pantalla LED ${screen.shortName} (${screen.code})`}
              variant="card"
              compact
            />
          </div>
        </div>

        {/* Related Positions */}
        <div className="mt-20 border-t border-white/10 pt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-heading text-4xl tracking-tight text-white">
              OTRAS POSICIONES DEL <span className="text-[#8F0000]">CIRCUITO</span>
            </h2>
            <Link
              href="/ubicaciones"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D1D5DB] hover:text-white"
            >
              VER TODAS
              <ArrowRight className="h-4 w-4 text-[#C80000]" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherScreens.map((other) => (
              <Link
                key={other.slug}
                href={`/ubicaciones/${other.slug}`}
                className="group block overflow-hidden border border-white/10 bg-[#121212] transition-colors hover:border-[#8F0000]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 bg-[#8F0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {other.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl tracking-wide text-white">
                    {other.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                    <MapPin className="h-3.5 w-3.5 text-[#C80000]" />
                    {other.direction}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
