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

export default function SecretPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-green-200 transition-colors duration-500">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 shadow-lg ring-1 ring-gray-100 dark:from-[#041b11] dark:via-black dark:to-black dark:ring-green-900/40">
            <p className="inline-flex items-center rounded-full bg-gray-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:bg-green-400/10 dark:text-green-300">
              Access granted via X402
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-clash-display-semibold leading-tight text-gray-900 dark:text-green-200">
              The Little Secret
            </h1>
            <p className="mt-6 text-lg font-clash-display-regular text-gray-600 dark:text-green-200/70">
              Welcome inside. This page renders server-side so the Coinbase
              paywall can swap it in instantly after your transaction settles.
              No reloads, no extra hops — just a clean handoff from value
              transfer to content delivery.
            </p>
            <div className="mt-8 grid gap-6">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200/80 bg-white/70 px-6 py-4 text-left text-base text-gray-700 backdrop-blur dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-dashed border-gray-300/80 bg-white/60 p-8 backdrop-blur dark:border-green-800/60 dark:bg-black/40">
            <h2 className="text-2xl font-clash-display-semibold text-gray-900 dark:text-green-100">
              Why this matters
            </h2>
            <ul className="mt-6 space-y-4 text-base text-gray-600 dark:text-green-200/80">
              {takeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 flex-none rounded-full bg-gray-900/60 dark:bg-green-400"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-gray-900 text-sm font-mono text-green-200 shadow-inner dark:bg-green-900/30 dark:text-green-100">
              <span className="block border-b border-white/10 px-4 py-3 text-xs uppercase tracking-widest text-gray-400">
                receipt
              </span>
              <span className="block px-4 py-4">
                Paid {"$"}
                {"0.01"} USDC on Base Sepolia · Response {"X-PAYMENT-RESPONSE"}
              </span>
            </p>
          </section>

          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-500 dark:text-green-300/80">
            <p>
              Powered by the{" "}
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-gray-700 dark:hover:text-green-200"
                href="https://x402.org"
                target="_blank"
                rel="noreferrer"
              >
                X402 Protocol
              </a>
              . Keep exploring, keep building.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 px-4 py-2 font-clash-display-medium text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-900/40 dark:border-green-400/40 dark:text-green-200 dark:hover:border-green-300"
            >
              <span aria-hidden>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
