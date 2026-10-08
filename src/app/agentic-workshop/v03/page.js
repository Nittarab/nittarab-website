import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  artefactImageByTitle,
  artefacts,
  beforeSession,
  calendarUrl,
  email,
  experience,
  faqs,
  forWhom,
  identity,
  notFor,
  pricing,
  workshopImages,
} from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import FactoryCheck from "../_shared/FactoryCheck";
import Placeholder from "../_shared/Placeholder";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";

export const metadata = {
  title: "Agentic Workshop v03 · SaaS LP",
  robots: { index: false, follow: false },
};

const artefactAltByTitle = {
  "Live session on your backlog": "Live agent session on a real backlog",
  "Team playbook": "Method loop: models, harnesses, and tools",
  "Review checklist": "Ops console from a real agent workflow",
  "Repo instruction starter": "Repo instruction starter",
  "30-day pilot backlog": "Console log from a real agent run",
};

export default function V03() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-28">
      <div className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="font-clash-display-semibold text-sm">
            Agentic Workshop
          </p>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-4 py-2 font-clash-display-medium text-xs text-primary-foreground transition hover:opacity-90"
          >
            Book discovery
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-clash-display-medium text-sm text-primary">
              For engineering teams · {identity.city} · {identity.languages}
            </p>
            <h1 className="mt-4 font-clash-display-bold text-4xl leading-tight sm:text-5xl">
              Ship with a shared agent method, in one half-day.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Live workflow on your backlog under NDA. Playbook, checklist,
              pilot backlog. Lite {pricing.lite.replace(/^From /, "from ")} ·
              half-day {pricing.halfDay}.
            </p>
            <div className="mt-8">
              <Cta />
            </div>
            <ToolingBar className="mt-6" />
            <Facilitator className="mt-6" compact />
          </div>
          <div className="space-y-4 lg:col-span-5">
            <div className="rotate-1 rounded-2xl border border-border bg-card p-2 shadow-bento transition hover:rotate-0">
              <Placeholder
                label="GitHub Copilot Agents: assign work, review PRs"
                alt="Official GitHub Copilot Agents product UI"
                src={workshopImages.liveSession}
              />
            </div>
            <div className="-rotate-1 rounded-2xl border border-border bg-card p-2 shadow-bento">
              <Placeholder
                label="Claude Code: official product"
                alt="Official Claude Code product page"
                aspect="wide"
                src={workshopImages.repoInstructions}
              />
            </div>
          </div>
        </header>

        <section className="mt-16 mb-16">
          <h2 className="font-clash-display-semibold text-2xl">How we work</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Official agent tooling + a method you keep: backlog → session →
            review → playbook.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workshopImages.beforeAfterHowWeWork}
              alt="How the half-day works: backlog to leave-behind method"
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mt-20" id="pricing">
          <h2 className="text-center font-clash-display-semibold text-3xl">
            Ways to work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Lite, half-day, or a fixed consulting block after.
          </p>
          <PricingCards className="mt-8" />
        </section>

        <section className="mt-20">
          <h2 className="font-clash-display-semibold text-3xl">
            Included artefacts
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artefacts.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-border bg-card/60 p-5"
              >
                <Placeholder
                  label={artefactAltByTitle[a.title] || a.title}
                  alt={artefactAltByTitle[a.title] || a.title}
                  aspect="wide"
                  className="mb-4"
                  src={artefactImageByTitle[a.title]}
                />
                <p className="font-clash-display-semibold">{a.title}</p>
                <p className="mt-2 text-sm text-foreground/80">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" id="software-factory">
          <p className="font-clash-display-medium text-sm text-primary">
            After the method · optional OSS hosts
          </p>
          <h2 className="mt-2 font-clash-display-semibold text-3xl">
            Create your own software factory
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The half-day sells a shared method and artefacts you keep, not
            another agent IDE. Once that leave-behind exists, these open-source
            stacks are honest starting points for a coding factory around your
            repos (Cursor, Claude Code, Copilot, Orca, or what you already run).
            Use the checklist in discovery; we wire one stack into your pilot,
            we do not run a free tools tour.
          </p>
          <FactoryCheck className="mt-8" />
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-clash-display-semibold text-2xl">
              Before you start
            </h2>
            <ul className="mt-5 space-y-3">
              {beforeSession.map((b) => (
                <li
                  key={b.title}
                  className="rounded-xl border border-border px-4 py-3"
                >
                  <p className="font-clash-display-semibold text-sm">
                    {b.title}
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">{b.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-clash-display-semibold text-2xl">Fit check</h2>
            <p className="mt-4 font-clash-display-medium text-sm text-primary">
              Good fit
            </p>
            <ul className="mt-2 space-y-2 text-sm text-foreground/80">
              {forWhom.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <p className="mt-6 font-clash-display-medium text-sm text-muted-foreground">
              Not a fit
            </p>
            <ul className="mt-2 space-y-2 text-sm text-foreground/80">
              {notFor.map((f) => (
                <li key={f}>– {f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
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

        <section className="mt-20">
          <h2 className="font-clash-display-semibold text-3xl">FAQ</h2>
          <dl className="mt-6 divide-y divide-border rounded-2xl border border-border">
            {faqs.map((f) => (
              <div key={f.q} className="px-5 py-4">
                <dt className="font-clash-display-semibold">{f.q}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 mb-8 rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            {identity.name} · {identity.tagline}
          </p>
          <h2 className="mt-3 font-clash-display-semibold text-2xl">
            Free 30-min discovery
          </h2>
          <p className="mt-2 text-muted-foreground">
            Written scope before booking · {email}
          </p>
          <div className="mt-6 flex justify-center">
            <Cta className="justify-center" />
          </div>
          <p className="mt-4 text-sm">
            <Link href="/cv" className="underline decoration-green-500/40">
              CV
            </Link>
          </p>
        </section>
      </div>
      <StickyCtaStrip />
    </main>
  );
}
