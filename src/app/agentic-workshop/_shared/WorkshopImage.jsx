import Image from "next/image";

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export default function WorkshopImage({
  src,
  alt,
  aspect = "video",
  className = "",
  sizes = "(min-width: 1024px) 400px, 100vw",
  priority = false,
}) {
  const aspectClass = aspectClasses[aspect] || aspectClasses.video;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-muted/40 ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
