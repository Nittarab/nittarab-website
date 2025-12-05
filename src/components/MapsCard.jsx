"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoibml0dGFyYWIiLCJhIjoiY20waDM0cWlvMDZsNTJucXU3ZWN4YXVzaCJ9.wJU1s2WZm2HwYQe2LkT0SA";

export default function MapsCard({ className }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [error, setError] = useState(null);
  const [planePosition, setPlanePosition] = useState({ x: -10, y: 110 });

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/nittarab/cm0h3ap94003u01qkhbhn2x2r",
        center: [8.5416, 47.368],
        zoom: 11,
        interactive: false,
      });

      map.current.on("load", () => {
        const el = document.createElement("div");
        el.className = "custom-marker";
        el.innerHTML = `
          <div class="relative h-7 w-7">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#679BFF] opacity-50" style="animation-duration: 2s;"></span>
            <span class="relative inline-flex rounded-full h-7 w-7 bg-white items-center justify-center">
              <span class="absolute inset-[2px] rounded-full border border-white border-opacity-50"></span>
              <span class="absolute inset-[4px] rounded-full bg-[#679BFF]"></span>
            </span>
          </div>
        `;

        marker.current = new mapboxgl.Marker(el)
          .setLngLat([8.5416, 47.368])
          .addTo(map.current);
      });

      map.current.on("error", (e) => {
        console.error("Mapbox error:", e);
        setError("An error occurred while loading the map.");
      });

      const resizeObserver = new ResizeObserver(() => {
        map.current?.resize();
      });
      resizeObserver.observe(mapContainer.current);
    } catch (err) {
      console.error("Error initializing map:", err);
      setError("Failed to initialize the map.");
    }

    const animatePlane = () => {
      setPlanePosition((prev) => ({
        x: prev.x > 110 ? -10 : prev.x + 0.5,
        y: prev.x > 110 ? 110 : prev.y - 0.5,
      }));
    };

    const animationInterval = setInterval(animatePlane, 80);

    return () => {
      map.current?.remove();
      clearInterval(animationInterval);
    };
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div
      className={`relative bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 hover:scale-105 transition-all h-full ${className}`}
    >
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
      <div className="absolute bottom-4 left-4 bg-white/70 px-2 py-1.5 text-sm shadow rounded-lg">
        <p>Zurich</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/planeshadow.png"
            alt="Plane Shadow"
            width={25}
            height={25}
            className="absolute"
            style={{
              top: `${planePosition.y + 5}%`,
              left: `${planePosition.x + 5}%`,
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
          <Image
            src="/images/plane.png"
            alt="Plane"
            width={25}
            height={25}
            className="absolute"
            style={{
              top: `${planePosition.y}%`,
              left: `${planePosition.x}%`,
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
