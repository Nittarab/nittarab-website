import Link from "next/link";
import Cta from "../_shared/Cta";
import {
  agenda,
  artefactImageByTitle,
  artefacts,
  email,
  experience,
  faqs,
  identity,
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
  title: "Agentic Workshop v02 — Editorial",
  robots: { index: false, follow: false },
};

export default function V02() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-4xl">
        <VersionChrome versionId="v02" label="Magazine editorial" />

        <header className="border-b-4 border-foreground pb-10">
          <p className="font-clash-display-medium text-xs uppercase tracking-[0.3em]">
            Field notes · {identity.city} · Vol. 01
          </p>
          <h1 className="mt-6 font-clash-display-bold text-5xl leading-[1.05] sm:text-6xl">
            The half-day that turns copilots into a method.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/85">
            Most teams already tried the tools. What’s missing is a shared bar
            for when an agent owns a change — end to end, on your backlog, under
            NDA.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6 text-sm">
            <p>
              <span className="text-muted-foreground">By</span>{" "}
              <strong className="font-clash-display-semibold">
                {identity.name}
              </strong>
            </p>
            <p>
              <span className="text-muted-foreground">From</span>{" "}
              <strong>{pricing.lite}</strong>
            </p>
            <p>
              <span className="text-muted-foreground">Half-day</span>{" "}
              <strong>{pricing.halfDay}</strong>
            </p>
            <p>
              <span className="text-muted-foreground">Lang</span>{" "}
              <strong>{identity.languages}</strong>
            </p>
          </div>
          <div className="mt-6">
            <Cta />
            <ToolingBar className="mt-6" />
            <Facilitator className="mt-6" compact />
          </div>
        </header>

        <blockquote className="my-14 border-l-4 border-primary py-2 pl-6">
          <p className="font-clash-display-semibold text-2xl leading-snug sm:text-3xl">
            “No slide deck that dies in a Drive folder — named artefacts your
            team keeps.”
          </p>
          <footer className="mt-3 text-sm text-muted-foreground">
            — Offer promise, Agentic Workshop
          </footer>
        </blockquote>

        <section className="mb-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-clash-display-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
              The stall
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            {problems.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-8 font-clash-display-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Figures — artefacts
          </h2>
          <div className="space-y-10">
            {artefacts.map((a, i) => (
              <figure
                key={a.title}
                className="grid gap-4 border-t border-border pt-6 md:grid-cols-12"
              >
                <figcaption className="md:col-span-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    Fig. {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-clash-display-semibold text-xl">
                    {a.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {a.detail}
                  </p>
                </figcaption>
                <div className="md:col-span-8">
                  <Placeholder
                    label={`Figure: ${a.title.toLowerCase()}`}
                    aspect={i % 2 === 0 ? "video" : "wide"}
                    src={artefactImageByTitle[a.title]}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-none border border-foreground p-6">
            <h3 className="font-clash-display-semibold text-lg">
              Playbook contents
            </h3>
            <ol className="mt-4 space-y-2 font-mono text-sm">
              {playbookToc.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-clash-display-semibold text-lg">Agenda</h3>
            <ul className="mt-4 space-y-3">
              {agenda.map((a) => (
                <li
                  key={a.title}
                  className="flex justify-between gap-4 border-b border-border pb-2 text-sm"
                >
                  <span>
                    <strong className="font-clash-display-semibold">
                      {a.title}
                    </strong>
                    <span className="mt-1 block text-foreground/70">
                      {a.detail}
                    </span>
                  </span>
                  <span className="shrink-0 text-muted-foreground">
                    {a.time}
                  </span>
                </li>
              ))}
            </ul>
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

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ways to work
          </h2>
          <PricingCards className="mt-6" />
        </section>

        <section className="mb-14">
          <h2 className="font-clash-display-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Author
          </h2>
          <p className="mt-4 text-lg">
            {identity.name} · {identity.city} ·{" "}
            <a
              href={identity.weftUrl}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weft Labs
            </a>
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
            {experience.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <Link href="/cv" className="underline">
              Full CV →
            </Link>
          </p>
        </section>

        <section className="mb-14 columns-1 gap-8 sm:columns-2">
          {faqs.map((f) => (
            <div key={f.q} className="mb-6 break-inside-avoid">
              <p className="font-clash-display-semibold">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                {f.a}
              </p>
            </div>
          ))}
        </section>

        <footer className="border-t-4 border-foreground pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            Start with discovery
          </h2>
          <p className="mt-2 text-muted-foreground">
            Free 30 minutes. Written scope before booking.
          </p>
          <div className="mt-6">
            <Cta />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{email}</p>
        </footer>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
