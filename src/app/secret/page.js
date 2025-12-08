import Link from "next/link";

const highlights = [
  "You just streamed value directly to a creator without an intermediary.",
  "The request/response lifecycle stayed intact — HTTP still rules.",
  "402, the forgotten status code, finally has a real job.",
];

const takeaways = [
  "Micropayments feel effortless when wallets and browsers speak the same language.",
  "The paywall disappears the moment value flows — no subscriptions, no lock-in.",
  "Protocols > platforms. Keep ownership of your audience *and* your revenue.",
];

export const metadata = {
  title: "Access Granted | Nittarab",
  description: "Exclusive content unlocked via X402 protocol.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SecretPage() {
  return (
    <div className="min-h-screen bg-black text-green-200 transition-colors duration-500 font-mono selection:bg-green-900 selection:text-green-100">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Hero Section */}
          <section className="relative rounded-3xl bg-gradient-to-b from-[#041b11] to-black p-8 sm:p-10 shadow-2xl ring-1 ring-green-900/40 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-green-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                Connection Secure
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl font-clash-display-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-400/80 mb-6">
              The Little Secret
            </h1>

            <p className="text-lg sm:text-xl text-green-200/70 leading-relaxed max-w-2xl">
              You didn't just pay. You performed a{" "}
              <span className="text-green-400 font-semibold">
                cryptographically verifiable handshake
              </span>
              . The server validated your signature, settled the transaction on
              Base, and swapped the paywall for this content—all in
              milliseconds.
            </p>

            {/* Terminal Receipt */}
            <div className="mt-10 rounded-xl bg-black/80 border border-green-900/60 p-6 font-mono text-sm shadow-inner relative group">
              <div className="absolute top-3 right-3 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <div className="space-y-2 text-green-400/90">
                <div className="flex justify-between border-b border-green-900/30 pb-2 mb-2">
                  <span className="text-green-600">TRANSACTION_RECEIPT</span>
                  <span className="opacity-50">STATUS: CONFIRMED</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-green-600">NETWORK</span>
                  <span>Base Sepolia</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-green-600">AMOUNT</span>
                  <span>0.01 USDC</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-green-600">GAS FEE</span>
                  <span>&lt; $0.001</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-green-600">METHOD</span>
                  <span>X402 Protocol</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-green-600">HASH</span>
                  <span className="truncate opacity-50">0x7f...3a2b</span>
                </div>
                <div className="mt-4 pt-2 border-t border-green-900/30 text-xs text-green-500/50 animate-pulse">
                  _ END OF LINE
                </div>
              </div>
            </div>
          </section>

          {/* Value Props */}
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-green-900/30 bg-green-900/10 p-6 hover:bg-green-900/20 transition-colors"
              >
                <div className="mb-4 text-green-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {i === 0 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-green-100/80 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-green-900/30">
            <a
              href="https://calendar.app.google/qt6ytm3NXidsqPYr8"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
            >
              <span>Book a Consultation</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </a>

            <Link
              href="/"
              className="text-sm text-green-400/60 hover:text-green-300 transition-colors flex items-center gap-2"
            >
              <span aria-hidden>←</span>
              Return to Portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
