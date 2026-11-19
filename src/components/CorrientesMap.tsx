"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Crosshair } from "lucide-react";
import { BRAND, ScreenLocation } from "@/data/catalog";

interface CorrientesMapProps {
  screens: ScreenLocation[];
  highlightedSlug?: string | null;
  heightClass?: string;
  singleZoom?: number;
  showCenterButton?: boolean;
}

function createCrimsonPin(active: boolean): L.DivIcon {
  const scale = active ? 1.22 : 1;
  const fill = active ? "#C80000" : "#8F0000";
  const ring = active ? "#FFFFFF" : "#1A1A1A";

  return L.divIcon({
    className: "custom-crimson-pin",
    iconSize: [34, 44],
    iconAnchor: [17, 44],
    popupAnchor: [0, -40],
    html: `
      <div style="transform: scale(${scale}); transform-origin: bottom center; transition: transform 160ms ease;">
        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 5px 8px rgba(0,0,0,0.45));">
          <path d="M17 1C8.163 1 1 8.163 1 17C1 28.5 17 43 17 43C17 43 33 28.5 33 17C33 8.163 25.837 1 17 1Z" fill="${fill}" stroke="${ring}" stroke-width="2"/>
          <circle cx="17" cy="16.5" r="5.5" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default function CorrientesMap({
  screens,
  highlightedSlug = null,
  heightClass = "h-[520px]",
  singleZoom = 16,
  showCenterButton = true,
}: CorrientesMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  function fitAllMarkers() {
    const map = mapRef.current;
    if (!map) return;

    if (screens.length === 0) {
      map.setView(BRAND.mapCenter, BRAND.mapZoom, { animate: true });
      return;
    }

    if (screens.length === 1) {
      map.setView([screens[0].lat, screens[0].lng], singleZoom, { animate: true });
      return;
    }

    const bounds = L.latLngBounds(screens.map((s) => [s.lat, s.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 15, animate: true });
  }

  useEffect(() => {
    if (!containerRef.current) return;

    if (!mapRef.current) {
      const map = L.map(containerRef.current, {
        center: BRAND.mapCenter,
        zoom: BRAND.mapZoom,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = map;
    }

    const map = mapRef.current;

    // Clear old markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    screens.forEach((screen) => {
      const marker = L.marker([screen.lat, screen.lng], {
        icon: createCrimsonPin(screen.slug === highlightedSlug),
      }).addTo(map);

      const popupHtml = `
        <div style="width: 248px; background: #0A0A0A; color: #FFFFFF; font-family: Inter, sans-serif;">
          <div style="position: relative; width: 100%; height: 118px; overflow: hidden;">
            <img src="${escapeHtml(screen.image)}" alt="${escapeHtml(screen.shortName)}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
            <span style="position: absolute; top: 8px; left: 8px; background: #8F0000; color: #FFFFFF; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; padding: 3px 7px;">
              ${escapeHtml(screen.badge)}
            </span>
          </div>
          <div style="padding: 12px 14px 14px;">
            <p style="margin: 0; font-family: Anton, Impact, sans-serif; font-size: 17px; line-height: 1.1; letter-spacing: 0.02em; text-transform: uppercase; color: #FFFFFF;">
              ${escapeHtml(screen.shortName)}
            </p>
            <p style="margin: 6px 0 12px; font-size: 11px; color: #9CA3AF; line-height: 1.4;">
              ${escapeHtml(screen.direction)} · 24/7 HD
            </p>
            <a href="/ubicaciones/${encodeURIComponent(screen.slug)}" style="display: block; width: 100%; text-align: center; background: #8F0000; color: #FFFFFF; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; padding: 8px 10px;">
              VER FICHA TÉCNICA →
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 260, minWidth: 248 });
      markersRef.current.set(screen.slug, marker);
    });

    if (screens.length === 1) {
      map.setView([screens[0].lat, screens[0].lng], singleZoom);
    } else if (screens.length > 1) {
      const bounds = L.latLngBounds(screens.map((s) => [s.lat, s.lng] as [number, number]));
      map.fitBounds(bounds, { padding: [56, 56], maxZoom: 15 });
    } else {
      map.setView(BRAND.mapCenter, BRAND.mapZoom);
    }

    return () => {
      // Keep map alive across prop updates; cleanup happens on unmount below
    };
  }, [screens, singleZoom]);

  useEffect(() => {
    markersRef.current.forEach((marker, slug) => {
      marker.setIcon(createCrimsonPin(slug === highlightedSlug));
      if (slug === highlightedSlug) {
        marker.setZIndexOffset(500);
      } else {
        marker.setZIndexOffset(0);
      }
    });
  }, [highlightedSlug]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative w-full border border-white/10 bg-[#121212] ${heightClass}`}>
      <div ref={containerRef} className="h-full w-full" />

      {showCenterButton ? (
        <button
          type="button"
          onClick={fitAllMarkers}
          className="absolute right-3 top-3 z-[400] inline-flex items-center gap-2 rounded-none border border-black/15 bg-white px-3.5 py-2 text-xs font-semibold text-black shadow-md transition-colors hover:bg-[#8F0000] hover:text-white"
        >
          <Crosshair className="h-3.5 w-3.5" />
          Centrar marcadores
        </button>
      ) : null}
    </div>
  );
}
