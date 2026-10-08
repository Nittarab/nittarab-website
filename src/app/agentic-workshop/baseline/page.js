import Link from "next/link";
import { workshopImages } from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";
import VersionChrome from "../_shared/VersionChrome";

export const metadata = {
  title: "Agentic Workshop",
  description:
    "Half-day workshop for engineering teams: leave with an agent-owned workflow on your stack — issue → plan → tested change — plus playbook, checklist, and a 30-day pilot backlog. From CHF 2’500. Zürich · EN / IT / ES.",
  alternates: {
    canonical: "/agentic-workshop/baseline",
  },
  openGraph: {
    title: "Agentic Workshop — Agent-owned workflows on your stack",
    description:
      "Half-day for engineering teams: a live session on your backlog under NDA, artefacts you keep, and a clear pilot path. From CHF 2’500. Book a free 30-min discovery.",
    url: "/agentic-workshop/baseline",
    type: "website",
  },
};

const calendarUrl = "https://calendar.app.google/8HnmappTvKTP2txz5";
const askMailto =
  "mailto:p.barattin@gmail.com?subject=Question%20about%20Agentic%20Workshop&body=Hi%20Patrick%2C%0A%0AI%20have%20a%20question%20about%20the%20Agentic%20Workshop%3A%0A%0A";

const problems = [
  "Copilot or chat demos that never stuck — AI stays in a side window",
  "Inconsistent AI PRs: some helpful, many noisy, no shared bar for review",
  "No shared method for when an agent owns a change end to end",
];

const artefacts = [
  {
    title: "Live session on your backlog",
    detail:
      "Under NDA: one real issue → plan → tested change on your stack, not a toy demo.",
  },
  {
    title: "Team playbook",
    detail:
      "How your team runs agent-owned work: roles, handoffs, and when a human must decide.",
  },
  {
    title: "Review checklist",
    detail:
      "What “good” looks like for agent-assisted PRs — so review stays consistent.",
  },
  {
    title: "Repo instruction starter",
    detail:
      "A first cut of project instructions / agent context for your repos — you keep and edit it.",
  },
  {
    title: "30-day pilot backlog",
    detail:
      "A short, ranked list of workflows to try next, with owners and success criteria.",
  },
];

const playbookToc = [
  "1. Roles & handoffs",
  "2. When an agent owns a change",
  "3. Issue → plan → tested change",
  "4. Review bar for agent-assisted PRs",
  "5. Repo instructions (starter)",
  "6. 30-day pilot backlog",
];

const _waysToWork = [
  {
    name: "Workshop Lite",
    price: "From CHF 2’500",
    time: "~2h",
    fits: "Smaller groups, a first look, or when you need the method without a full half-day.",
  },
  {
    name: "Half-day",
    price: "CHF 4’500–5’500",
    time: "~3–3.5h",
    fits: "The main offer: live backlog work under NDA plus full artefacts and pilot plan.",
  },
  {
    name: "Consulting hours after",
    price: "Scoped separately",
    time: "Time-boxed",
    fits: "A fixed block to refine the playbook and unblock the 30-day pilot — then done.",
  },
];

const beforeSession = [
  {
    title: "NDA",
    detail:
      "We sign first so we can work on a real backlog item, not a toy repo.",
  },
  {
    title: "One real backlog issue",
    detail:
      "Pick a concrete ticket your team actually cares about — that’s the live workflow.",
  },
  {
    title: "Tools",
    detail:
      "Bring Cursor, Claude, Copilot, or whatever you already use. Tool-agnostic by design.",
  },
  {
    title: "Who attends",
    detail:
      "Best at about 6–12: leads and ICs who will own the pilot — not a spectator room.",
  },
];

const agenda = [
  {
    title: "Context & goals",
    time: "25 min",
    detail:
      "Where your team stalls with copilots today; what “agent-owned” should mean for you.",
  },
  {
    title: "Live workflow",
    time: "75 min",
    detail:
      "On your backlog (NDA): issue → plan → change → tests. Guardrails as we go.",
  },
  {
    title: "Break",
    time: "15 min",
    detail: "Short pause — optional questions offline.",
  },
  {
    title: "Method & artefacts",
    time: "50 min",
    detail:
      "Playbook, review checklist, repo instruction starter — adapted to your tools.",
  },
  {
    title: "Pilot & after",
    time: "30 min",
    detail:
      "30-day backlog, who owns what, optional fixed consulting block for the pilot.",
  },
];

const forWhom = [
  "Engineering leads and senior ICs who want a shared method, not another tool trial",
  "Teams of roughly 6–12 who can join one half-day remote (or on-site in Switzerland)",
  "Shops already using Cursor, Claude, Copilot, or similar — tool-agnostic by design",
];

const notFor = [
  "Teams looking for a vendor pitch or a product to buy",
  "One-off “AI magic” demos with no artefacts to keep",
  "Groups larger than ~12 in a single session (we’ll split or scope Workshop Lite)",
];

const experience = [
  {
    title: "Founder, Weft Labs",
    detail:
      "Zürich, 2023–present — product and engineering for a platform that lets AI agents reach external data, software, and services through one integration.",
  },
  {
    title: "Conversational AI at On",
    detail:
      "From Aug 2025 on the Conversational AI team: agent architecture, monitoring, and live evaluation for an internal ecommerce platform.",
  },
  {
    title: "ex-CTO, Pix Group",
    detail:
      "Led 5 engineers and product experts while digitizing personalized apparel; scaled ops and platforms end to end.",
  },
];

const faqs = [
  {
    q: "What does it cost?",
    a: "Workshop Lite (≈2h) from CHF 2’500. A full half-day is typically CHF 4’500–5’500 depending on team size, remote vs on-site, and prep. A fixed consulting block after the workshop is scoped separately. You’ll get a written scope before anything is booked.",
  },
  {
    q: "How many people?",
    a: "Best at about 6–12. Larger groups work as Workshop Lite or split sessions — we’ll decide on the discovery call.",
  },
  {
    q: "Which tools — Cursor, Claude, Copilot…?",
    a: "Tool-agnostic. We work with what you already use. The method (issue → plan → tested change, review bar, repo instructions) transfers across IDEs and agents.",
  },
  {
    q: "NDA?",
    a: "Yes. We work under NDA so we can use a real backlog item on your stack.",
  },
  {
    q: "Remote or on-site?",
    a: "Remote by default. On-site across Switzerland when that helps the team move faster.",
  },
  {
    q: "Languages?",
    a: "English, Italian, or Spanish — pick what works for the room.",
  },
  {
    q: "What does “after” support mean?",
    a: "A fixed consulting block for the 30-day pilot — refine the playbook, unblock early PRs, then done. Time-boxed and scoped up front.",
  },
  {
    q: "How fast do you reply?",
    a: "I aim to reply within one business day. Book discovery on the calendar for the fastest path.",
  },
];

function CtaRow({ primaryLabel = "Book 30-min discovery" }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 font-clash-display-medium text-sm text-background transition hover:opacity-90"
      >
        {primaryLabel}
      </a>
      <a
        href={askMailto}
        className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-clash-display-medium text-sm text-foreground transition hover:border-primary hover:text-primary"
      >
        Ask a question
      </a>
    </div>
  );
}

export default function AgenticWorkshopPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8 pb-28">
      <article className="mx-auto max-w-3xl">
        <VersionChrome versionId="baseline" label="Original page" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />
        <Link
          href="/"
          className="mb-8 inline-flex font-clash-display-medium text-sm text-muted-foreground transition hover:text-foreground"
        >
          ← Back home
        </Link>

        <header className="mb-14">
          <p className="mb-3 font-clash-display-medium text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Half-day workshop
          </p>
          <h1 className="font-clash-display-semibold text-4xl leading-tight sm:text-5xl">
            Leave with an agent-owned workflow on your stack.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            In a half-day, your team runs issue → plan → tested change on a live
            backlog item under NDA — and keeps the playbook, checklist, and
            pilot backlog. No slide deck that dies in a Drive folder.
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Patrick Barattin · Zürich · Founder,{" "}
            <a
              href="https://weftlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-green-500/40 hover:decoration-green-500"
            >
              Weft Labs
            </a>
            {" · "}
            ex-CTO · Conversational AI at On
          </p>

          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-sm">
              <dt className="font-clash-display-medium text-muted-foreground">
                Duration
              </dt>
              <dd className="mt-1 text-foreground/90">
                ~3–3.5h with breaks (half-day). Workshop Lite ≈2h.
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-sm">
              <dt className="font-clash-display-medium text-muted-foreground">
                Format
              </dt>
              <dd className="mt-1 text-foreground/90">
                Remote default · on-site in CH · team ~6–12 · EN / IT / ES
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 px-4 py-3 sm:col-span-2 backdrop-blur-sm">
              <dt className="font-clash-display-medium text-muted-foreground">
                Investment
              </dt>
              <dd className="mt-1 text-foreground/90">
                From{" "}
                <strong className="font-clash-display-semibold">
                  CHF 2’500
                </strong>{" "}
                (Workshop Lite) · half-day typically{" "}
                <strong className="font-clash-display-semibold">
                  CHF 4’500–5’500
                </strong>
                · consulting hours after, scoped separately. Free 30-min
                discovery; written scope before booking.
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <CtaRow />
          </div>
        </header>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">The problem</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            Most teams already tried Copilot or chat. Progress stalls when AI
            stays outside the delivery loop and nobody shares a method for
            agent-owned changes.
          </p>
          <ul className="mt-6 space-y-3">
            {problems.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground/80"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            What you leave with
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Named artefacts your team keeps — not a recording of someone else’s
            demo.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {artefacts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/60 px-4 py-4 backdrop-blur-sm sm:last:col-span-2"
              >
                <p className="font-clash-display-semibold text-base">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card/40 px-5 py-5">
            <p className="font-clash-display-semibold text-base">
              How this stays concrete
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              You’ll work with someone who builds agent systems daily — Weft
              Labs foundation work, Conversational AI at On, and prior CTO
              delivery. The session runs on one real backlog issue under NDA;
              you leave with named artefacts, not a generic deck.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={workshopImages.playbookCover}
                alt="Playbook cover — table of contents"
                className="aspect-[21/9] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="border-t border-border px-4 py-4">
                <p className="font-clash-display-medium text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Playbook preview · table of contents
                </p>
                <ol className="mt-3 space-y-1.5 font-mono text-sm text-foreground/80">
                  {playbookToc.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            After the session: a fixed consulting block for the 30-day pilot —
            refine the playbook, unblock early PRs, scoped then done.
          </p>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">Ways to work</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Three clear options — pick what fits the team and the moment.
          </p>
          <PricingCards className="mt-6" />
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            Before the session
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A short prep list so the half-day lands on real work.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {beforeSession.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/60 px-4 py-4 backdrop-blur-sm"
              >
                <p className="font-clash-display-semibold text-base">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">Agenda</h2>
          <ol className="mt-6 space-y-5">
            {agenda.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-clash-display-semibold text-lg">
                    <span className="mr-2 text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-1 text-base text-foreground/80">
                    {item.detail}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground">
                  {item.time}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Blocks total ~3h15 focused + break ≈ half-day. Workshop Lite
            compresses live workflow + artefacts into ≈2h.
          </p>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            Who it&apos;s for
          </h2>
          <ul className="mt-6 space-y-3">
            {forWhom.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground/80"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-clash-display-semibold text-lg">
            Who it&apos;s not for
          </h3>
          <ul className="mt-4 space-y-3">
            {notFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground/80"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">
            Relevant experience
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            You’ll work with someone who builds agent systems daily. Full detail
            on my{" "}
            <Link
              href="/cv"
              className="underline decoration-green-500/40 hover:decoration-green-500"
            >
              CV
            </Link>
            .
          </p>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
            {experience.map((item) => (
              <li key={item.title}>
                <strong className="font-clash-display-semibold">
                  {item.title}
                </strong>{" "}
                — {item.detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">FAQ</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-clash-display-semibold text-lg">
                  {item.q}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-foreground/80">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="font-clash-display-semibold text-2xl">
            Start with a free discovery call
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Thirty minutes to see if this fits. Written scope before any booking
            — no commitment until then.
          </p>
          <div className="mt-6">
            <CtaRow />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or email{" "}
            <a
              className="underline decoration-green-500/40 hover:decoration-green-500"
              href="mailto:p.barattin@gmail.com"
            >
              p.barattin@gmail.com
            </a>
          </p>
        </section>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
