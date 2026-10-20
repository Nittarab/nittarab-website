import { askMailto, calendarUrl } from "./content";

export default function Cta({
  primaryLabel = "Book 30-min discovery",
  showAsk = true,
  className = "",
  primaryClassName = "",
  secondaryClassName = "",
}) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          primaryClassName ||
          "inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 font-clash-display-medium text-sm text-background transition hover:opacity-90"
        }
      >
        {primaryLabel}
      </a>
      {showAsk ? (
        <a
          href={askMailto}
          className={
            secondaryClassName ||
            "inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-clash-display-medium text-sm text-foreground transition hover:border-primary hover:text-primary"
          }
        >
          Ask a question
        </a>
      ) : null}
    </div>
  );
}
