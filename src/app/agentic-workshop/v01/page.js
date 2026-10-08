import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  artefacts,
  email,
  experience,
  faqs,
  identity,
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
  title: "Agentic Workshop v01 — Cinematic",
  robots: { index: false, follow: false },
};

export default function V01() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-28">
      <div className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <VersionChrome versionId="v01" label="Cinematic product" />
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 font-clash-display-medium text-xs uppercase tracking-[0.22em] text-primary">
                Half-day · {identity.city} · {identity.languages}
              </p>
              <h1 className="font-clash-display-bold text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Agent-owned
                <br />
                <span className="text-muted-foreground">on your stack.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                Issue → plan → tested change in a live half-day under NDA. You
                leave with playbook, checklist, and a 30-day pilot — not a deck
                that dies in Drive.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {identity.name} · {identity.tagline}
              </p>
              <div className="mt-8">
                <Cta primaryClassName="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-clash-display-semibold text-sm text-primary-foreground shadow-glow transition hover:opacity-90" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {pricing.lite} · half-day {pricing.halfDay}
              </p>
              <ToolingBar className="mt-6" />
              <Facilitator className="mt-6" compact />
            </div>
            <div className="space-y-4 lg:col-span-5">
              <div className="rotate-1 rounded-2xl border border-border bg-card p-2 shadow-bento transition hover:-rotate-0">
                <Placeholder
                  label="Screenshot: agent PR flow — issue → plan → tests"
                  src={workshopImages.agentPr}
                />
              </div>
              <div className="-rotate-1 rounded-2xl border border-border bg-card p-2 shadow-bento">
                <Placeholder
                  label="Screenshot: playbook TOC + review checklist"
                  aspect="wide"
                  src={workshopImages.playbookCover}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-clash-display-semibold text-3xl">
              Product shots
            </h2>
            <p className="text-sm text-muted-foreground">
              Session artefacts — UI mockups of the workflow
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Screenshot: live backlog session (NDA redacted)",
                src: workshopImages.liveSession,
              },
              {
                label: "Screenshot: repo instruction starter",
                src: workshopImages.repoInstructions,
              },
              {
                label: "Screenshot: 30-day pilot backlog board",
                src: workshopImages.pilotBoard,
              },
            ].map(({ label, src }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card/80 p-2 shadow-bento"
              >
                <Placeholder label={label} src={src} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-clash-display-semibold text-3xl">
              What you leave with
            </h2>
            <ul className="mt-6 space-y-4">
              {artefacts.map((a, i) => (
                <li
                  key={a.title}
                  className="border-l-2 border-primary pl-4 transition hover:border-foreground"
                >
                  <p className="font-clash-display-semibold">
                    <span className="mr-2 text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm">
            <h3 className="font-clash-display-semibold text-xl">
              Ways to work
            </h3>
            <PricingCards className="mt-5" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">How we work</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ad-hoc chat side-windows → playbook + pilot board on your stack.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workshopImages.beforeAfterHowWeWork}
              alt="Before and after — how we work"
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-clash-display-semibold text-3xl">Who runs it</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {experience.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-border bg-card/60 p-5"
              >
                <p className="font-clash-display-semibold">{e.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Full detail on the{" "}
            <Link href="/cv" className="underline decoration-green-500/40">
              CV
            </Link>
            .
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-3xl">FAQ</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {faqs.slice(0, 6).map((f) => (
              <div key={f.q}>
                <dt className="font-clash-display-semibold">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl border border-border bg-foreground px-8 py-12 text-background">
          <h2 className="font-clash-display-semibold text-3xl">
            Book a free 30-min discovery
          </h2>
          <p className="mt-3 max-w-xl text-background/70">
            Written scope before any booking. Remote default · on-site in CH ·{" "}
            {identity.languages}.
          </p>
          <div className="mt-6">
            <Cta
              primaryClassName="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-clash-display-semibold text-sm text-primary-foreground transition hover:opacity-90"
              secondaryClassName="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 font-clash-display-medium text-sm text-background transition hover:border-background"
            />
          </div>
          <p className="mt-4 text-sm text-background/60">{email}</p>
        </section>
      </div>
      <StickyCtaStrip />
    </main>
  );
}
