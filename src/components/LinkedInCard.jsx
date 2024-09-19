export default function LinkedInCard() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden h-28 flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 z-10">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <p className="text-base font-clash-display-medium text-gray-800">Patrick Barattin</p>
      </div>
      <a
        href="https://www.linkedin.com/in/patrick-barattin/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 rounded-full font-clash-display-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-sm">Connect</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    </div>
  )
}