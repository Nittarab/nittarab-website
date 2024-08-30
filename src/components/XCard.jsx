import Image from 'next/image'

export default function XCard() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden h-28 flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 z-10">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <p className="text-sm font-clash-display-bold text-gray-800">@nittarab</p>
      </div>
      <a
        href="https://x.com/intent/user?screen_name=nittarab"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-1.5 rounded-full font-clash-display-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-xs">Follow</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    </div>
  )
}