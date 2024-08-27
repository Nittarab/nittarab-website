import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 font-clash-display">
      <Head>
        <title>Patrick Barattin - Software Engineer & Entrepreneur</title>
        <meta name="description" content="Personal website of Patrick Barattin, software engineer and entrepreneur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center">
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
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-clash-display-semibold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 font-clash-display-regular">
              I'm passionate about building innovative solutions and turning ideas into reality. With expertise in Next.js and Tailwind CSS, I create seamless web experiences that blend form and function.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-clash-display-semibold mb-4 text-gray-800">My Work</h2>
            <p className="text-gray-600 font-clash-display-regular">
              From personal projects to entrepreneurial ventures, I'm constantly exploring new technologies and pushing the boundaries of what's possible in web development.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link href="/projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-200">
            View Projects
          </Link>
          <Link href="/contact" className="bg-white text-gray-800 px-6 py-3 rounded-full border border-gray-300 hover:shadow-lg transition-shadow duration-200">
            Get in Touch
          </Link>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 font-clash-display-light">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  )
}