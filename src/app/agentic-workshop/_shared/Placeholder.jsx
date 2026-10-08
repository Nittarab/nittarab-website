export default function Placeholder({
  label = "Screenshot placeholder",
  aspect = "video",
  className = "",
  src,
  alt,
}) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : aspect === "portrait"
          ? "aspect-[3/4]"
          : "aspect-video";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-muted/40 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt || label}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || label}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${aspectClass} items-center justify-center rounded-xl border border-dashed border-border bg-muted/60 px-4 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <p className="font-clash-display-medium text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
