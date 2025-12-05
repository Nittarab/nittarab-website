import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-clash-display px-4">
      <div className="text-center">
        <h1 className="text-9xl font-clash-display-semibold text-gray-200 select-none">
          404
        </h1>
        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl font-clash-display-medium text-gray-800 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 font-clash-display-light mb-8 max-w-md mx-auto">
            Looks like you&apos;ve ventured into uncharted territory. The page
            you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-clash-display-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Fun animated elements */}
      <div className="mt-16 flex gap-4">
        <div
          className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-4 h-4 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
