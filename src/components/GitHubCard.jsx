'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function GitHubCard({ className }) {
  const [contributionData, setContributionData] = useState([])

  useEffect(() => {
    const fetchContributions = async () => {
      const response = await fetch('https://api.github.com/users/nittarab/events');
      const data = await response.json();
      const contributions = Array.from({ length: 16 }, () => Array(7).fill(0));

      data.forEach(event => {
        const date = new Date(event.created_at);
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 112);
        const weekIndex = Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
        const dayIndex = date.getDay();
        if (weekIndex >= 0 && weekIndex < 16) {
          contributions[weekIndex][dayIndex] += 1;
        }
      });

      setContributionData(contributions);
    }

    fetchContributions()
  }, [])

  const getColorClass = (count) => {
    if (count === 0) return 'bg-gray-200'
    if (count < 2) return 'bg-green-200'
    if (count < 4) return 'bg-green-400'
    return 'bg-green-600'
  }

  return (
    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 z-10">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </div>
        <p className="text-lg font-clash-display text-gray-700">GitHub</p>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-16 gap-1">
          {contributionData.map((week, weekIndex) => (
            week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`w-3 h-3 ${getColorClass(day)} rounded-sm`}
                title={`${day} contributions`}
              />
            ))
          ))}
        </div>
      </div>
      <a
        href="https://github.com/nittarab"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white text-center py-1.5 px-3 rounded-full font-clash-display hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-xs">Follow</span>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    </div>
  )
}