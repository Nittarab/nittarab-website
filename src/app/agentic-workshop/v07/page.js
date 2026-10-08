import Cta from "../_shared/Cta";
import {
  artefactImageByTitle,
  artefacts,
  email,
  identity,
  pricing,
} from "../_shared/content";
import Facilitator from "../_shared/Facilitator";
import Placeholder from "../_shared/Placeholder";
import PricingCards from "../_shared/PricingCards";
import StickyCtaStrip from "../_shared/StickyCtaStrip";
import ToolingBar from "../_shared/ToolingBar";
import VersionChrome from "../_shared/VersionChrome";

export const metadata = {
  title: "Agentic Workshop v07 — Ultra-minimal",
  robots: { index: false, follow: false },
};

const three = artefacts.filter((a) =>
  [
    "Live session on your backlog",
    "Team playbook",
    "30-day pilot backlog",
  ].includes(a.title),
);

export default function V07() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-background px-4 py-16 text-foreground sm:px-6 pb-28">
      <article className="mx-auto w-full max-w-xl">
        <VersionChrome versionId="v07" label="Ultra-minimal" />
        <Facilitator className="mb-8" compact />
        <ToolingBar className="mb-8" />

        <p className="text-sm text-muted-foreground">
          {identity.name} · {identity.city} · {identity.languages}
        </p>

        <h1 className="mt-8 font-clash-display-semibold text-4xl leading-tight sm:text-5xl">
          Leave with an agent-owned workflow on your stack.
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Half-day under NDA. From{" "}
          <strong className="text-foreground">
            {pricing.lite.replace("From ", "")}
          </strong>
          {" · "}
          half-day{" "}
          <strong className="text-foreground">{pricing.halfDay}</strong>.
        </p>

        <div className="mt-12 space-y-6">
          {three.map((a) => (
            <div key={a.title}>
              <Placeholder
                label={`Screenshot: ${a.title}`}
                aspect="wide"
                src={artefactImageByTitle[a.title]}
              />
              <p className="mt-3 font-clash-display-semibold">{a.title}</p>
              <p className="mt-1 text-sm text-foreground/80">{a.detail}</p>
            </div>
          ))}
        </div>

        <PricingCards className="mt-12" />
        <div className="mt-14">
          <Cta showAsk={false} primaryLabel="Book 30-min discovery" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{email}</p>
      </article>
      <StickyCtaStrip />
    </main>
  );
}
