import Link from "next/link";

export const metadata = {
  title: "CV",
  description:
    "Patrick Barattin, founder of Weft Labs. Previously senior software engineer at On AG and Atpoint, and CTO of Pix Group.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Patrick Barattin — CV",
    description:
      "Founder of Weft Labs. Product and engineering for AI agents that can reach data, software, and services through one integration.",
    url: "/cv",
    type: "profile",
  },
};

const roles = [
  {
    title: "Founder",
    org: "Weft Labs GmbH",
    href: "https://weftlabs.com",
    place: "Zurich, Switzerland",
    dates: "Jan 2023 – Present",
    points: [
      "Co-founded Weft Labs and lead product and engineering for a platform that lets AI agents access external data, software, and services through one integration.",
      "Designed and shipped the end-to-end system for provider discovery, secure access, pay-per-use transactions, and spending controls.",
    ],
  },
  {
    title: "Senior Software Engineer",
    org: "On AG",
    href: "https://www.on.com",
    place: "Zurich, Switzerland",
    dates: "Jan 2023 – May 2026",
    points: [
      "From August 2025, worked on the Conversational AI team, building an internal platform for conversational ecommerce and focusing on agent architecture, monitoring, and live evaluation.",
      "Supported business-critical checkout and payments work, including Adyen client upgrades, multi-account app releases, domain migration, and a BFCM hotfix that unblocked sales.",
      "Spent more than a year on the on-call rotation, leading over 15 incidents and improving distributed tracing with New Relic.",
      "Shipped a Low Stock in Key Variants MVP in two weeks. After handover it contributed to a 0.9% conversion-rate improvement.",
      "Led a Ruby upgrade, with YJIT and jemalloc, that cut average response time from 220ms to under 100ms, and started cleanup of 10M+ order records for SOX compliance.",
      "Delivered a Cloudflare Worker for Apple Pay domain validation that other teams later reused. Landed 130+ merged pull requests on the core ecommerce backend.",
    ],
  },
  {
    title: "Senior Software Engineer",
    org: "Atpoint SA",
    href: "https://atpoint.ch/en/products/finap",
    place: "Switzerland",
    dates: "Oct 2021 – Dec 2022",
    points: [
      "Led the migration of Finap from a customer-specific app to an engine that could serve many customers.",
      "Scaled the product from a single instance to more than 250 customers. The overhaul contributed to a 10x increase in company revenue.",
    ],
  },
  {
    title: "Chief Technology Officer",
    org: "Pix Group Italia S.r.l.",
    place: "Italy",
    dates: "May 2018 – Sep 2021",
    points: [
      "Led 5 engineers and product experts while digitizing personalized apparel, from paper orders and cash to more than 300 customized ecommerce communities on Solidus.",
      "Ran a Kubernetes cluster for the ecommerce platforms and a custom CRM, and automated the path from order capture to warehouse and print-on-demand.",
      "Managed more than 20,000 customized items per month in peak season. Grew company revenue from €500k to €2.5M.",
    ],
  },
  {
    title: "Founder, Job'scool",
    org: "Larin Group S.r.l.",
    place: "Italy",
    dates: "2016 – 2018",
    points: [
      "Built a Rails app for the paperwork required by mandatory high-school internships after new Italian legislation.",
      "Reached 20% of Italian high schools in 14 months and presented the project to the Minister of Education.",
    ],
  },
  {
    title: "Software Developer",
    org: "Mostaza S.r.l.",
    place: "Italy",
    dates: "Summer 2015",
    points: [
      "Contributed to web software projects during a summer role.",
    ],
  },
];

const skills = [
  "Ruby, Python, JavaScript, HTML, CSS, SQL, Hotwire, Stimulus",
  "Ruby on Rails, Next.js, Minitest, RSpec",
  "Docker, Kubernetes, Linux, CI/CD, Kamal, AWS, GCP",
  "Agent systems, evaluation pipelines, data validation, pay-per-use access",
];

export default function CvPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex font-clash-display-medium text-sm text-muted-foreground transition hover:text-foreground"
        >
          ← Back home
        </Link>

        <header className="mb-12">
          <p className="mb-3 font-clash-display-medium text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Curriculum vitae
          </p>
          <h1 className="font-clash-display-semibold text-4xl sm:text-5xl">
            Patrick Barattin
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Founder of Weft Labs. I build the layer that lets AI agents reach
            data, software, and services through one integration.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Zurich, CH ·{" "}
            <a className="underline decoration-green-500/40 hover:decoration-green-500" href="mailto:p.barattin@gmail.com">
              p.barattin@gmail.com
            </a>
            {" · "}
            <a className="underline decoration-green-500/40 hover:decoration-green-500" href="https://nittarab.dev">
              nittarab.dev
            </a>
            {" · "}
            <a className="underline decoration-green-500/40 hover:decoration-green-500" href="https://github.com/nittarab">
              GitHub
            </a>
          </p>
        </header>

        <section className="space-y-8">
          <h2 className="font-clash-display-semibold text-2xl">Experience</h2>
          {roles.map((role) => (
            <section key={`${role.org}-${role.dates}`} className="border-t border-border pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-clash-display-semibold text-xl">
                  {role.title}
                  {" · "}
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-green-500/40 hover:decoration-green-500"
                    >
                      {role.org}
                    </a>
                  ) : (
                    role.org
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{role.dates}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{role.place}</p>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground/80">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">Technologies</h2>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground/80">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-clash-display-semibold text-2xl">Education</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              BSc in Information and Business Organization Engineering, incomplete.
              University of Trento, Italy, 2016–2018. Student representative for
              the department.
            </p>
            <p>
              Computer Science high-school diploma. I.T.I. G. Segato, Italy,
              2011–2016.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
