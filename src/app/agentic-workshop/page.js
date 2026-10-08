import Link from "next/link";
import { identity, pricing, versions, workshopImages } from "./_shared/content";
import Facilitator from "./_shared/Facilitator";
import PricingCards from "./_shared/PricingCards";
import StickyCtaStrip from "./_shared/StickyCtaStrip";
import ToolingBar from "./_shared/ToolingBar";

export const metadata = {
  title: "Agentic Workshop: design versions",
  description:
    "Ten local design/copy versions of the Agentic Workshop landing page. Ranked coolest → least. Local preview only.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/agentic-workshop" },
};

export default function AgenticWorkshopHub() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex font-clash-display-medium text-sm text-muted-foreground transition hover:text-foreground"
        >
          ← Back home
        </Link>

        <header className="mb-10">
          <p className="mb-3 font-clash-display-medium text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Local design exploration
          </p>
          <h1 className="font-clash-display-semibold text-4xl leading-tight sm:text-5xl">
            Agentic Workshop: 10 versions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ranked most cool → least cool. Same offer underneath: half-day agent
            workflow workshop with {identity.name} ({identity.city}),{" "}
            {pricing.lite} / half-day {pricing.halfDay}, {identity.languages}.
            No deploy. Pick a direction, then refine.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Original baseline preserved at{" "}
            <Link
              href="/agentic-workshop/baseline"
              className="underline decoration-green-500/40 hover:decoration-green-500"
            >
              /agentic-workshop/baseline
            </Link>
            .
          </p>
        </header>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            {
              src: workshopImages.heroCinematic,
              alt: "Cinematic agent workflow",
            },
            { src: workshopImages.agentPr, alt: "Agent PR review" },
            { src: workshopImages.methodLoop, alt: "Method loop" },
            { src: workshopImages.consoleDashboard, alt: "Ops console" },
            { src: workshopImages.founderDesk, alt: "Founder desk abstract" },
            { src: workshopImages.agendaTimeline, alt: "Workshop agenda" },
          ].map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border border-border bg-card/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <Facilitator className="mb-8" />
        <ToolingBar className="mb-8" />
        <section className="mb-10 overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={workshopImages.beforeAfterHowWeWork}
            alt="Before and after: how we work"
            className="aspect-[21/9] w-full object-cover object-top"
            loading="lazy"
          />
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-clash-display-semibold text-lg">
            Investment
          </h2>
          <PricingCards />
        </section>

        <ol className="space-y-3">
          {versions.map((v, i) => (
            <li key={v.id}>
              <Link
                href={`/agentic-workshop/${v.id}`}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 backdrop-blur-sm transition hover:border-primary hover:shadow-bento"
              >
                <span className="font-clash-display-semibold text-2xl text-muted-foreground group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-clash-display-semibold text-lg">
                      {v.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      /{v.id}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-foreground/80">
                    {v.blurb}
                  </span>
                </span>
                <span className="shrink-0 self-center font-clash-display-medium text-sm text-muted-foreground transition group-hover:text-foreground">
                  Open →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <section className="mt-12 rounded-2xl border border-border bg-card/40 px-5 py-5">
          <h2 className="font-clash-display-semibold text-lg">
            Ranking rationale (brief)
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
            <li>
              <strong>v01–v03</strong> lead with distinctive visual systems
              (cinematic, editorial, SaaS) that sell craft before copy.
            </li>
            <li>
              <strong>v04–v06</strong> trade flash for personality: founder
              trust, method story, or dark ops console.
            </li>
            <li>
              <strong>v07–v09</strong> are useful but quieter: minimal,
              syllabus, or narrative case study.
            </li>
            <li>
              <strong>v10</strong> is the safe brochure: complete, corporate,
              least distinctive.
            </li>
          </ul>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
