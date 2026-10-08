import { calendarUrl, identity, pricing } from "./content";

export default function StickyCtaStrip() {
  const liteFrom = pricing.lite.replace(/^From /, "from ");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 sm:px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-center text-xs leading-snug text-muted-foreground sm:text-left sm:text-sm">
          <span className="text-foreground/90">Lite {liteFrom}</span>
          <span className="mx-1.5 text-border">·</span>
          <span className="font-clash-display-semibold text-foreground">
            Half-day {pricing.halfDay}
          </span>
          <span className="mx-1.5 hidden text-border sm:inline">·</span>
          <span className="hidden sm:inline">{identity.languages}</span>
        </p>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 font-clash-display-semibold text-sm text-primary-foreground shadow-glow transition hover:opacity-90 sm:w-auto"
        >
          Book discovery
        </a>
      </div>
    </div>
  );
}
