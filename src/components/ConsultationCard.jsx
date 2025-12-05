'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ConsultationCard() {
  const [copied, setCopied] = useState(false)
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('p.barattin@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full group"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`
        }}
      />

      {/* Shimmer Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-[1px]"></div>
      
      <div className="relative bg-gray-900 p-6 rounded-2xl h-full flex flex-col justify-between overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-blue-500/20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 group-hover:border-purple-500/50 transition-colors">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash-display-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
              AI Engineering
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Transform your team with <span className="text-purple-400 font-medium">AI Agents</span>, <span className="text-blue-400 font-medium">Copilot</span>, and <span className="text-green-400 font-medium">Cursor</span>. 
            Expert guidance on context engineering and workflow optimization.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          <a 
            href="https://calendar.app.google/qt6ytm3NXidsqPYr8" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-gray-900 py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
          >
            <span>Book Call</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
          <button 
            onClick={handleCopyEmail}
            className="flex-1 bg-gray-800 text-white py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:bg-gray-700 transition-all border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <span className="text-green-400">Copied!</span>
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </>
            ) : (
              <>
                <span>Email Me</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
