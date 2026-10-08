import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  artefactImageByTitle,
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
  title: "Agentic Workshop v04 — Founder story",
  robots: { index: false, follow: false },
};

export default function V04() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="v04" label="Founder story" />

        <header className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="w-full max-w-[200px] shrink-0">
            <Placeholder
              label="Photo: Patrick Barattin (Zürich)"
              aspect="square"
              className="rounded-full !overflow-hidden border-0"
              src={workshopImages.founderPhoto}
            />
          </div>
          <div>
            <p className="font-clash-display-medium text-sm text-muted-foreground">
              Personal note · {identity.city}
            </p>
            <h1 className="mt-2 font-clash-display-semibold text-4xl leading-tight">
              I run agent systems daily. This workshop is how I hand the method
              to your team.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Hi — I&apos;m {identity.name}. Founder of{" "}
              <a
                href={identity.weftUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-green-500/40"
              >
                Weft Labs
              </a>
              , Conversational AI at On, previously CTO. I built this half-day
              because demos don&apos;t stick — shared method does.
            </p>
            <div className="mt-6">
              <Cta />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              From {pricing.lite.replace("From ", "")} · half-day{" "}
              {pricing.halfDay} · {identity.languages}
            </p>
            <ToolingBar className="mt-6" />
          </div>
        </header>

        <Facilitator className="mb-12" />

        <section className="mb-12 rounded-2xl border border-border bg-card/50 p-6">
          <h2 className="font-clash-display-semibold text-xl">
            Watch a 2-min walkthrough
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Video still — swap for Loom when recorded.
          </p>
          <div className="mt-4">
            <Placeholder
              label="Loom / video: workshop walkthrough (2 min)"
              src={workshopImages.loom}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Proof from the CV
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            LinkedIn-style timeline — full detail on the{" "}
            <Link href="/cv" className="underline decoration-green-500/40">
              CV page
            </Link>
            .
          </p>
          <ol className="mt-6 space-y-0 border-l-2 border-border pl-6">
            {experience.map((e) => (
              <li key={e.title} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-clash-display-semibold">{e.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {e.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            What your team keeps
          </h2>
          <div className="mt-6 space-y-4">
            {artefacts.map((a) => (
              <div
                key={a.title}
                className="grid gap-4 rounded-2xl border border-border p-4 sm:grid-cols-[1fr_140px]"
              >
                <div>
                  <p className="font-clash-display-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
                </div>
                <Placeholder
                  label="Thumb"
                  aspect="square"
                  className="!aspect-square"
                  src={artefactImageByTitle[a.title]}
                />
              </div>
            ))}
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

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">Investment</h2>
          <PricingCards className="mt-5" />
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">
            Session screenshots
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Placeholder
              label="Screenshot: redacted live session"
              src={workshopImages.liveSession}
            />
            <Placeholder
              label="Screenshot: PR opened with agent plan"
              src={workshopImages.agentPr}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-clash-display-semibold text-2xl">Quick FAQ</h2>
          <dl className="mt-4 space-y-4">
            {faqs.slice(0, 5).map((f) => (
              <div key={f.q}>
                <dt className="font-clash-display-semibold text-sm">{f.q}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="font-clash-display-semibold text-xl">
            Let&apos;s talk 30 minutes
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            No commitment until written scope. {email}
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
