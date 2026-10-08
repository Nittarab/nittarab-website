import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  agenda,
  artefacts,
  beforeSession,
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
  title: "Agentic Workshop v05 — Method manifesto",
  robots: { index: false, follow: false },
};

const methodSteps = [
  { t: "Issue", d: "One real ticket, scoped enough to finish in the room." },
  { t: "Plan", d: "Agent proposes approach; humans set the bar." },
  { t: "Change", d: "Implementation on your stack — under NDA." },
  { t: "Tests", d: "Evidence before merge, same as any serious PR." },
  { t: "Review", d: "Shared checklist so “good” isn’t vibes." },
];

export default function V05() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="v05" label="Method manifesto" />

        <header className="mb-14">
          <p className="font-clash-display-medium text-sm uppercase tracking-[0.2em] text-muted-foreground">
            How I work · manifesto
          </p>
          <h1 className="mt-4 font-clash-display-bold text-4xl leading-tight sm:text-5xl">
            Agent-owned means the loop closes — not that chat opened.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A half-day with {identity.name} ({identity.city}) to install the
            loop on your team: issue → plan → tested change. From{" "}
            {pricing.lite.replace("From ", "")} · half-day {pricing.halfDay} ·{" "}
            {identity.languages}.
          </p>
          <div className="mt-8">
            <Cta />
          </div>
          <ToolingBar className="mt-8" />
          <Facilitator className="mt-6" compact />
        </header>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">The loop</h2>
          <div className="mt-6">
            <Placeholder
              label="Diagram: issue → plan → change → tests → review (loop)"
              aspect="wide"
              src={workshopImages.methodLoop}
            />
          </div>
          <ol className="mt-8 space-y-0">
            {methodSteps.map((s, i) => (
              <li
                key={s.t}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-5"
              >
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-clash-display-semibold text-xl">{s.t}</p>
                  <p className="mt-1 text-sm text-foreground/80">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-2xl">How we work</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            From ad-hoc chat side-windows to a playbook + pilot board on your
            stack.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workshopImages.beforeAfterHowWeWork}
              alt="Before and after — how we work"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-16 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-5">
            <h3 className="font-clash-display-semibold text-lg">Before</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Typical team state
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>• AI in a side window</li>
              <li>• Inconsistent PR quality</li>
              <li>• No shared ownership rule</li>
            </ul>
            <div className="mt-4">
              <Placeholder
                label="Screenshot: before — ad-hoc chat use"
                aspect="wide"
                src={workshopImages.beforeAdhoc}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-5">
            <h3 className="font-clash-display-semibold text-lg">
              After session
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              What you leave with
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {artefacts.slice(0, 4).map((a) => (
                <li key={a.title}>• {a.title}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Placeholder
                label="Screenshot: after — playbook + pilot board"
                aspect="wide"
                src={workshopImages.afterPlaybook}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">
            Session timeline
          </h2>
          <div className="mt-6 space-y-4">
            {agenda.map((a, i) => (
              <div
                key={a.title}
                className="flex gap-4 rounded-xl border border-border bg-card/40 px-4 py-4"
              >
                <div className="w-16 shrink-0 text-center">
                  <p className="font-mono text-xs text-muted-foreground">
                    {a.time}
                  </p>
                  <p className="mt-1 font-clash-display-semibold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div>
                  <p className="font-clash-display-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">Prep</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {beforeSession.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border p-4"
              >
                <p className="font-clash-display-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{b.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">
            Playbook skeleton
          </h2>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/40 p-5 font-mono text-sm">
            {playbookToc.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-clash-display-semibold text-2xl">Ways to work</h2>
          <PricingCards className="mt-5" />
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Who teaches it
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {experience.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <Link href="/cv" className="underline decoration-green-500/40">
              CV →
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

        <section className="border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            Install the method
          </h2>
          <p className="mt-2 text-muted-foreground">
            Free discovery · written scope · {email}
          </p>
          <div className="mt-6">
            <Cta />
          </div>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
