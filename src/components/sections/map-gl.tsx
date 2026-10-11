"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import { Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Translations } from "@/lib/translations";

const SHOP_COORDINATES: [number, number] = [21.79957, 61.48446];
const SHOP_ZOOM = 16.5;

async function fetchAndThemeStyle(): Promise<any> {
    const res = await fetch("https://tiles.openfreemap.org/styles/liberty");
    const style = await res.json();

    const theme = {
        bg: "#1A3A2A",
        water: "#2D4A3E",
        building: "#2A4D3E",
        road: "#B8A582",
    };

    return {
        ...style,
        sprite: undefined,
        layers: style.layers.map((layer: any) => {
            const newLayer = { ...layer };

            // Scrub all paint/layout properties for potential sprite references
            if (newLayer.paint) {
                Object.keys(newLayer.paint).forEach(key => {
                    if (key.endsWith("-pattern")) delete newLayer.paint[key];
                });
            }
            if (newLayer.layout) {
                Object.keys(newLayer.layout).forEach(key => {
                    if (key.endsWith("-image")) delete newLayer.layout[key];
                    if (key === "pattern") delete newLayer.layout[key];
                });
            }

            if (!newLayer.paint) newLayer.paint = {};

            if (newLayer.type === "background") {
              newLayer.paint["background-color"] = theme.bg;
            } else if (newLayer.type === "fill") {
                if (newLayer["source-layer"] === "water") newLayer.paint["fill-color"] = theme.water;
                if (newLayer["source-layer"] === "building" || newLayer.id.includes("building") || newLayer.id.includes("residential")) {
                    newLayer.paint["fill-color"] = theme.building;
                    newLayer.paint["fill-outline-color"] = "#1A3A2A";
                }
            } else if (newLayer.type === "line" && newLayer["source-layer"] === "transportation") {
                newLayer.paint["line-color"] = theme.road;
            } else if (newLayer.type === "symbol") {
                newLayer.paint["text-color"] = "#FDFCF9";
                newLayer.paint["text-halo-color"] = "#1A3A2A";
            }
            return newLayer;
        })
    };
}

function buildPinElement(label: string): HTMLElement {
  const pin = document.createElement("div");
  pin.style.cssText = `display: flex; flex-direction: column; align-items: center; cursor: pointer;`;

  const dot = document.createElement("div");
  dot.style.cssText = `width: 32px; height: 32px; border-radius: 50%; background: #B8A582; border: 3px solid #1A3A2A; display: flex; align-items: center; justify-content: center;`;

  const logo = document.createElement("img");
  logo.src = "/logo.svg";
  logo.style.cssText = "width: 14px; height: 14px; filter: invert(1);";
  dot.appendChild(logo);
  pin.appendChild(dot);

  const tag = document.createElement("span");
  tag.textContent = label;
  tag.style.cssText = `margin-top: 6px; padding: 3px 10px; border-radius: 99px; background: rgba(26, 58, 42, 0.95); color: #FDFCF9; font-size: 12px;`;
  pin.appendChild(tag);

  return pin;
}

export default function ShopMap({ t, className }: { t: Translations; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let map: MapLibreMap;

    const initMap = async () => {
        try {
            const [maplibregl, themedStyle] = await Promise.all([import("maplibre-gl"), fetchAndThemeStyle()]);
            map = new maplibregl.Map({ container, style: themedStyle, center: SHOP_COORDINATES, zoom: SHOP_ZOOM });
            mapRef.current = map;

            map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

            const geolocate = new maplibregl.GeolocateControl({
                positionOptions: { enableHighAccuracy: true },
                trackUserLocation: true,
                showUserLocation: true,
            });
            map.addControl(geolocate, "top-left");

            new maplibregl.Marker({ element: buildPinElement(t.map.pinLabel), anchor: "bottom" })
              .setLngLat(SHOP_COORDINATES)
              .addTo(map);

            map.on("load", () => setReady(true));
        } catch (e) { console.error("Map init failed", e); }
    };

    initMap();
    return () => map?.remove();
  }, []);

  return (
    <div className={cn("relative rounded-2xl overflow-hidden min-h-[380px] w-full h-full", className)}>
      <div ref={containerRef} className="w-full h-full absolute inset-0" />
      {!ready && <div className="absolute inset-0 flex items-center justify-center bg-forest-dark/80 text-champagne-light">Loading...</div>}

      <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => {
            const el = document.querySelector(".maplibregl-ctrl-zoom-in");
            el?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/25 bg-forest-dark/75 text-champagne-light shadow-lg backdrop-blur-md transition-colors hover:bg-forest hover:text-text-inverse"
          aria-label="Zoom in"
        >
          <span className="text-lg leading-none">+</span>
        </button>
        <button
          type="button"
          onClick={() => {
            const el = document.querySelector(".maplibregl-ctrl-zoom-out");
            el?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/25 bg-forest-dark/75 text-champagne-light shadow-lg backdrop-blur-md transition-colors hover:bg-forest hover:text-text-inverse"
          aria-label="Zoom out"
        >
          <span className="text-lg leading-none">−</span>
        </button>
        <button
          type="button"
          onClick={() => {
            const el = document.querySelector(".maplibregl-ctrl-geolocate");
            el?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/25 bg-forest-dark/75 text-champagne-light shadow-lg backdrop-blur-md transition-colors hover:bg-forest hover:text-text-inverse"
          aria-label="My location"
        >
          <Navigation size={16} />
        </button>
      </div>
    </div>
  );
}
