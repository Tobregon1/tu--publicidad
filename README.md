# Tu! Publicidad — Sitio Web Institucional e Inventario LED (Corrientes Capital)

Sitio web de **Tu! Publicidad** (`@tu.publicidad`), diseñado con estética arquitectónica oscura de alto contraste (negro obsidiana `#0A0A0A`, rojo carmesí `#8F0000`, tipografías **Anton** + **Inter**, bordes rectos `0px`) e inventario interactivo con mapa Leaflet de sus pantallas LED 24/7 en **Corrientes Capital**.

## Rutas incluidas

- `/` — Home completo (Hero, franja de slogan, cobertura en Corrientes, posiciones clave 2×2, métricas y promos 3×2 / 4×3, grilla de servicios, preguntas frecuentes, clientes reales y footer con formulario de presupuesto).
- `/ubicaciones` — Inventario dividido 50/50 (listado filtrable por corredor/avenida + mapa interactivo Leaflet con sincronización al pasar el cursor).
- `/ubicaciones/[slug]` — Ficha técnica completa de cada pantalla LED con especificaciones, mapa individual y reserva directa por WhatsApp o formulario.
- `/mapa` — Mapa interactivo a ancho completo con marcadores carmesí, popups con foto y directorio directo.
- `/servicios` — Detalle integral de Pantallas LED 24/7, Cartelería Exterior, Redes Sociales & Contenido y Diseño Web & Tienda Online.
- `/contacto` — Página dedicada de contacto y solicitud de cotización.
- `/privacidad` y `/terminos` — Páginas legales.

## Cómo ejecutar en desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Personalización rápida

Toda la información comercial, coordenadas GPS, servicios, clientes, preguntas frecuentes y número de WhatsApp se centraliza en `src/data/catalog.ts`.
Las fotografías de las pantallas están en `public/media/` y pueden reemplazarse en cualquier momento por fotos reales en alta resolución del cliente conservando los mismos nombres de archivo.
