'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoibml0dGFyYWIiLCJhIjoiY20waDM0cWlvMDZsNTJucXU3ZWN4YXVzaCJ9.wJU1s2WZm2HwYQe2LkT0SA'

export default function MapsCard() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const marker = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/nittarab/cm0h3ap94003u01qkhbhn2x2r',
        center: [8.5416, 47.368],
        zoom: 11,
        interactive: false
      })

      map.current.on('load', () => {
        const el = document.createElement('div')
        el.className = 'custom-marker'
        el.innerHTML = `
          <div class="relative h-7 w-7">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#679BFF] opacity-50" style="animation-duration: 2s;"></span>
            <span class="relative inline-flex rounded-full h-7 w-7 bg-white items-center justify-center">
              <span class="absolute inset-[2px] rounded-full border border-white border-opacity-50"></span>
              <span class="absolute inset-[4px] rounded-full bg-[#679BFF]"></span>
            </span>
          </div>
        `

        marker.current = new mapboxgl.Marker(el)
          .setLngLat([8.5416, 47.368])
          .addTo(map.current)
      })

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e)
        setError('An error occurred while loading the map.')
      })

    } catch (err) {
      console.error('Error initializing map:', err)
      setError('Failed to initialize the map.')
    }

    return () => map.current?.remove()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 hover:scale-105 transition-all">
      <div ref={mapContainer} className="w-full h-64 rounded-lg" />
      <div className="absolute bottom-4 left-4 bg-white/70 px-2 py-1.5 text-sm shadow rounded-lg">
        <p>Zurich</p>
      </div>
    </div>
  )
}