"use client";

import { useMemo, useState } from "react";
import { calendarUrl, factoryNeeds, factoryRepos } from "./content";

export default function FactoryCheck({ className = "" }) {
  const [selected, setSelected] = useState(
    () => new Set(factoryNeeds.map((n) => n.id)),
  );

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(factoryNeeds.map((n) => n.id)));
  const clearAll = () => setSelected(new Set());

  const ranked = useMemo(() => {
    const needIds = [...selected];
    return factoryRepos
      .map((repo) => {
        const hit = needIds.filter((id) => repo.caps.includes(id)).length;
        const score = needIds.length === 0 ? 0 : hit / needIds.length;
        return { ...repo, hit, score, total: needIds.length };
      })
      .sort((a, b) => b.hit - a.hit || a.name.localeCompare(b.name));
  }, [selected]);

  return (
    <div className={className}>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-clash-display-semibold text-sm text-primary">
              What a factory needs
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <button
                type="button"
                onClick={selectAll}
                className="underline decoration-green-500/40 hover:text-foreground"
              >
                All
              </button>
              <span aria-hidden>·</span>
              <button
                type="button"
                onClick={clearAll}
                className="underline decoration-green-500/40 hover:text-foreground"
              >
                None
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tick the capabilities you need after the workshop method is in
            place. Cards re-rank so you compare OSS hosts, not shop for another
            IDE trial.
          </p>
          <ul className="mt-5 space-y-2">
            {factoryNeeds.map((n) => {
              const on = selected.has(n.id);
              return (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => toggle(n.id)}
                    aria-pressed={on}
                    className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${
                      on
                        ? "border-primary/50 bg-primary/5"
                        : "border-border bg-card/40 hover:border-primary/30"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
                        on
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-transparent"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>
                      <span className="font-clash-display-semibold text-sm">
                        {n.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-foreground/80">
                        {n.detail}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <p className="font-clash-display-semibold text-sm text-primary">
            Open-source starting points
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Curated GitHub repos. Stars are approximate snapshots (Oct 2026),
            not live. Not a vendor pitch: the workshop sells the method and
            leave-behind; these are optional hosts once that method exists.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {ranked.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card/60 p-5 transition hover:border-primary/40 hover:shadow-bento"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-clash-display-semibold text-lg group-hover:text-primary">
                    {repo.name}
                  </p>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                    {repo.hit}/{repo.total || factoryNeeds.length} fit
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">
                  {repo.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {repo.caps.map((cap) => {
                    const need = factoryNeeds.find((n) => n.id === cap);
                    const active = selected.has(cap);
                    return (
                      <span
                        key={cap}
                        className={`rounded-full px-2 py-0.5 text-[11px] ${
                          active
                            ? "bg-primary/15 text-primary"
                            : "bg-muted/60 text-muted-foreground"
                        }`}
                      >
                        {need?.label || cap}
                      </span>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {repo.license} · ~{repo.stars} ★ · {repo.activity} · GitHub ↗
                </p>
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p className="text-sm text-foreground/90">
              Method first, then a stack. On discovery we map one of these (or
              what you already run) into the half-day leave-behind. You do not
              pay for a tool tour.
            </p>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex shrink-0 rounded-full bg-primary px-4 py-2 font-clash-display-medium text-xs text-primary-foreground transition hover:opacity-90 sm:mt-0"
            >
              Book discovery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
