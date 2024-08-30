import Image from 'next/image'

export default function SubstackCard() {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-3 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden h-28 flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 z-10">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
        </div>
        <p className="text-sm font-clash-display-bold text-gray-800">Nittarab</p>
      </div>
      <a
        href="https://nittarab.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-1.5 rounded-full font-clash-display-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-xs">Subscribe</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    </div>
  )
}