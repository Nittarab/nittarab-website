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
  pricing,
  takeaways,
  workshopImages,
} from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import Placeholder from "../_shared/Placeholder";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";
import VersionChrome from "../_shared/VersionChrome";

export const metadata = {
  title: "Agentic Workshop v08 — Syllabus catalog",
  robots: { index: false, follow: false },
};

export default function V08() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="v08" label="Syllabus catalog" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />

        <header className="mb-10 border-b border-border pb-8">
          <p className="font-clash-display-medium text-sm uppercase tracking-[0.18em] text-muted-foreground">
            School of one · syllabus
          </p>
          <h1 className="mt-3 font-clash-display-semibold text-4xl">
            Agentic Workshop — course outline
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Instructor: {identity.name}, {identity.city}. Languages:{" "}
            {identity.languages}. Investment: {pricing.lite} / half-day{" "}
            {pricing.halfDay}.
          </p>
          <div className="mt-6">
            <Cta />
          </div>
        </header>

        <section className="mb-12 rounded-2xl border border-border bg-card/50 p-6">
          <h2 className="font-clash-display-semibold text-xl">
            Learning outcomes
          </h2>
          <ul className="mt-4 space-y-3">
            {takeaways.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 text-primary" aria-hidden>
                  ☐
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Agenda (half-day)
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Blocks ≈ 3h15 + break. Workshop Lite compresses to ≈2h.
          </p>
          <ol className="mt-6 divide-y divide-border rounded-2xl border border-border">
            {agenda.map((a, i) => (
              <li key={a.title} className="flex gap-4 px-5 py-4">
                <div className="w-12 shrink-0">
                  <p className="font-clash-display-semibold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
                <div>
                  <p className="font-clash-display-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <Placeholder
              label="Figure: agenda timeline diagram"
              aspect="wide"
              src={workshopImages.agendaTimeline}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Materials you keep
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {artefacts.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border p-4"
              >
                <p className="font-clash-display-semibold text-sm">{a.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Prerequisites
          </h2>
          <div className="mt-4 space-y-3">
            {beforeSession.map((b) => (
              <div
                key={b.title}
                className="flex gap-3 rounded-xl border border-border px-4 py-3"
              >
                <span className="font-clash-display-semibold text-primary">
                  ✓
                </span>
                <div>
                  <p className="font-clash-display-semibold text-sm">
                    {b.title}
                  </p>
                  <p className="text-sm text-foreground/80">{b.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">Tuition</h2>
          <PricingCards className="mt-5" />
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">Instructor</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            {experience.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <Link href="/cv" className="underline decoration-green-500/40">
              Full CV
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-clash-display-semibold text-sm">{f.q}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-xl">Enrollment</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Book free discovery · {email}
          </p>
          <div className="mt-4">
            <Cta primaryLabel="Book discovery call" />
          </div>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
