import Link from "next/link";

export default function VersionChrome({ versionId, label }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
      <Link
        href="/agentic-workshop"
        className="font-clash-display-medium text-sm text-muted-foreground transition hover:text-foreground"
      >
        ← All versions
      </Link>
      <p className="font-clash-display-medium text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {versionId} · {label}
      </p>
    </div>
  );
}
