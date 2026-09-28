import Card from "./ui/Card";

export default function WeftLabsCard() {
  return (
    <a
      href="https://weftlabs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <Card className="h-full p-6">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-emerald-50 to-green-50 dark:from-green-900/10 dark:to-emerald-900/10"></div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="font-clash-display-semibold text-2xl text-foreground transition-colors group-hover:text-primary">
              Weft Labs
            </h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-clash-display-medium text-xs text-emerald-700 dark:border dark:border-green-800 dark:bg-green-900/30 dark:text-green-400">
              Now building
            </span>
          </div>

          <p className="mb-6 font-clash-display-medium leading-relaxed text-muted-foreground">
            One integration for AI agents to reach data, software, and services,
            with pay-per-use access and spending controls.
          </p>

          <span className="mt-auto font-clash-display-medium text-sm text-foreground underline decoration-green-500/50 transition-all group-hover:decoration-green-500">
            weftlabs.com
          </span>
        </div>
      </Card>
    </a>
  );
}
