import Image from "next/image";
import { identity, stackLine, workshopImages } from "./content";

export default function Facilitator({ className = "", compact = false }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 ${className}`}
    >
      <Image
        src={workshopImages.founderPhoto}
        alt={identity.name}
        width={128}
        height={128}
        sizes={compact ? "48px" : "64px"}
        className={`shrink-0 rounded-full object-cover ${compact ? "h-12 w-12" : "h-16 w-16"}`}
      />
      <div className="min-w-0">
        <p className="font-clash-display-semibold text-base leading-tight">
          {identity.name}
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {identity.city} · {identity.languages}
        </p>
        <p
          className={`mt-1 text-foreground/80 ${compact ? "text-xs" : "text-sm"} leading-snug`}
        >
          {stackLine}
        </p>
      </div>
    </div>
  );
}
