import { waysToWork } from "./content";

export default function PricingCards({ className = "" }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {waysToWork.map((w) => (
        <div
          key={w.name}
          className={`rounded-2xl border px-5 py-5 backdrop-blur-sm ${
            w.featured
              ? "border-primary/50 bg-primary/5 shadow-bento"
              : "border-border bg-card/40"
          }`}
        >
          <p className="font-clash-display-semibold text-lg">{w.name}</p>
          <p className="mt-2">
            <strong className="font-clash-display-semibold text-xl text-foreground">
              {w.price}
            </strong>
            <span className="text-sm text-muted-foreground"> · {w.time}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            {w.fits}
          </p>
          {w.featured ? (
            <p className="mt-3 font-clash-display-medium text-xs uppercase tracking-[0.12em] text-primary">
              Main offer
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
