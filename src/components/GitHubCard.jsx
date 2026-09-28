"use client";

import { useEffect, useRef, useState } from "react";
import { fetchGithubContributions } from "../app/actions/fetchGithubContributions";
import Card from "./ui/Card";

const WEEKS_TO_SHOW = 17;

function visibleWeeks(calendar) {
  return calendar.weeks.slice(-WEEKS_TO_SHOW);
}

function padWeek(days) {
  return Array.from({ length: 7 }, (_, weekday) => {
    return (
      days.find((day) => day.weekday === weekday) ?? {
        weekday,
        empty: true,
      }
    );
  });
}

function windowTotal(weeks) {
  return weeks.reduce(
    (sum, week) => sum + week.days.reduce((inner, day) => inner + day.count, 0),
    0,
  );
}

function thresholds(weeks) {
  const counts = weeks
    .flatMap((week) => week.days.map((day) => day.count))
    .filter((count) => count > 0)
    .sort((left, right) => left - right);

  if (counts.length === 0) return [1, 2, 3];

  const at = (ratio) =>
    counts[Math.min(counts.length - 1, Math.floor(counts.length * ratio))];

  return [at(0.25), at(0.5), at(0.75)];
}

function colorClass(count, [low, mid, high]) {
  if (!count) return "bg-white";
  if (count <= low) return "bg-green-300";
  if (count <= mid) return "bg-green-400";
  if (count <= high) return "bg-green-500";
  return "bg-green-600";
}

export default function GitHubCard({ className, onLoad }) {
  const [calendar, setCalendar] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const containerRef = useRef(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    fetchGithubContributions()
      .then((live) => setCalendar(live))
      .catch(() => setCalendar(null))
      .finally(() => {
        if (onLoad) onLoad();
      });
  }, [onLoad]);

  const handleMouseEnter = (event, date, count) => {
    const rect = containerRef.current.getBoundingClientRect();
    setHoverInfo({
      date,
      count,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (!hoverInfo || !popoverRef.current || !containerRef.current) return;

    const popover = popoverRef.current;
    const rect = popover.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    let left = hoverInfo.x;
    let top = hoverInfo.y - rect.height - 10;

    if (left + rect.width > containerRect.width) {
      left = containerRect.width - rect.width;
    }
    if (top < 0) top = hoverInfo.y + 10;

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  }, [hoverInfo]);

  if (!calendar) {
    return (
      <Card
        className={`border border-white/30 bg-linear-to-br from-gray-200 to-gray-300 p-4 ${className}`}
      >
        <div className="mb-4 h-6 w-24 animate-pulse rounded bg-gray-400/50" />
        <div className="mb-4 h-28 animate-pulse rounded-lg bg-gray-400/30" />
      </Card>
    );
  }

  const weeks = visibleWeeks(calendar);
  const levels = thresholds(weeks);
  const recentTotal = windowTotal(weeks);

  return (
    <Card
      ref={containerRef}
      className={`bg-linear-to-br from-gray-200 to-gray-300 p-4 border border-white/30 ${className}`}
    >
      <div className="mb-4 flex items-center space-x-2">
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="z-10 text-gray-800"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        <p className="font-clash-display-medium text-xl text-gray-800">
          GitHub
        </p>
      </div>

      <div className="relative mb-4">
        <div className="grid grid-cols-17 gap-1">
          {weeks.map((week) => (
            <div key={week.days[0]?.date} className="grid grid-rows-7 gap-1">
              {padWeek(week.days).map((day) =>
                day.empty ? (
                  <div
                    key={`${week.days[0].date}-empty-${day.weekday}`}
                    className="aspect-square rounded-lg bg-transparent"
                  />
                ) : (
                  <button
                    key={day.date}
                    type="button"
                    aria-label={`${day.date}: ${day.count} contributions`}
                    className={`aspect-square w-full rounded-lg border-0 p-0 ${colorClass(day.count, levels)}`}
                    onMouseEnter={(event) =>
                      handleMouseEnter(event, day.date, day.count)
                    }
                    onFocus={(event) =>
                      handleMouseEnter(event, day.date, day.count)
                    }
                    onMouseLeave={() => setHoverInfo(null)}
                    onBlur={() => setHoverInfo(null)}
                  />
                ),
              )}
            </div>
          ))}
        </div>

        {hoverInfo && (
          <div
            ref={popoverRef}
            className="absolute z-10 rounded-md bg-gray-900 p-2 text-sm text-white"
          >
            {`${hoverInfo.date}: ${hoverInfo.count} contributions`}
          </div>
        )}
      </div>

      <div className="mb-3 font-clash-display-regular text-base text-gray-700">
        {recentTotal.toLocaleString()} contributions in 17 weeks
        <span className="mt-1 block text-sm text-gray-600">
          {calendar.totalContributions.toLocaleString()} in the last year
        </span>
      </div>

      <div className="space-y-2">
        <a
          href="/skyline"
          className="block w-full rounded-full bg-linear-to-r from-green-500 to-emerald-600 px-4 py-2 text-center font-clash-display-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Explore my 3D skyline
        </a>
        <a
          href="https://github.com/nittarab"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full overflow-hidden rounded-full bg-linear-to-r from-gray-700 to-gray-900 px-4 py-2 text-center font-clash-display-medium text-white transition-all duration-300 hover:shadow-lg"
        >
          <span className="relative z-10 text-base">Follow on GitHub</span>
          <div className="absolute inset-0 origin-left scale-x-0 transform bg-linear-to-r from-gray-800 to-black transition-transform duration-300 group-hover:scale-x-100"></div>
        </a>
      </div>
    </Card>
  );
}
