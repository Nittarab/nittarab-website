import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  email,
  experience,
  faqs,
  identity,
  playbookToc,
  pricing,
  workshopImages,
} from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import Placeholder from "../_shared/Placeholder";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";
import VersionChrome from "../_shared/VersionChrome";

export const metadata = {
  title: "Agentic Workshop v06 — Agent ops console",
  robots: { index: false, follow: false },
};

export default function V06() {
  return (
    <main className="dark min-h-screen bg-background px-4 py-10 font-mono text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-4xl">
        <VersionChrome versionId="v06" label="Agent ops console" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />

        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-primary">
          <span className="rounded border border-primary/40 px-2 py-0.5">
            STATUS: RECRUITING
          </span>
          <span className="text-muted-foreground">
            NODE={identity.city.toUpperCase()}
          </span>
          <span className="text-muted-foreground">
            LANG={identity.languages}
          </span>
          <span className="text-muted-foreground">
            PRICE_LITE={pricing.lite}
          </span>
        </div>

        <header className="mb-12 rounded-lg border border-border bg-card p-6 shadow-glow">
          <p className="text-xs text-primary">
            $ ./agentic-workshop --half-day
          </p>
          <h1 className="mt-4 font-clash-display-bold text-3xl leading-tight text-foreground sm:text-5xl">
            agent_ops · install shared ownership
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Interactive console aesthetic for the same offer: live issue → plan
            → tested change under NDA. Operator: {identity.name}. Half-day{" "}
            {pricing.halfDay}.
          </p>
          <div className="mt-6">
            <Cta
              primaryLabel="open_calendar → discovery"
              primaryClassName="inline-flex items-center justify-center rounded border border-primary bg-primary/20 px-5 py-2.5 font-clash-display-medium text-sm text-primary transition hover:bg-primary/30"
              secondaryClassName="inline-flex items-center justify-center rounded border border-border px-5 py-2.5 font-clash-display-medium text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
            />
          </div>
        </header>

        <section className="mb-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card/80 p-4">
            <p className="mb-3 text-xs uppercase tracking-wider text-primary">
              {/* telemetry · placeholders */}
            </p>
            <Placeholder
              label="Console shot: agent run log (redacted)"
              className="border-primary/30 bg-background"
              src={workshopImages.consoleLog}
            />
          </div>
          <div className="rounded-lg border border-border bg-card/80 p-4">
            <p className="mb-3 text-xs uppercase tracking-wider text-primary">
              {/* artefact: pr_diff */}
            </p>
            <Placeholder
              label="Screenshot: agent PR flow with checks"
              className="border-primary/30 bg-background"
              src={workshopImages.consoleDashboard}
            />
          </div>
        </section>

        <section className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-wider text-primary">
            {/* pricing */}
          </p>
          <PricingCards className="mt-2" />
        </section>

        <section className="mb-10 rounded-lg border border-dashed border-primary/40 bg-background p-4">
          <p className="text-xs text-primary">playbook.toc</p>
          <pre className="mt-3 whitespace-pre-wrap text-xs text-muted-foreground">
            {playbookToc.join("\n")}
          </pre>
        </section>

        <section className="mb-10">
          <p className="mb-3 text-xs uppercase text-primary">
            {/* operator */}
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {experience.map((e) => (
              <li key={e.title}>
                <span className="text-foreground">{e.title}</span> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs">
            <Link href="/cv" className="text-primary underline">
              cat cv.md
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <p className="mb-3 text-xs uppercase text-primary">{/* faq */}</p>
          <dl className="space-y-4 text-sm">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-foreground">{f.q}</dt>
                <dd className="mt-1 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-lg border border-primary/50 bg-card p-6 shadow-glow">
          <p className="text-xs text-primary">ready?</p>
          <h2 className="mt-2 font-clash-display-semibold text-2xl">
            book 30-min discovery
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{email}</p>
          <div className="mt-4">
            <Cta
              primaryClassName="inline-flex items-center justify-center rounded border border-primary bg-primary px-5 py-2.5 font-clash-display-medium text-sm text-primary-foreground transition hover:opacity-90"
              secondaryClassName="inline-flex items-center justify-center rounded border border-border px-5 py-2.5 text-sm text-muted-foreground hover:border-primary hover:text-primary"
            />
          </div>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
