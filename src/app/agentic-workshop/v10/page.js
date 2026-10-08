import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  agenda,
  artefacts,
  beforeSession,
  email,
  experience,
  faqs,
  forWhom,
  identity,
  notFor,
  playbookToc,
  pricing,
  problems,
  workshopImages,
} from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import Placeholder from "../_shared/Placeholder";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";
import VersionChrome from "../_shared/VersionChrome";

export const metadata = {
  title: "Agentic Workshop v10 — Consulting brochure",
  robots: { index: false, follow: false },
};

export default function V10() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="v10" label="Consulting brochure" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />

        <header className="mb-10 border-b border-border pb-8">
          <p className="text-sm text-muted-foreground">
            Professional services · {identity.city}
          </p>
          <h1 className="mt-2 font-clash-display-semibold text-3xl sm:text-4xl">
            Agentic Workshop for engineering teams
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            A structured half-day engagement with {identity.name} to establish
            an agent-owned delivery workflow on your existing stack. Delivered
            under NDA. Languages: {identity.languages}.
          </p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded border border-border bg-card px-3 py-3">
              <dt className="text-muted-foreground">Workshop Lite</dt>
              <dd className="mt-1 font-clash-display-semibold">
                {pricing.lite}
              </dd>
            </div>
            <div className="rounded border border-border bg-card px-3 py-3">
              <dt className="text-muted-foreground">Half-day</dt>
              <dd className="mt-1 font-clash-display-semibold">
                {pricing.halfDay}
              </dd>
            </div>
            <div className="rounded border border-border bg-card px-3 py-3">
              <dt className="text-muted-foreground">Follow-on</dt>
              <dd className="mt-1 font-clash-display-semibold">
                {pricing.consulting}
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <Cta />
          </div>
        </header>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">1. Situation</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
            {problems.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">
            2. Deliverables
          </h2>
          <div className="mt-3 space-y-3">
            {artefacts.map((a) => (
              <div key={a.title} className="border border-border px-4 py-3">
                <p className="font-clash-display-semibold text-sm">{a.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Placeholder
              label="Sample playbook TOC"
              aspect="wide"
              src={workshopImages.playbookCover}
            />
            <ol className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
              {playbookToc.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">
            3. Engagement options
          </h2>
          <PricingCards className="mt-5" />
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">
            4. Preparation
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            {beforeSession.map((b) => (
              <li key={b.title}>
                <strong>{b.title}.</strong> {b.detail}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">5. Agenda</h2>
          <ol className="mt-3 space-y-3 text-sm">
            {agenda.map((a, i) => (
              <li key={a.title}>
                <strong>
                  {i + 1}. {a.title}
                </strong>{" "}
                ({a.time}) — {a.detail}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-clash-display-semibold text-xl">
              6. Intended audience
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              {forWhom.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-clash-display-semibold text-xl">
              7. Out of scope
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              {notFor.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">
            8. Consultant background
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {experience.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            Curriculum vitae:{" "}
            <Link href="/cv" className="underline">
              /cv
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-clash-display-semibold text-xl">
            9. Frequently asked questions
          </h2>
          <dl className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-clash-display-semibold">{f.q}</dt>
                <dd className="mt-1 text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border border-border bg-card px-5 py-6">
          <h2 className="font-clash-display-semibold text-xl">10. Next step</h2>
          <p className="mt-2 text-sm text-foreground/85">
            Schedule a complimentary 30-minute discovery call. A written scope
            of work is provided before any engagement is booked.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Contact: {email}</p>
          <div className="mt-4">
            <Cta primaryLabel="Schedule discovery call" />
          </div>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
