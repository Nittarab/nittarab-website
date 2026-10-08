import { tooling } from "./content";

export default function ToolingBar({
  className = "",
  label = "Tool-agnostic. Bring what you use",
}) {
  return (
    <div className={`${className}`}>
      {label ? (
        <p className="mb-2 font-clash-display-medium text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {tooling.map((name) => (
          <span
            key={name}
            className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 font-clash-display-medium text-xs text-foreground/90"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
