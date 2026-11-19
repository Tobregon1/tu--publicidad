export interface ScreenLocation {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  corridor: string;
  badge: string;
  zoneKey: "av-3-de-abril" | "av-tte-ibanez" | "av-centenario";
  direction: string;
  format: string;
  schedule: string;
  turnaround: string;
  visibility: string;
  trafficProfile: string;
  intersectionHighlight: string;
  lat: number;
  lng: number;
  image: string;
  summary: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  accent: string;
  featured: boolean;
}

export const BRAND = {
  name: "Tu! Publicidad",
  tagline: "SERVICIOS & PANTALLA LED",
  city: "Corrientes Capital",
  province: "Corrientes, Argentina",
  address: "Zona Güemes, W3402 Corrientes Capital, Argentina",
  whatsappNumber: "543795331385",
  whatsappDisplay: "+54 9 379 533-1385",
  whatsappLocal: "3795-331385",
  instagramHandle: "@tu.publicidad",
  instagramUrl: "https://www.instagram.com/tu.publicidad/",
  facebookHandle: "@tu.publicidad00",
  facebookUrl: "https://www.facebook.com/tu.publicidad00/",
  email: "contacto@tupublicidadcorrientes.com",
  mapCenter: [-27.4785, -58.8235] as [number, number],
  mapZoom: 14,
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SCREENS: ScreenLocation[] = [
  {
    slug: "av-3-de-abril-y-san-lorenzo",
    code: "LED-01",
    name: "PANTALLA LED AV. 3 DE ABRIL Y SAN LORENZO",
    shortName: "Av. 3 de Abril y San Lorenzo",
    corridor: "Corredor Av. 3 de Abril",
    badge: "AV. 3 DE ABRIL",
    zoneKey: "av-3-de-abril",
    direction: "Corredor Puente Gral. Belgrano / Centro",
    format: "Pantalla LED Gigante Full Color HD",
    schedule: "Encendida 24/7 — 365 días",
    turnaround: "Diseño de spot y salida al aire en menos de 24 hs",
    visibility: "Alto brillo solar diurno y máximo impacto nocturno",
    trafficProfile: "Flujo masivo de autos, colectivos urbanos, motos y peatones",
    intersectionHighlight: "Semáforo de detención obligatoria en la arteria más transitada de la ciudad",
    lat: -27.4748,
    lng: -58.8364,
    image: "/media/pantalla-3-de-abril.jpg",
    summary:
      "Ubicación insignia sobre Avenida 3 de Abril y San Lorenzo: una de las esquinas con mayor caudal vehicular de Corrientes Capital, paso obligado hacia el centro y el acceso al Puente General Belgrano. O te ven, o te ven.",
    highlights: [
      "Detención frontal en semáforo con visibilidad limpia a larga distancia.",
      "Cobertura continua sobre colectivos, vehículos particulares y tráfico interprovincial.",
      "Rotación de alta frecuencia las 24 horas, incluso cuando tu local cierra sus puertas.",
      "Incluye asesoramiento creativo y producción del video en menos de 24 horas.",
    ],
  },
  {
    slug: "av-teniente-ibanez-y-gutenberg",
    code: "LED-02",
    name: "PANTALLA LED AV. TENIENTE IBÁÑEZ Y GUTENBERG",
    shortName: "Av. Teniente Ibáñez y Gutenberg",
    corridor: "Corredor Av. Tte. Ibáñez",
    badge: "AV. TTE. IBÁÑEZ",
    zoneKey: "av-tte-ibanez",
    direction: "Esquina comercial con semáforo",
    format: "Pantalla LED Gigante Full Color HD",
    schedule: "Encendida 24/7 — 365 días",
    turnaround: "Diseño de spot y salida al aire en menos de 24 hs",
    visibility: "Colores intensos y contraste superior a pleno sol y de noche",
    trafficProfile: "Tránsito comercial constante, vecinos, motos y transporte diario",
    intersectionHighlight: "Esquina comercial estratégica con tiempo de espera ideal en luz roja",
    lat: -27.4847,
    lng: -58.8213,
    image: "/media/pantalla-tte-ibanez.jpg",
    summary:
      "Posición de altísima exposición diaria en Avenida Teniente Ibáñez y Gutenberg. Tu marca frente a miles de personas cada jornada en una esquina comercial consolidada con flujo continuo de vehículos y peatones.",
    highlights: [
      "Exposición directa frente al público comprador y comercios de la zona.",
      "Tiempo de permanencia óptimo en cada ciclo de semáforo para fijar tu mensaje.",
      "Actualización ágil de promociones, lanzamientos y fechas comerciales.",
      "Apta para pauta individual o combinada con Promos 3×2 y 4×3.",
    ],
  },
  {
    slug: "av-centenario-y-g-pomar",
    code: "LED-03",
    name: "PANTALLA LED AV. CENTENARIO Y G. POMAR",
    shortName: "Av. Centenario y G. Pomar",
    corridor: "Corredor Av. Centenario",
    badge: "AV. CENTENARIO",
    zoneKey: "av-centenario",
    direction: "Cruce estratégico residencial y comercial",
    format: "Pantalla LED Gigante Full Color HD",
    schedule: "Encendida 24/7 — 365 días",
    turnaround: "Diseño de spot y salida al aire en menos de 24 hs",
    visibility: "Alta definición HD con impacto visual continuo 24 hs",
    trafficProfile: "Circulación ininterrumpida hacia zona centro y barrios del este",
    intersectionHighlight: "Cruce clave de alto tránsito y frenado obligatorio en hora pico",
    lat: -27.4767,
    lng: -58.8131,
    image: "/media/pantalla-centenario.jpg",
    summary:
      "Cruce neurálgico sobre Avenida Centenario y G. Pomar: tránsito continuo todo el día y el tiempo de espera perfecto en el semáforo para que nadie pase por alto tu marca en el corredor comercial más dinámico del este capitalino.",
    highlights: [
      "Conecta corredores residenciales con el centro comercial de Corrientes.",
      "Excelente ángulo de lectura tanto para conductores como para peatones.",
      "Máxima repetición diaria: el cerebro necesita ver una marca de 5 a 7 veces para recordarla.",
      "Compatible con campañas sincronizadas de calle + redes sociales.",
    ],
  },
];

export const CIRCUIT_PACK = {
  slug: "circuito-completo",
  badge: "PROMO 3×2 Y 4×3",
  title: "CIRCUITO COMPLETO — 3 PANTALLAS LED EN CORRIENTES",
  subtitle: "Cobertura total en Av. 3 de Abril, Av. Tte. Ibáñez y Av. Centenario",
  format: "Pauta combinada 24/7 + Spot animado en <24 hs",
  image: "/media/circuito-corrientes.jpg",
};

export const COVERAGE_CELLS = [
  {
    label: "AV. 3 DE ABRIL Y SAN LORENZO",
    meta: "Acceso Puente / Centro · LED 24/7",
    href: "/ubicaciones/av-3-de-abril-y-san-lorenzo",
  },
  {
    label: "AV. TTE. IBÁÑEZ Y GUTENBERG",
    meta: "Corredor Comercial · LED 24/7",
    href: "/ubicaciones/av-teniente-ibanez-y-gutenberg",
  },
  {
    label: "AV. CENTENARIO Y G. POMAR",
    meta: "Cruce Estratégico · LED 24/7",
    href: "/ubicaciones/av-centenario-y-g-pomar",
  },
  {
    label: "CIRCUITO COMPLETO (3 ESQUINAS)",
    meta: "Promos 3×2 y 4×3 · Spot en <24 hs",
    href: "/ubicaciones",
  },
];

export const IMPACT_METRICS = [
  {
    value: "24/7",
    label: "ENCENDIDAS SIN INTERRUPCIÓN",
    detail: "Aunque tu local cierre sus puertas, tu marca sigue brillando día y noche.",
  },
  {
    value: "<24 HS",
    label: "SALIDA AL AIRE EXPRÉS",
    detail: "Nos mandás tu propuesta, diseñamos tu video y en menos de 24 hs estás en la calle.",
  },
  {
    value: "3×2",
    label: "PROMO MULTIPLICADOR",
    detail: "Pagás 2 y te llevás 1 de regalo para dominar la recordación en la ciudad.",
  },
  {
    value: "4×3",
    label: "PROMO CIRCUITO TOTAL",
    detail: "Pagás 3 y la 4ta va de regalo. Ideal para lanzamientos y campañas sostenidas.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "pantallas-led",
    title: "PANTALLAS LED 24/7",
    shortTitle: "Pantallas LED 24/7",
    summary:
      "Circuito propio de pantallas LED gigantes en las esquinas más transitadas de Corrientes. Alto brillo solar, emisión ininterrumpida y video listo en menos de 24 hs.",
    description:
      "Convertí cada semáforo en rojo en el escenario más grande de la ciudad. Nuestras 3 pantallas LED de alta definición operan las 24 horas en Av. 3 de Abril y San Lorenzo, Av. Tte. Ibáñez y Gutenberg, y Av. Centenario y G. Pomar.",
    deliverables: [
      "Emisión 24/7 con alto brillo visible a pleno sol y de noche.",
      "Diseño y animación del video comercial en menos de 24 horas.",
      "Flexibilidad para actualizar ofertas, lanzamientos y fechas especiales.",
      "Promociones vigentes 3×2 y 4×3 para maximizar frecuencia e impacto.",
    ],
    ctaLabel: "VER PANTALLAS Y UBICACIONES",
  },
  {
    id: "carteleria",
    title: "CARTELERÍA EXTERIOR",
    shortTitle: "Cartelería Exterior",
    summary:
      "Cartelería comercial, gráfica exterior y soluciones visuales a medida para destacar frentes de locales, comercios y empresas en Corrientes.",
    description:
      "La fachada de tu negocio es tu primer vendedor. Diseñamos y desarrollamos cartelería comercial de alto impacto visual para que tu local se diferencie en la cuadra y transmita solidez desde el primer vistazo.",
    deliverables: [
      "Carteles frontales, marquesinas comerciales e imagen exterior de locales.",
      "Gráfica publicitaria y piezas visuales pensadas para lectura en movimiento.",
      "Asesoramiento en materiales, legibilidad, iluminación y coherencia de marca.",
      "Integración visual entre tu local físico y tus campañas en vía pública.",
    ],
    ctaLabel: "COTIZAR CARTELERÍA",
  },
  {
    id: "redes-sociales",
    title: "REDES SOCIALES & CONTENIDO",
    shortTitle: "Redes Sociales & Contenido",
    summary:
      "¿Redes o calle? ¡Las dos! Gestión integral de Instagram y Facebook, creación de reels, producción audiovisual y estrategias que convierten vistas en ventas.",
    description:
      "Combinar la visibilidad masiva de las pantallas LED con la precisión de las redes sociales es el secreto para dominar la atención en Corrientes. Creamos contenido profesional que conecta con tus clientes todos los días.",
    deliverables: [
      "Planificación mensual, diseño de feed, historias y calendario comercial.",
      "Producción audiovisual: reels dinámicos, videos de producto y motion graphics.",
      "Campañas de pauta digital orientadas a mensajes de WhatsApp y ventas.",
      "Sinergia omnicanal: el mismo mensaje en la pantalla de la esquina y en el celular.",
    ],
    ctaLabel: "POTENCIAR MIS REDES",
  },
  {
    id: "diseno-web",
    title: "DISEÑO WEB & TIENDA ONLINE",
    shortTitle: "Diseño Web & Tienda Online",
    summary:
      "Sitios web institucionales, landing pages orientadas a consultas y tiendas online listas para vender las 24 horas desde cualquier dispositivo.",
    description:
      "Cuando un cliente ve tu marca en la pantalla LED o en redes y te busca en Google, tu web tiene que cerrar la venta. Desarrollamos sitios rápidos, modernos y enfocados en conversión directa.",
    deliverables: [
      "Webs corporativas y landing pages optimizadas para celulares y velocidad.",
      "Tiendas online con catálogo administrable y botón directo de WhatsApp.",
      "Integración con redes sociales, mapas interactivos y formularios de presupuesto.",
      "Estructura SEO pensada para posicionar tu negocio en Corrientes y la región.",
    ],
    ctaLabel: "COTIZAR MI WEB",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿DÓNDE ESTÁN UBICADAS LAS PANTALLAS LED DE TU! PUBLICIDAD?",
    answer:
      "Operamos un circuito propio de 3 pantallas LED gigantes en intersecciones con semáforo de altísimo tránsito en Corrientes Capital: Av. 3 de Abril y San Lorenzo, Av. Teniente Ibáñez y Gutenberg, y Av. Centenario y G. Pomar. Podés explorar las fichas y el mapa interactivo directamente en nuestra sección de inventario.",
  },
  {
    question: "¿QUÉ PASA SI TODAVÍA NO TENGO EL VIDEO PARA LA PANTALLA?",
    answer:
      "¡No necesitás tener nada armado! Nos enviás tu logo, promo o idea por WhatsApp, nuestro equipo creativo diseña y anima el spot pensado específicamente para lectura en vía pública, y en menos de 24 horas tu marca ya está brillando en la calle.",
  },
  {
    question: "¿LAS PANTALLAS SE VEN BIEN DE DÍA Y A PLENO SOL?",
    answer:
      "Sí. Utilizamos pantallas LED exteriores de alta definición y alto brillo solar, calibradas para mantener colores vivos y lectura nítida tanto al mediodía correntino como durante toda la noche, los 7 días de la semana.",
  },
  {
    question: "¿QUÉ PROMOCIONES TIENEN VIGENTES PARA PAUTAR?",
    answer:
      "Contamos con promociones activas diseñadas para que tu marca gane repetición real: Promo 3×2 (pagás 2 y te llevás 1 de regalo) y Promo 4×3 (pagás 3 y la 4ta va de regalo), aplicables según la modalidad de pauta que elijas.",
  },
  {
    question: "¿PUEDO COMBINAR PANTALLA LED CON REDES SOCIALES, CARTELERÍA O WEB?",
    answer:
      "Totalmente. Nuestra especialidad es la estrategia combinada ('¿Redes o calle? ¡Las dos!'): alineamos tu spot en vía pública con creación de reels, gestión de redes, cartelería exterior y diseño web o tienda online para multiplicar el retorno de tu inversión.",
  },
  {
    question: "¿CÓMO RESERVO MI ESQUINA O PIDO UN PRESUPUESTO?",
    answer:
      "Podés elegir una pantalla desde el inventario y completar el formulario de cotización, o escribirnos directo por WhatsApp al +54 9 379 533-1385. Te respondemos rápido, simple y sin vueltas con disponibilidad y opciones a medida.",
  },
];

export const CLIENTS: ClientItem[] = [
  {
    id: "fernanda-motta",
    name: "Fernanda Motta",
    category: "Pastelería Artesanal",
    accent: "#EAB308",
    featured: true,
  },
  {
    id: "indu-nunez",
    name: "Indu Nuñez",
    category: "Indumentaria Mayorista",
    accent: "#58427C",
    featured: true,
  },
  {
    id: "el-constructor",
    name: "El Constructor S.R.L.",
    category: "Corralón & Materiales",
    accent: "#D9381E",
    featured: true,
  },
  {
    id: "nordiet",
    name: "NorDiet",
    category: "Dietética & Naturales",
    accent: "#3F7D20",
    featured: true,
  },
  {
    id: "dulce-dulce",
    name: "Dulce Dulce",
    category: "Tortas & Eventos",
    accent: "#D95D78",
    featured: true,
  },
  {
    id: "petshop-kaffu",
    name: "PetShop Kaffu",
    category: "Mayor y Menor",
    accent: "#C84B11",
    featured: false,
  },
  {
    id: "amic",
    name: "AMIC",
    category: "Servicios & Comercio",
    accent: "#1D4ED8",
    featured: false,
  },
  {
    id: "verdad-presente",
    name: "Verdad Presente",
    category: "Eventos & Comunidad",
    accent: "#111827",
    featured: false,
  },
];
