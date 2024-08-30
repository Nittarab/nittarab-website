import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import XCard from '../components/XCard'
import SubstackCard from '../components/SubstackCard'
import LinkedInCard from '../components/LinkedInCard'
import MapsCard from '../components/MapsCard'
import GitHubCard from '../components/GitHubCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 font-clash-display">
      <Head>
        <title>Patrick Barattin - Software Engineer & Entrepreneur</title>
        <meta name="description" content="Personal website of Patrick Barattin, software engineer and entrepreneur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3 mb-12 md:mb-0">
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

          <h1 className="text-5xl font-clash-display mb-4 text-gray-800">Patrick Barattin</h1>
          <p className="text-xl font-clash-display-light text-gray-600 mb-8 max-w-md">
            Software Engineer | Entrepreneur | Builder of Things
          </p>

          <div className="flex space-x-4">
            <Link href="/projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-200">
              View Projects
            </Link>
            <Link href="/contact" className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md text-gray-800 px-6 py-3 rounded-full border border-white border-opacity-20 hover:shadow-lg transition-all duration-200">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-3 gap-4 w-full max-w-2xl">
          <XCard />
          <SubstackCard />
          <div className="row-span-2">
            <LinkedInCard />
            <div className="mt-4">
              <MapsCard />
            </div>
          </div>
          <div className="col-span-2">
            <GitHubCard />
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 font-clash-display-light">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  )
}