'use client'

import { useEffect } from 'react'

export default function MapsCard() {
  useEffect(() => {
    // Initialize map here (you'll need to implement this)
  }, [])

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-200">
      <h2 className="text-2xl font-clash-display-semibold mb-4 text-gray-800">Location</h2>
      <div id="map" className="h-64 w-full rounded-lg"></div>
    </div>
  )
}