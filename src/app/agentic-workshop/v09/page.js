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
  title: "Agentic Workshop v09 — Case study",
  robots: { index: false, follow: false },
};

const dayBeats = [
  {
    time: "09:00",
    title: "Context",
    body: "Anonymized mid-size product team (~8). Copilot in use; PRs inconsistent; no shared rule for agent-owned work.",
  },
  {
    time: "09:25",
    title: "Pick the ticket",
    body: "Under NDA: one real backlog issue — not a toy. Team agrees what “done” means before the agent runs.",
  },
  {
    time: "09:40",
    title: "Live loop",
    body: "Issue → plan → change → tests on their stack. Guardrails called out as they appear. Humans stay in the review seat.",
  },
  {
    time: "11:00",
    title: "Break",
    body: "Short pause. Side questions offline.",
  },
  {
    time: "11:15",
    title: "Artefacts",
    body: "Playbook draft, review checklist, repo instruction starter — adapted to their tools, left in their hands.",
  },
  {
    time: "12:05",
    title: "Pilot",
    body: "30-day backlog ranked with owners. Optional fixed consulting block scoped for the pilot window.",
  },
];

export default function V09() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="v09" label="Case-study first" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />

        <header className="mb-12">
          <p className="font-clash-display-medium text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Case study · anonymized composite
          </p>
          <h1 className="mt-3 font-clash-display-semibold text-4xl leading-tight">
            A day in the life of the half-day
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Composite narrative from how sessions typically run with{" "}
            {identity.name} ({identity.city}). No fake metrics — just the arc
            and the artefacts. EN / IT / ES · from{" "}
            {pricing.lite.replace("From ", "")} · half-day {pricing.halfDay}.
          </p>
          <div className="mt-6">
            <Cta />
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-2xl">The day</h2>
          <div className="mt-6 space-y-0 border-l border-border pl-6">
            {dayBeats.map((b) => (
              <div key={b.time} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[1.65rem] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs text-muted-foreground">
                  {b.time}
                </p>
                <p className="mt-1 font-clash-display-semibold text-lg">
                  {b.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-2xl">
            Proof artefacts
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Drop redacted captures from a real session when available.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Placeholder
              label="Screenshot: anonymized ticket + plan"
              src={workshopImages.ticketPlan}
            />
            <Placeholder
              label="Screenshot: tests green on agent PR"
              src={workshopImages.testsGreen}
            />
            <Placeholder
              label="Screenshot: review checklist filled"
              src={workshopImages.reviewChecklist}
            />
            <Placeholder
              label="Screenshot: 30-day pilot backlog"
              src={workshopImages.pilotBoard}
            />
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-2xl">
            What they kept
          </h2>
          <ul className="mt-5 space-y-4">
            {artefacts.map((a) => (
              <li
                key={a.title}
                className="rounded-2xl border border-border bg-card/50 px-5 py-4"
              >
                <p className="font-clash-display-semibold">{a.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-2xl">
            Same offer, three sizes
          </h2>
          <PricingCards className="mt-5" />
        </section>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-2xl">Facilitator</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {experience.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <Link href="/cv" className="underline decoration-green-500/40">
              CV
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-clash-display-semibold">{f.q}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="font-clash-display-semibold text-xl">
            Want this arc on your backlog?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Free 30-min discovery · written scope · {email}
          </p>
          <div className="mt-4">
            <Cta />
          </div>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
