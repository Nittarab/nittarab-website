'use client'

import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import XCard from '../components/XCard'
import SubstackCard from '../components/SubstackCard'
import LinkedInCard from '../components/LinkedInCard'
import MapsCard from '../components/MapsCard'
import GitHubCard from '../components/GitHubCard'

export default function Home() {
  const [isGitHubCardLoaded, setIsGitHubCardLoaded] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white font-clash-display">
      <Head>
        <title>Patrick Barattin - Software Engineer & Entrepreneur</title>
        <meta name="description" content="Personal website of Patrick Barattin, software engineer and entrepreneur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
          <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center lg:justify-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/nittarab_profile.jpg"
                alt="Patrick Barattin"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-clash-display-semibold mb-4 sm:mb-6 text-gray-800 text-center lg:text-left">Patrick Barattin</h1>
          <p className="text-base sm:text-lg font-clash-display-light text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer
          </p>
          <p className="text-sm sm:text-base font-clash-display-light text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            By day, I&apos;m dedicated to enhancing e-commerce at on.com
          </p>
          <p className="text-sm sm:text-base font-clash-display-light text-gray-600 mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            By night, I&apos;m building projects and reading more on my Substack.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Link href="/projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-clash-display-medium relative overflow-hidden group text-center">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link href="/contact" className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gray-300 hover:shadow-lg transition-all duration-300 text-sm font-clash-display-medium relative overflow-hidden group text-center">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-2/3 grid gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0 mt-12 lg:mt-0">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 auto-rows-auto gap-6">
            <XCard />
            <SubstackCard />
            <LinkedInCard />
            <div className="col-span-1">
              {isGitHubCardLoaded && <MapsCard />}
            </div>
            <div className="col-span-2">
              <GitHubCard onLoad={() => setIsGitHubCardLoaded(true)} />
            </div>
          </div>

          {/* Mobile-Tablet Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
            <XCard />
            <SubstackCard />  
            {isGitHubCardLoaded && <MapsCard className="col-span-1 sm:col-span-2" />}
            <GitHubCard onLoad={() => setIsGitHubCardLoaded(true)} className="col-span-1 " />
            <LinkedInCard className="col-span-1 sm:col-span-2" />
          </div>
        </div>
      </main>

      <footer className="text-center py-8 sm:py-12 text-gray-500 font-clash-display-light text-sm sm:text-base">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  )
}