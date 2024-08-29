'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThreeJSScene from '../components/ThreeJSScene'

export default function Home() {
  const [isCollapsing, setIsCollapsing] = useState(false)

  const handleCollapseToggle = () => {
    setIsCollapsing(!isCollapsing)
  }

  return (
    <div className="relative min-h-screen font-clash-display">
      <div className="absolute inset-0 z-0">
        <ThreeJSScene isCollapsing={isCollapsing} />
      </div>

      <Head>
        <title>Patrick Barattin - Software Engineer & Entrepreneur</title>
        <meta name="description" content="Personal website of Patrick Barattin, software engineer and entrepreneur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-70 z-10"></div>

      <main className="relative container mx-auto px-4 py-16 flex flex-col items-center z-20">
        <div className="mb-12 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/nittarab_profile.jpg"
              alt="Patrick Barattin"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full opacity-50 animate-pulse"></div>
        </div>

        <h1 className="text-5xl font-clash-display-bold mb-4 text-gray-800">Patrick Barattin</h1>
        <p className="text-xl font-clash-display-light text-gray-600 mb-8 text-center max-w-2xl">
          Software Engineer | Entrepreneur | Builder of Things
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-200">
            <h2 className="text-2xl font-clash-display-semibold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-700 font-clash-display-regular">
              I'm passionate about building innovative solutions and turning ideas into reality. With expertise in Next.js and Tailwind CSS, I create seamless web experiences that blend form and function.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-200">
            <h2 className="text-2xl font-clash-display-semibold mb-4 text-gray-800">My Work</h2>
            <p className="text-gray-700 font-clash-display-regular">
              From personal projects to entrepreneurial ventures, I'm constantly exploring new technologies and pushing the boundaries of what's possible in web development.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCollapseToggle}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            {isCollapsing ? "Expand Shapes" : "Collapse Shapes"}
          </button>
          <Link href="/contact">
            <button className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </main>

      <footer className="relative text-center py-8 text-gray-500 font-clash-display-light z-20">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  )
}